import { useState } from "react";
import { ReviewModal } from "../../context/ReviewModal";
import EditReview from ".";

export default function EditReviewModal({review}){
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      {!showModal && <button id="edit-review-button" onClick={() => setShowModal(true)}>Edit Review</button>}

      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)}>
          <EditReview review={review} setShowModal={setShowModal}/>
        </ReviewModal>
      )}
    </>
  )
}
