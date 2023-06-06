import React from 'react';
import fullStar from './../../images/startRating/fullStar.svg';
import emptyStar from './../../images/startRating/emptyStar.svg';
import './StarRating.css';

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="star filled"><img src={fullStar} alt="Full Star" /></span>);
        } else {
            stars.push(<span key={i} className="star"><img src={emptyStar} alt="Empty Star" /></span>);
        }
    }

    return <div className="star-rating">
        <div className='stars'>
            {stars}
        </div>
        <div  className='rating'>
            {rating} of 5
        </div>
    </div>;
};

export default StarRating;
