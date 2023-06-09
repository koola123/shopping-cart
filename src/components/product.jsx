import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import reat icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/cart-context';


export const Product = ({product}) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const {id, title, image, description, price, category } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4 h-[300px] mb-4 relative overflow-hidden group transition">
      <div className="w-full h-full flex justify-center items-center">
      {/* buttons */}
      <div className="absolute z-10 top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center
       justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={() => addToCart(product,id)}>
          <div className="flex justify-center items-center text-white w-12 h-12 bg-orange-500">
            <BsPlus className="text-3xl"/>
          </div>
        </button>
        <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
        >
        <BsEyeFill/>
        </Link>
      </div>
        {/* image */}
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt=""/>
        </div>
      </div>
      </div>
      {/* category & title & price */}
        <div className="text-sm capitalize text-gray-500 mb-0 h-[50px] text-center">Category: {category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold bg-sky-200 mb-0 p-2 h-[100px] text-center">{title}</h2>
        </Link>
        <div className="font-semibold bg-fuchsia-300 p-2 h-[50px] text-center">Price: $ {price}</div>
      </div>
  );
};
