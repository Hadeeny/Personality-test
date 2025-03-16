'use client'
import { useState, useEffect } from "react"
import {Button} from '@/components/ui/button'

export const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const offset = currentIndex * -10
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const marquued = [...images, ...images]
    const next = () => {
        setCurrentIndex(currentIndex + 1)
    }

    // useEffect(()=>{
    //     setInterval(next, 1000)
    // }, [currentIndex])

    useEffect(()=>{
        setInterval(() => {
            setCurrentIndex((currentIndex + 1) % marquued.length)
          }, 1000); // change the interval time to 

    }, [])


    return (
        <div className="text-black">
            <h2>Hello from image gallery</h2>
            <div className="w-[63rem] h-[20rem] overflow-hidden flex">
                <div style={{transform: `translateX(${offset}rem)`}} className={`flex duration-500 min-w-max h-[11rem]`}>
                    {marquued.map((img, i) => (
                        <div className={`w-[10rem] flex ${currentIndex === i && 'h-[15rem]'} duration-500 items-center justify-center rounded-md shrink-0 h-[11rem] even:bg-blue-50 odd:bg-emerald-50`} key={i}>{img}</div>
                    ))}
                </div>
            </div>
            <div>
               <Button onClick={next}>Next Image</Button> 
            </div>
        </div>
    )
}