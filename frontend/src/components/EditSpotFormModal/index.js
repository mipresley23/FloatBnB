import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './editSpotForm';
import '../spots/spots.css'

function EditSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='editSpotModal' onClick={() => setShowModal(true)}>Edit this Spot</button>
      {showModal && (
      <Modal  onClose={() => setShowModal(false)}>
          <EditSpotForm />
        </Modal>
      )}
    </>
  );
}

export default EditSpotFormModal;
