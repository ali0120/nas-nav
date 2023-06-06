import React from 'react'
import './SimilarProducts.css'
import { products } from './FakeData'
import StarRating from '../StarRating/StarRating'
import { formatPrice } from '../../utils/helpers'
import icon360 from './../../images/simillarProduct/360.svg'
const SimilarProducts = () => {
    return (
        <section className='similar_products'>
            <h2>Similar Products</h2>
            <p>You may like these products also</p>
            <div className="products_container">
                {products?.map((product) => {
                    return (
                        <div className="card">
                            <div className="image_container">
                                <img className='image_product' src={product.image_url} alt="" />
                                <img className='icon' src={icon360} alt="360 icon" />
                            </div>
                            <p className="product_name">{product.name}</p>
                            <div className="info">
                                <div className="price_info">
                                    <p className="price">{formatPrice(product.price)} <span>LE</span></p>
                                    {product.sale && <div className='sale_container'> <strike>{formatPrice(product.price)} <span>LE</span></strike> <span className='precentage'>50%</span></div>}
                                </div>
                                <img src={product.company_url} alt="company logo" />
                            </div>
                            <StarRating rating={product.rating} />
                            <div className="card_footer">
                                <p>Pickup From:</p>
                                <p className='shop'>{product.shop}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SimilarProducts