import moment from 'moment';
import { useDispatch } from "react-redux";
import { deletePost, likePost } from '../../../actions/posts';    

function Post({ post, setCurrentId }) {

    const dispatch = useDispatch();

    return (
        <>
            <div className=" text-black flex flex-col w-[280px] max-h-[450px] rounded-2xl bg-white overflow-hidden">
                <img src={post.selectedFile} alt=""  className="h-[180px] w-full rounded-t-2xl"/>
                <div className="flex flex-col w-full justify-evenly p-4">
                    <div className="flex justify-between">
                        <div className=" text-sm text-gray-400 mb-2">{post.tags.map((tag) => `#${tag} `)}</div>
                        <button className="btn btn-sm btn-ghost" onClick={() => setCurrentId(post._id)}>. . .</button>
                    </div>
                    <div className=" text-2xl font-semibold">{post.title}</div>
                    <div className=" font-medium mb-2">{post.message}</div>
                    <div className=" text-sm text-gray-400">{`👤 ${post.creator}`}</div>
                    <div className=" text-sm text-gray-400">{moment(post.createdAt).fromNow()}</div>
                    <div className="flex justify-between">
                        <button className="btn btn-sm btn-ghost  mt-4 " onClick={() => dispatch(likePost(post._id))}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <div>{post.likeCount}</div>
                            
                        </button>
                        <button className=" btn btn-sm btn-square btn-outline mt-4 " onClick={() => dispatch(deletePost(post._id))}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Post;