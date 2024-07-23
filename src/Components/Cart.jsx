import React from "react";
import { CartCards } from "./CartCards";
import { useSelector } from "react-redux";


const Cart = () => {
  const CartItems= useSelector(store=>store.cart.items);
  console.log(CartItems);
  if(CartItems.length==0){
    return(<>
    <div className="bg-[#e9f7d5] min-h-screen flex justify-center text-center items-center ">
    <div className="bg-[#ecf5ea] h-[20rem] w-[25rem]  flex justify-center rounded-md shadow-md  font-bold">
      NO Items in the cart!!
    </div>
    </div>
    </>);
  }
  return (
    <div className="bg-[#e9f7d5] min-h-screen">
       <h2 class="text-xl font-semibold text-green-900 sm:text-2xl">
            Shopping Cart
          </h2>
        <div class=" flex flex-col sm:flex-row sm:gap-3 sm:justify-between px-3 ">
         
          <div className="flex flex-col gap-3">
            {
           CartItems.map((item)=>{
            return <CartCards key={item.recipe.uri}  items={item.recipe} />
            })
              }
            
          </div>

            <div class="mx-auto mt-6 h-fit shadow-md w-full  bg-[#d4e7d0] flex-1  p-3 space-y-6 lg:mt-0 lg:w-full ">
              <div class="space-y-4 rounded-lg border border-gray-200 shadow-sm">
                <p class="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500">
                        Original price
                      </dt>
                      <dd class="text-base font-medium text-gray-900">
                        $7,592.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 ">
                        Savings
                      </dt>
                      <dd class="text-base font-medium text-green-600">
                        -$299.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500">
                        Store Pickup
                      </dt>
                      <dd class="text-base font-medium text-gray-900">
                        $99
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500">
                        Tax
                      </dt>
                      <dd class="text-base font-medium text-gray-900 ">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt class="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 ">
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                >
                  Proceed to Checkout
                </a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 ">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
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

              
      </div>

      </div>
      
    </div>
  );
};

export default Cart;
