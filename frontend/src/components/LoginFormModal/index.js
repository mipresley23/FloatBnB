import React, { useState } from 'react';
import { ReviewModal } from '../../context/ReviewModal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)}>
          <LoginForm />
        </ReviewModal>
      )}
    </>
  );
}

export default LoginFormModal;
