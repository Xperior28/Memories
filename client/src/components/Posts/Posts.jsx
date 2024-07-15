import { useSelector } from 'react-redux';

import Post from "./Post/Post";

function Posts({setCurrentId}) {

    const posts = useSelector((state) => state.posts);
    
    console.log(posts);

    return (
        <>
            <div className="text-black flex flex-wrap justify-center h-screen w-4/6 p-2 gap-12">
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId}/> 
                    </div>
                ))}
                   
            </div>
        </>
    )
}


export default Posts;