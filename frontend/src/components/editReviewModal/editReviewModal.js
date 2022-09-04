import { useState } from "react";
import { ReviewModal } from "../../context/ReviewModal";
import EditReview from ".";
import EditIcon from '../assets/edit_icon.png';

export default function EditReviewModal({review}){
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      {!showModal && <input type='image' src={EditIcon} id="edit-review-button" onClick={() => setShowModal(true)}/>}

      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)}>
          <EditReview review={review} setShowModal={setShowModal}/>
        </ReviewModal>
      )}
    </>
  )
}
