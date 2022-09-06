import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReviewModal } from '../../context/ReviewModal';
import CreateSpotForm from './createSpotForm';

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
      {sessionUser && <button id='create-spot-modal-button' onClick={() => setShowModal(true)}>Create Spot</button>}

       {showModal && (
      <ReviewModal  onClose={() => setShowModal(false)}>
          <CreateSpotForm setShowModal={setShowModal} />
        </ReviewModal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
