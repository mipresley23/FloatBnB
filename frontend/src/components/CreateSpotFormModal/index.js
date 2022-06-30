import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import CreateSpotForm from './createSpotForm';
import '../spots/spots.css'

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {/* {sessionUser && <button id='createSpotModal' onClick={() => setShowModal(true)}>Create Spot</button>} */}
       {sessionUser && showModal && (
      <Modal  onClose={() => setShowModal(false)}>
          <CreateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
