import React from 'react'
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts'
import ProductImages from '../../components/ProductImages/ProductImages'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import brand from './../../images/singleProduct/brand.svg'
import firstColor from './../../images/singleProduct/version1.png'
import secondColor from './../../images/singleProduct/version2.png'

import './SingleProduct.css'

const images = [
  {
    "id": "attub6EG88kJKuYs8",
    "width": 1000,
    "height": 667,
    "url": "https://www.course-api.com/images/store/product-4.jpeg",
    "filename": "product-4.jpeg",
    "size": 49641,
    "type": "image/jpeg",
    "thumbnails": {
      "small": {
        "url": "https://www.course-api.com/images/store/product-4.jpeg",
        "width": 54,
        "height": 36
      },
      "large": {
        "url": "https://www.course-api.com/images/store/product-4.jpeg",
        "width": 768,
        "height": 512
      },
      "full": {
        "url": "https://www.course-api.com/images/store/product-4.jpeg",
        "width": 3000,
        "height": 3000
      }
    }
  },
  {
    "id": "attaeT2Dex98o2jfW",
    "width": 1000,
    "height": 667,
    "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
    "filename": "extra-1.jpeg",
    "size": 102108,
    "type": "image/jpeg",
    "thumbnails": {
      "small": {
        "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        "width": 54,
        "height": 36
      },
      "large": {
        "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        "width": 768,
        "height": 512
      },
      "full": {
        "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        "width": 3000,
        "height": 3000
      }
    }
  },
  {
    "id": "attWsZasaaRD1P7mm",
    "width": 1000,
    "height": 714,
    "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
    "filename": "extra-2.jpeg",
    "size": 84418,
    "type": "image/jpeg",
    "thumbnails": {
      "small": {
        "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        "width": 50,
        "height": 36
      },
      "large": {
        "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        "width": 717,
        "height": 512
      },
      "full": {
        "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        "width": 3000,
        "height": 3000
      }
    }
  },
  {
    "id": "attTvaiDcADaAItLw",
    "width": 1000,
    "height": 650,
    "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
    "filename": "extra-3.jpeg",
    "size": 107838,
    "type": "image/jpeg",
    "thumbnails": {
      "small": {
        "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        "width": 55,
        "height": 36
      },
      "large": {
        "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        "width": 788,
        "height": 512
      },
      "full": {
        "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        "width": 3000,
        "height": 3000
      }
    }
  }
]

const productData = {
  id: 111,
  brandImage: brand,
  name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  category: "Men",
  rate: 4.9,
  rate_count: 22,
  price: 9999,
  sale: true,
  discount: 30,
  size: "Large",
  colors: [firstColor, secondColor],
  inStock: 9
}

const SingleProduct = () => {
  return (
    <section className='single_product'>
      <div className="container">
        <Breadcrumb product title={"Adidas Black T-Shirt"} />
        <div className='single_product-container'>
          <ProductImages images={images} />
          <ProductDescription productData={productData} />
        </div>
        <SimilarProducts />
      </div>
    </section>
  )
}

export default SingleProduct