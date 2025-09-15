import React from 'react';

interface IButton {
    label: string;
    icon?: string;
    className?: string;
    onClick?: () => void;
}
 
export default function Button({label, icon, className, onClick}: IButton) {
  return (
    <div 
      onClick={onClick} 
      className={"flex items-center justify-center border border-black rounded-full py-3 px-6 gap-2" + " " + className}>
        {icon ? <img alt="logo" loading="lazy" decoding="async" className='object-contain' style={{color: 'transparent'}} src={icon}/> : ""}
        <span className='whitespace-nowrap [word-spacing:8px]'>{label}</span>
    </div>
  )
}
