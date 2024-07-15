import { useState, useEffect } from "react";
import FileBase64 from 'react-filebase64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

function Form({currentId, setCurrentId}) {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: [], selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const [fileKey, setFileKey] = useState(Date.now());
    const [tagString, setTagString] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) {
            setPostData(post);
            setTagString(post.tags.join(' '));
        } 
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            if(postData.creator && postData.title && postData.message && postData.tags) dispatch(createPost(postData));
            else alert('Fill all the fields!');
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: '', tags: [], selectedFile: ''
        });
        setTagString('');
        setFileKey(Date.now());
    }

    
    const handleTagChange = (e) => {
        const newTagString = e.target.value;
        setTagString(newTagString);
        setPostData({...postData, tags: newTagString.split(' ')});
    }
    
    return (
        <>
            <div className="text-black flex justify-center h-screen w-2/6">
                <form autoComplete="off" noValidate onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center gap-4 bg-white rounded-2xl h-4/6 p-4" >
                    <div className=" text-2xl font-semibold underline">{currentId? 'Editing' : 'Create' } A Memory</div>
                    <input className="border-gray-500 border-2 w-3/4 rounded-md p-2 bg-white" placeholder="Creator" name = "creator"  value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                    <input className="border-gray-500 border-2 w-3/4 rounded-md p-2 bg-white" name = "title" placeholder="Title"  value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                    <input className="border-gray-500 border-2 w-3/4 rounded-md p-2 bg-white" name = "message" placeholder="Message"  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                    <input className="border-gray-500 border-2 w-3/4 rounded-md p-2 bg-white" name = "tags" placeholder="Tags"  value={tagString} onChange={handleTagChange}/>
                    <div className="w-3/4">
                        <FileBase64 key={fileKey} type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
                    </div>
                    <div className="flex gap-4">
                        <button className="btn btn-outline" type="submit" >Submit</button>
                        <button className="btn btn-outline" type="button" onClick={clear} >Reset</button>
                    </div>
                    
                </form>

            </div>
        </>
    )
}

export default Form;