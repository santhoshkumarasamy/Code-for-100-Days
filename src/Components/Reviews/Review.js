import React,{useEffect,useState} from 'react'
import { defReviews } from './Reviews';
import './Review.css'
export default function Review() {
    const [reviewId,setReviewId] = useState(0);
    const [review, setReview] = useState(defReviews[reviewId])
    const getRandom = ()=>{
        var v = (Math.random()*10).toFixed();
        var r = v > 4 ? (v > 9 ? v-6 : v-5): v ;
        // console.log(r);
        setReviewId(r)
        // console.log((Math.random()*10).toFixed() >= 5 ? 5-(Math.random()*10).toFixed() : (Math.random()*10).toFixed());
    }
    useEffect(()=>{
        setReview(defReviews[reviewId])
    },[reviewId])
    // console.log(review);
  return (
    <div className='reviewBody'>
        <div className='review'>
          <div className='reviewTitle'>
            <div>Our Reviews</div>
            <div className='underline'></div>
          </div>
          <div className='reviewBox'>
            <img src={"images/review/"+review.img} alt={review.name} /> 
            <h3>{review.name}</h3>
            <h5>{review.role}</h5>
            <p align="center">{review.review}</p>
            <button onClick={getRandom}>Get Random Number</button>
          </div>
          
        </div>
    </div>
  )
}
