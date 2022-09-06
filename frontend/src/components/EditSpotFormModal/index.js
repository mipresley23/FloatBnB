import React, { useState } from 'react';
import { ReviewModal } from '../../context/ReviewModal';
import EditSpotForm from './editSpotForm';
import '../spots/spots.css'
import { useSelector } from 'react-redux';


function EditSpotFormModal({spot}) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);


  return (
    <>
      {sessionUser && <button class='each-spot-buttons' id='createSpotModal' onClick={() => setShowModal(true)}>Edit Spot</button>}

       {showModal && (
      <ReviewModal  onClose={() => setShowModal(false)}>
          <EditSpotForm spot={spot} setShowModal={setShowModal} />
        </ReviewModal>
      )}
    </>
  );
}

export default EditSpotFormModal;
