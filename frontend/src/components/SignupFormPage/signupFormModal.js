import React, { useState } from 'react';
import { ReviewModal } from '../../context/ReviewModal'
import SignupForm from '.';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)}>
          <SignupForm setShowModal={setShowModal} />
        </ReviewModal>
      )}
    </>
  );
}

export default SignupFormModal;
