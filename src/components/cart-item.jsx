import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';

export const CartItem = ({ item }) => {
  // destructure the item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
    <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/* image */}
        <Link to={`/product/${id}`}>
      <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
        <div>
        {/*title & remove icon*/}
        <div className="flex justify-between mb-2">
          {/* title */}
          <Link className="text-sm uppercase font-medium max-w-[240px]
          text-primary hover:underline" to={`/product/${id}`}>
          </Link>
        {/*title*/}
          <Link to={`/product/${id}`}
          className="text-sm uppercase font-medium max-w-[240px]
           text-primary hover:underline"
           >
          {title}
          </Link>
          {/*remove icon*/}
          <div className="text-xl cursor-pointer">
            <IoMdClose className="text-gray-500 hover:text-red-500 transition"/>
            </div>
        </div>
        <div className="bg-orange-200 flex gap-x-2 h-[36px] text-sm ">
          {/* qty */}
          <div className="flex flex-1 max-w-[100px] bg-blue-400 items-center 
          h-full border text-primary font-medium">
            {/* minus icon */}
            <div className="flex-1">
            <IoMdRemove/>
            </div>
            {/* amount */}
            <div className="h-full flex justify-center items-center px-2">{amount}</div>
            {/* plus icon */}
            <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd />
            </div>
          </div>
           {/* item price */}
           <div>item price</div>
             {/* item price */}
           <div>final price</div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};
