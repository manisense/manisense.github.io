import React from "react";
import PriceLine from "./PriceLine";
import { motion } from "framer-motion";


const PriceCard = (
{  title,
  price,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
}
) => {
  return (
    <motion.div class="lg:mb-0 shadow-xl"                 whileHover={{y:-2, }}>
      <div class="block h-full flex flex-col justify-between rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
          <p class="mb-3 text-lg uppercase">
            <strong>{title}</strong>
          </p>
          <h3 class=" text-md">
            <strong>{price}</strong>
          </h3>


        </div>
        <div class="pl-8 py-6 text-base">
          <ol class="list-inside">
          {first && <PriceLine text={first} />}
            {second && <PriceLine text={second} />}
            {third && <PriceLine text={third} />}
            {fourth && <PriceLine text={fourth} />}
            {fifth && <PriceLine text={fifth} />}
            {sixth && <PriceLine text={sixth} />}
          </ol>
        </div>
        <div className="border-t-2  border-neutral-100 border-opacity-100 p-5 text-center dark:border-opacity-10">
        <motion.button
            type="button"
            class="inline-block w-full shadow-xl hover:font-bold rounded bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-ripple-init
            data-te-ripple-color="light"
            
          >
            Buy
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
