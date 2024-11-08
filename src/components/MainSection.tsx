import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { HoverBorderGradient } from './ui/hover-border-gradient';


function MainSection() {
    return (
        <section className="mt-20 md:mt-32 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">  {/* Adjust the top margin as needed */}
            <div className="p-4 relative z-10 w-full text-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="blue"
                />
                <h1 className=" mt-20 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master your Legacy
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, amet odit nisi consequuntur error placeat maiores nemo a reiciendis earum.
                </p>
                <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
       
        <span>
        <Link href="/courses">
            Explore Courses
            </Link>
            </span>
      </HoverBorderGradient>
    </div>
            </div>


        </section>
    );
}

export default MainSection;