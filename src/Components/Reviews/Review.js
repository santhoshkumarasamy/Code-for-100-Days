import React,{useEffect,useState} from 'react'
import {MdOutlineArrowForwardIos,MdOutlineArrowBackIos} from 'react-icons/md'
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
    const goNext = ()=>{
      setReviewId(previd=> previd+1)
    }
    const goPre = ()=>{
      setReviewId(previd=> previd-1)
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
            <div id="imgDiv">
              <img src={"images/review/"+review.img} alt={review.name} /> 
            </div>
            
            <h3>{review.name}</h3>
            <h5>{review.role}</h5>
            <p align="center">{review.review}</p>
            <div className='toggle'>
              <button className='toggleLeft' onClick={goPre} disabled={reviewId < 1 ? true : false  }><MdOutlineArrowBackIos /></button>
              <button className='toggleRight' onClick={goNext} disabled={reviewId+1 == defReviews.length ?true: false }><MdOutlineArrowForwardIos/></button>
            </div>
            <button className='sur-btn' onClick={getRandom}>Surprise Me</button>
          </div>
          
        </div>
    </div>
  )
}
