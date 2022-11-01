import React from "react";
import Profile from "../Navbar/Profile/Profile";
import s from "./Content.module.css" 

const Content = () =>{
    return(
       <div className={s.Content}>
        <Profile/>
       </div>
    )
}

export default Content; 