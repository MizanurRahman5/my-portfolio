import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={`${className} relative flex items-center justify-center rounded-lg w-[55px] h-[40px] bg-seven absolute top-[370px] left-[500px]`}
      onClick={onClick}
    ><BsArrowLeft className='text-xl text-white' /></div>
  );
}

