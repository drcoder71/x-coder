import React from 'react'

const ListItemUi = ({ children, className, clickHandler }) => {
  return (
    <li className={`flex items-center justify-start gap-2 relative ${className} after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full hover:after:bg-[#ffffff24] transition-all`} onClick={clickHandler}>
        {children}
    </li>
  )
}

export default ListItemUi