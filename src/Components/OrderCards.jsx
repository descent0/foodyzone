import { Categories } from "./Categories";

export function OrderCards({ label, imageUrl, Details }) {
  return (
    <div className="flex flex-col overflow-x-hidden  items-center ">
    <div className="h-[40rem] w-[96%] shadow-sm shadow-black flex flex-col gap-2 p-2 mt-2 sm:w-[40%] items-center">
      <div className="  h-[10%] w-full flex justify-center items-center text-[35px] font-bold">
        {label}
      </div>
      <div className=" h-[30%] flex items-center justify-center sm:w-[50%]">
        <img src={imageUrl} alt="" className="bg-contain " />
      </div>
      <div className="h-[10%] w-[100%] flex flex-row justify-evenly items-center ">
        <button className=" bg-red-600 content-center pl-3 pr-3 text-[23px] font-medium rounded-md">
          BuyNow
        </button>
        <button className=" bg-red-600 content-center pl-3 pr-3 text-[23px] font-medium rounded-md">
          Add To{" "}
        </button>
      </div>
      <div className="shadow-inner h-[20%] flex flex-row justify-evenly items-center ">
        {Details}
      </div>
    </div>
    </div>
  );
}
