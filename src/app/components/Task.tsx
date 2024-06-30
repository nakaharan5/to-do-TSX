import { useState } from "react";

export default function Task({text}:any){

    
    return(
    <>
        <div className="w-3/4 sm:w-2/4 md:w-2/5 lg:w-1/3 h-16 bg-slate-800 text-white rounded-xl flex flex-col items-start justify-center p-3 mt-2 gap-2">
            {text}
        </div>
    </>
    );
}