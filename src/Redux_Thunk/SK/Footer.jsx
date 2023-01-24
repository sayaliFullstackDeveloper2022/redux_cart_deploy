import React from "react";

const Footer = () => {
    const thisYear=new Date().getFullYear();
    return <>
        <footer>
            <p> copyright ©️ {thisYear}</p>
        </footer>
    </>
}

export default Footer;