import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import memories from './images/memories.png'

import {getPosts} from './actions/posts'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

export default function App() {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <>
        <div className="font-raleway text-white underline underline-offset-2 flex justify-center items-center h-20 bg-blue-400 text-3xl gap-4 font-bold">
            <div>Memories</div>
            <img src={memories} alt="" className="h-16 w-16"/>
        </div>
        <div className="flex justify-evenly px-2 py-10 font-raleway">
            <Posts setCurrentId={setCurrentId}/>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
        </>
    )
}

