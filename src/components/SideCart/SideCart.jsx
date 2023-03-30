import React from "react";

const SideCart = () => {
  return (
    <div>
      <div className=" rounded-md border flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <span className="block text-lg text-center font-medium tracking-widest uppercase">
          Your Cart
        </span>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/phodark:to-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                alt="Set of travel chargers"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Set of travel chargers
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">8.99€</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="btn gap-4 border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
