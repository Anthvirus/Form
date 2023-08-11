import React from "react";

function Footer(){
    return (
        <footer className="h-20 w-full text-purple-950 flex justify-center">
            <p className="text-sm xl:text-lg m-auto">Copyright {new Date().getFullYear()}.</p>
        </footer>
    );
}

export default Footer;