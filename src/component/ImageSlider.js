import React, {useState, useEffect} from 'react'
import '../css/ImageSlider.css';
import {SliderData} from './SliderData';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import { Slider } from '@material-ui/core';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const [test, setTest] = useState(1);
    const length = slides.length
    useEffect(() => {
        
    });

    const resetToFirst = () => {
        setTest(test > 0 ? 0 : test + 1);
    };

    const resetToLast = () => {
        setTest(test === 66 ? test - 1 : 66);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setTest(test + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setTest(test - 1)
    };

    const handleChange = (event, newValue) => {
        setTest(newValue)
    }

    console.log(current);
    console.log('test:'+test);

    return (
        <>  
            <div className="slider">
                <FaArrowDown className="left-arrow" onClick={prevSlide} />
                <FaArrowUp className="right-arrow" onClick={nextSlide} />
                <div className="slider-position" style={{height:500}}>
                <Slider 
                    className="sliderUI"
                    orientation="vertical"
                    max="66"
                    value={test}
                    onChange={handleChange}
                />
                </div>
                {/* {SliderData.map((slide, index)=>{
                    return  (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                    );
                })} */}
                {SliderData.map((item,index)=>{
                    return <img 
                                src={"/my-first-web/images/Y" + JSON.stringify(index) + ".JPG"} 
                                alt='travel image' 
                                className={index === test ? 'image' : 'image none'}
                                key={index} />
                })}
            </div>
            <h1>對比景-視覺比對法</h1>
            <h1 className= "title"> {test}</h1>
            <div className="reset" onClick={resetToFirst}>重置到最前</div>
            <div className="reset" onClick={resetToLast}>重置到最後</div>
            
        </>
    )
}


export default ImageSlider
