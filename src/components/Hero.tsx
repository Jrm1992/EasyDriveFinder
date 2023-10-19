'use client'
import Image from 'next/image';
import  Button  from './Button' 
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Hero() {
  const handleScroll = () => {
    console.log("clicked");
    const element = document.getElementById("discover");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Unlock Your Journey with <span className='blue_gradient'>EasyDriveFinder</span>: Where the Road Awaits Your Story!
        </h1>

        <p className="hero__subtitle">
          Discover Seamless Rental Car Experiences for Every Adventure
        </p>

        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
      <Transition
        appear={true}
        show
        as={Fragment}
        enter="transition-all ease-in-out duration-500 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
        </Transition>

        <Transition
        appear={true}
        show
        as={Fragment}
        enter="transition-all ease-in-out duration-500"
        enterFrom="opacity-0 translate-x-40"
        enterTo="opacity-100 translate-x-0"
      >
        <div className="hero__image-overlay" />
        </Transition>

      </div>
    </div>
  )
}