import React, { useState, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkCreateReview, thunkGetReviews } from "../../store/reviews";
import FilledStar from '../assets/star_filled.png'
import EmptyStar from '../assets/star_unfilled.png'
import CloseButton from '../assets/close_x_icon.png';
import '../../context/ReviewModal.css'

export default function CreateReview({spot, setShowModal}){

  const history = useHistory();
  const dispatch = useDispatch()

  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    const errors = []
    if(!rating) errors.push('Rating is required.')
    if(!content) errors.push('Review content is required.')
    if(content.length > 1000) errors.push('Review content must be 1000 characters or less.')
    setErrors(errors)
  }, [rating, content])

  const updateContent = (e) => {
    setContent(e.target.value)
  }

  const updateRating = (e) => {
    setRating(e.target.value)
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    const review = {
      content,
      rating,
      userId: sessionUser.id,
      spotId: spot.id
    }
    if(!errors.length){
      await dispatch(thunkCreateReview(review))
      await dispatch(thunkGetReviews())
      history.push(`/spots/${spot.id}`)
      setShowModal(false)
    }
  }


  return(
    <>
      <div id="create-review-form-container">
      {showErrors && <ul id="review-errors-list">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
        <form id="create-review-form" onSubmit={handleReviewSubmit}>
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
              placeholder={`Leave a Review for ${spot.name}`}
              value={content}
              onChange={updateContent}
              />
          <button id='review-form-submit-button' onClick={() => setShowErrors(true)} type="submit">Submit Review</button>
        </form>
      </div>
    </>
  )
}
