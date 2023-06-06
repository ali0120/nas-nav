import React, { useState } from "react";
import StarRating from './../StarRating/StarRating';
import { useRecoilState, useSetRecoilState } from "recoil";
import { productQuantity } from "../../state/productQuantity";
import { cardState } from "../../state/cardState";
import { formatPrice } from "../../utils/helpers";
import minus from './../../images/singleProduct/minus.svg'
import plus from './../../images/singleProduct/plus.svg'
import './ProductDescription.css'

const ProductDescription = ({ productData }) => {
    const [quantity, setQuantity] = useRecoilState(productQuantity);
    const setCart = useSetRecoilState(cardState);
    const [size, setSize] = useState(productData.size)
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
    };

    const handleImageClick = (index) => {
        const selectedColor = productData.colors[index];
        setSelectedColor(selectedColor);

        const buttons = document.querySelectorAll(".colors_container");
        buttons.forEach((button, i) => {
            button.classList.toggle("active", i === index);
        });
    };


    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < productData.inStock) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const handleAddToCart = () => {
        const item = {
            id: productData.id,
            name: productData.name,
            price: productData.price,
            quantity: quantity,
            size: size,
            color: selectedColor,
        };
        quantity > 0 && setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <section className="product_description">
            <img className="brand" src={productData.brandImage} alt=" brandImage" />
            <h3 className="product_name" >{productData.name}</h3>
            <p className="product_category">{productData.category}</p>
            <div className="rates">
                <StarRating rating={productData.rate} />
                <p>{productData.rate_count} Rates</p>
            </div>
            <div className="price_container">
                <h3 className="price">{formatPrice(productData.price)} <span>LE</span></h3>
                {productData.sale && <div className='sale_container'> <strike>{formatPrice(productData.price)} <span>LE</span></strike> <span className='precentage'>{productData.discount}% off</span></div>}
            </div>
            <div className="size_options">
                <h2>Size</h2>
                <ul>
                    <li>
                        <button
                            className={size === "Small" ? "active" : ""}
                            onClick={() => handleSizeChange("Small")}
                        >
                            Small
                        </button>
                    </li>
                    <li>
                        <button
                            className={size === "Medium" ? "active" : ""}
                            onClick={() => handleSizeChange("Medium")}
                        >
                            Medium
                        </button>
                    </li>
                    <li>
                        <button
                            className={size === "Large" ? "active" : ""}
                            onClick={() => handleSizeChange("Large")}
                        >
                            Large
                        </button>
                    </li>
                    <li>
                        <button
                            className={size === "X Large" ? "active" : ""}
                            onClick={() => handleSizeChange("X Large")}
                        >
                            X Large
                        </button>
                    </li>
                    <li>
                        <button
                            className={size === "XX Large" ? "active" : ""}
                            onClick={() => handleSizeChange("XX Large")}
                        >
                            XX Large
                        </button>
                    </li>
                </ul>
            </div>
            <div className="colors">
                <h2>Color</h2>
                <div className="colors_options">
                    {productData.colors.map((item, index) => {
                        const isActive = index === 0;
                        return (
                            <button
                                key={index}
                                className={`colors_container ${isActive ? "active" : ""}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img src={item} alt="color option" />
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="quantity">
                <h2>Quantity</h2>
                <div className="quantity_container">
                    <button onClick={handleDecrement}>
                        <img src={minus} alt="" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>
                        <img src={plus} alt="" />
                    </button>
                </div>
            </div>

            <div className="action_container">
                <button className="add" onClick={handleAddToCart}>
                    Add To Cart
                </button>
                <button className="pick">
                    Pickup From Store
                </button>
            </div>
        </section>
    );
}

export default ProductDescription;
