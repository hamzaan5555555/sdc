"use client"
import Slider from 'react-infinite-logo-slider'

const Sliide = () => {
    const react = "./react.png"
    const figma = "./figma.png"
    const js = "./js.png"
    const next = "./next.png"
    const express = "./express.png"
    const framer = "./framer.png"
    const tailwind = "./tailwind.png"
    const sql = "./mysql.png"



    return (
        <div className="mt-[60px]">
        <Slider
            width="200px"
            duration={40}

            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={react} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={next} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={figma} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={js} alt="any3" className='w-36'/>
            </Slider.Slide>
            <Slider.Slide>
                <img src={tailwind} alt="any3" className='w-36'/>
            </Slider.Slide>
            <Slider.Slide>
                <img src={sql} alt="any3" className='w-36'/>
            </Slider.Slide>
            <Slider.Slide>
                <img src={framer} alt="any3" className='w-36'/>
            </Slider.Slide>
            <Slider.Slide>
                <img src={express} alt="any3" className='w-36'/>
            </Slider.Slide>
        </Slider>
        </div>
    )
}

export default Sliide