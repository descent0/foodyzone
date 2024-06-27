import { Link } from "react-router-dom";

export const LandingPage=()=>{
    return(
        <>
        <div >
        <div className="w-screen h-screen bg-[#9cc069] overflow-x-hidden">
            <div className="flex flex-col p-6 items-center ">
           
                <h1 className="text-[30px] font-[cursive] font-bold">
                    Find the recipes
                </h1>
              <Link to="/home">
                <img className="size-25 self-center" src="src\assets\images\960a96e5-1bdf-47ba-97c3-b48ab01135b6-removebg-preview.png" alt="" />
                </Link>
                <div className="50%">
                <h1>
                    Find the recipes
                </h1>
               </div>
            </div>
            </div>
        </div>
        </>
    );
}