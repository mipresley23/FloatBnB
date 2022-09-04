import { useState } from "react";
import { ReviewModal } from "../../context/ReviewModal";
import CreateReview from ".";

export default function SpotReviewModal({spot, showModal, setShowModal}){
  // const [showModal, setShowModal] = useState(false);

  return(
    <>
        {showModal && (
          <ReviewModal onClose={() => setShowModal(false)}>
            <CreateReview spot={spot} setShowModal={setShowModal}/>
          </ReviewModal>
        )}
    </>
  )
}
