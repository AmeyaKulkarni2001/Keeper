import React from "react";

function Footer(){
    const Year = new Date().getFullYear();
    return(
        <footer>
            <p>CopyrightÂ© {Year}</p>
        </footer>
    );
}
export default Footer;