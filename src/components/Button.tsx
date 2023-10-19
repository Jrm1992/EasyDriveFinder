'use client'

import { Button } from "@/types/button.interface";
import Image from "next/image";

export default function Button({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: Button) {
  return (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  )
}