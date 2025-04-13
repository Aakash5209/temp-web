import { useState,useEffect } from "react"


export const ImageGalllery = ()=>{

    const [currentIndex,setCurrentIndex] = useState(0)

    const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale'
    ]

    useEffect(()=>{
        console.log("current index",currentIndex)
    },[currentIndex])

    const handleNext =()=>{
        setCurrentIndex((currentIndex+1)%images.length)
        // setCurrentIndex((currentIndex+1))

    }
    const handlePrevious =()=>{
        setCurrentIndex((currentIndex-1+images.length)%images.length)

    }

    return <>
    <h1>hi i m ImageGalllery</h1>
    <div>
        <img src={images[currentIndex]} alt="random images" />
        
    </div>
    <button onClick={handlePrevious}>previous</button>
    <button onClick={handleNext}>Next</button>
    </>
}