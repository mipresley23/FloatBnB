import React, { useState, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkEditReview, thunkGetReviews } from "../../store/reviews";
import FilledStar from '../assets/star_filled.png'
import EmptyStar from '../assets/star_unfilled.png'
import CloseButton from '../assets/close_x_icon.png';

export default function EditReview({review, setShowModal}) {
  const history = useHistory()
  const dispatch = useDispatch();

  const spot = review.Spot

  const [reviewId, setReviewId] = useState(review?.id)
  const [content, setContent] = useState(review?.content)
  const [rating, setRating] = useState(review?.rating)
  const [userId, setUserId] = useState(review?.userId)
  const [spotId, setSpotId] = useState(review?.spotId)
  const [errors, setErrors] = useState([])
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = []
    if(!content) errors.push('Review content is required.')
    if(content.length > 1000) errors.push('Review content must be 1000 characters or less.')
    setErrors(errors)
  }, [content])

  const sessionUser = useSelector(state => state.session.user)

  const updateContent = (e) => {
    setContent(e.target.value)
  }

  const handleUpdateReview = async (e) => {
    e.preventDefault()
    const review = {
      id: reviewId,
      content,
      rating,
      userId,
      spotId
    }
    if(!errors.length){
      await dispatch(thunkEditReview(review))
      await dispatch(thunkGetReviews())
      setShowModal(false)
    }
  }
  if(!spot) return null;
  return(
    <>
      <div id="create-review-form-container">
      {showErrors && <ul id="review-errors-list">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
        <form id="create-review-form" onSubmit={handleUpdateReview}>
        <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setShowModal(false)}><img id='review-modal-close-image' src={CloseButton} alt='x'/></button>
        <h3 id="review-spot-title">{spot.name}</h3>
          <div id="rating-input-container">
            <img className="review-form-rating-imgs" src={rating > 0 ? FilledStar : EmptyStar} onClick={() => setRating(1)}/>
            <img className="review-form-rating-imgs" src={rating > 1 ? FilledStar : EmptyStar} onClick={() => setRating(2)}/>
            <img className="review-form-rating-imgs" src={rating > 2 ? FilledStar : EmptyStar} onClick={() => setRating(3)}/>
            <img className="review-form-rating-imgs" src={rating > 3 ? FilledStar : EmptyStar} onClick={() => setRating(4)}/>
            <img className="review-form-rating-imgs" src={rating > 4 ? FilledStar : EmptyStar} onClick={() => setRating(5)}/>
          </div>
          <textarea
              id="create-review-content"
              name="review-content"
              value={content}
              onChange={updateContent}
              />
          <button id='review-form-submit-button' onClick={() => {setShowErrors(true)}} type="submit">Edit Review</button>
        </form>
      </div>
    </>
  )
}
