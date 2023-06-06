import React, { useState } from 'react';
import leftArrow from './../../images/leftArrow.svg'
import rightArrow from './../../images/rightArrow.svg'
import icon360 from './../../images/simillarProduct/360.svg'

import './ProductImages.css';

const ProductImages = ({ images = [{ url: '' }] }) => {
    const [main, setMain] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setMain(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setMain(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <section className='product_images'>
            <div className='image_container'>
                <img src={main.url} alt='' className='main' />
                <button>
                    <img className='icon' src={icon360} alt="360 icon" />
                </button>
            </div>
            <div className='gallery'>
                <button className='left' onClick={handlePrev}><img src={leftArrow} alt='' /></button>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt=''
                        onClick={() => setMain(images[index])}
                        className={image.url === main.url ? 'active' : 'product'}
                    />
                ))}
                <button className='right' onClick={handleNext}><img src={rightArrow} alt='' /></button>
            </div>
        </section>
    );
};

export default ProductImages;
