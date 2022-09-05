import { useState } from "react";
import { ReviewModal } from "../../context/ReviewModal";
import CreateReview from ".";

export default function SpotReviewModal({spot}){
  const [showModal, setShowModal] = useState(false);

  return(
    <>
        {!showModal && <button id="create-review-button" onClick={() => setShowModal(true)}>Leave Review</button>}

        {showModal && (
          <ReviewModal onClose={() => setShowModal(false)}>
            <CreateReview spot={spot} setShowModal={setShowModal}/>
          </ReviewModal>
        )}
    </>
  )
}
