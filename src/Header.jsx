import React from "react";

function Header(){
    return (
        <header className="w-full h-20 justify-start px-2 xl:px-7 flex font-sans text-purple-950">
            <h1 className="my-auto underline-offset-4 underline font-extrabold text-3xl lg:text-4xl">Banq</h1>
            {/* <div className="flex space-x-2 my-auto">
                <button className="bg-slate-300 w-15 h-10 md:w-20 md:h-12 xl:w-32 text-xm px-2 border text-black border-black-900 hover:bg-blue-500 hover:text-white" type="button">Sign In</button>
                <button className="bg-black w-15 h-10 md:w-20 md:h-12 xl:w-32 text-sm px-2 border hover:bg-white hover:text-black" type="button">Sign Up</button>
           </div> */}
        </header>
    );
}

export default Header;