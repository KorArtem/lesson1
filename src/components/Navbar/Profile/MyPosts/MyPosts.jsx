import React from "react";
import Post from "./Post/Post";


const MyPosts = () =>{
    return(
        <div>
            <Post like="5"/>
            <Post like="2"/>
            <Post like="1"/>
            <Post like="4"/>
            <Post like="3"/>
        </div>
    )

}

export default MyPosts;