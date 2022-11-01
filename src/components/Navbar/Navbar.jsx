import React from "react";
import s from "./Navbar.module.css" 

const Navbar = () =>{
    return(
       <nav className={s.Navbar}>
        <div>
            <div>Profile</div>
            <div>Messages</div>
        </div>
       </nav>
        
    )
}

export default Navbar; 