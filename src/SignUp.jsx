import React from "react";

function SignUp(){
    return (
        <section className="w-full flex h-screen -my-20 md:-my-15 min-h-[35rem]">
        <form action="post" className="bg-slate-100 rounded-xl w-5/6 sm:w-5/6 md:w-3/6 lg:w-2/5 xl:w-2/6 h-96 px-4 xl:px-14 lg:my-auto flex flex-col justify-center m-auto space-y-4">
            <h1 className="text-xl xl:text-3xl  mx-auto text-purple-950 font-extrabold my-5">Create Account</h1>
            <div className="flex flex-col">
                <input type="text" placeholder="Name" className="h-10 py-1 pl-3 border"/>
            </div>
            <div className="flex flex-col">
                <input type="text" placeholder="Email" className="h-10 py-1 pl-3 border"/>
            </div>
            <div className="flex flex-col">
                <input type="password" placeholder="Password" name="password" id="" className="h-10 py-1 pl-3 border"/>
            </div>
            <button className="border-radius flex justify-center text-slate-100 hover:bg-purple-300 font-extrabold border text-md w-28 xl:w-36 mx-auto h-12 py-2.5 bg-purple-400" type="submit">Sign Up</button>
            <a href="SignIn.html" className="mb-4 mx-auto text-purple-950 hover:text-purple-700 text-xs">Already a user? Sign In</a>
        </form>
        </section>
    );
}

export default SignUp;