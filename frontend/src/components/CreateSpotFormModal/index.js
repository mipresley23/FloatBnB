import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotForm from './createSpotForm';
import '../spots/spots.css'

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='createSpotModal' onClick={() => setShowModal(true)}>Create Spot</button>
      {showModal && (
      <Modal  onClose={() => setShowModal(false)}>
          <CreateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
