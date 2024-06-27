export function Categories({ val,onChange }) {
    return (
      <div onClick={onChange} className=" h-[15px] font-bold p-3   sm:p-5 w-auto rounded-md bg-[#d8f5e9] flex justify-center items-center active:bg-transparent  active:border-2 bg-[#d8f5e9 ">
        <p>{val}</p>
      </div>
    );
  }

  
  