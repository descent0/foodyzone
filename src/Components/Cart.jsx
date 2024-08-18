import React from "react";
import { CartCards } from "./CartCards";
import { useSelector } from "react-redux";


const Cart = () => {
  const CartItems= useSelector(store=>store.cart.items);

  function originalPrice(){
   let  sum=0
    CartItems.map(items=>(
      sum=sum+items.count*items.price)
    )
    return sum;
  }

  if(CartItems.length==0){
    return(<>
    <div className="bg-[#e9f7d5] min-h-screen flex justify-center text-center items-center ">
    <div className="bg-[#ecf5ea] h-[20rem] w-[25rem]  flex justify-center rounded-md shadow-md  font-bold">
      NO Saved Items!!
    </div>
    </div>
    </>);
  }
  return (
    <div className="bg-[#e9f7d5] min-h-screen">
       <h2 className="text-xl font-semibold text-green-900 sm:text-2xl ml-3">
            Saved
          </h2>
        <div className=" flex flex-col sm:flex-row sm:gap-3 sm:justify-between px-3 ">
         
          <div className="flex flex-col gap-3">
          {CartItems.map((element) => {
    if (!element || !element.hit.recipe) {
      return null;
    }

    
    return <CartCards key={element.hit.recipe.uri} item={element} />;
  })}
            
          </div>

            {/* <div className="mx-auto mt-6 h-fit shadow-md w-full  bg-[#d4e7d0] flex-1  p-3 space-y-6 lg:mt-0 lg:w-full ">
              <div className="space-y-4 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        {originalPrice()}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -$299.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        $99
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                >
                  Proceed to Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 ">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div> 

              
       </div> */}

      </div>
      
    </div>
  );
};

export default Cart;
