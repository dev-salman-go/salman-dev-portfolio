"use client";
import Image from 'next/image';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselProps } from '../_lib/types';



export default function CarouselCardB ({images}: CarouselProps) {
    const settings = {
        showArrows: true,
        interval: 5000,
        dynamicHeight: true,
        stopOnHover: true,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 500,
        showThumbs: false,
        showIndicators: true,
        swipeable: true,
        emulateTouch: true,
        autoPlay: false,
        useKeyboardArrows:true
      };
  return (
    <div className='border-[1.5px] border-black dark:border-white rounded-2xl overflow-hidden
    '>
        <Carousel {...settings} >
          {images.map((url : string, index:number)=>{
            return(
              <Image height={400} width={800} key={index} src={url} alt='project' className='object-cover min-w-full min-h-full'/>
            )
          })}
        </Carousel>
    </div>
  )
}
