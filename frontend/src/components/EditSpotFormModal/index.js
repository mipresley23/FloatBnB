// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import EditSpotForm from './editSpotForm';
// import '../spots/spots.css'
// import { useSelector } from 'react-redux';


// function EditSpotFormModal() {
//   const [showModal, setShowModal] = useState(false);
//   const sessionUser = useSelector(state => state.session.user);


//   return (
//     <>
//       {sessionUser && <button id='createSpotModal' onClick={() => setShowModal(true)}>Edit Spot</button>}
//        {sessionUser && showModal && (
//       <Modal  onClose={() => setShowModal(false)}>
//           <EditSpotForm />
//         </Modal>
//       )}
//     </>
//   );
// }

// export default EditSpotFormModal;
