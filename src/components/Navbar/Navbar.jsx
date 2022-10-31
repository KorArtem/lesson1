import React from "react";
import s from "./Navbar.module.css" 

const Navbar = () =>{
    return(
       <nav className={s.Navbar}>
            <div>Profile</div>
            <div>Messages</div>
       </nav>
        
    )
}

export default Navbar; 