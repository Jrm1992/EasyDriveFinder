'use client'

import { MouseEventHandler } from "react";

interface Button {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"
}

export default function Button({ title, containerStyles, handleClick, btnType}: Button) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn  ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}