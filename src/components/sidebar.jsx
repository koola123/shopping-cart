import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/io';
// import components
import Cart from '../components/cart-item';
// import sidebar context
import { SidebarContext } from '../contexts/sidebar-context';


export const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      Sidebar
    </div>
  );
};
