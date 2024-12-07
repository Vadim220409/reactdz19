import Modal from 'react-modal';

const ImageModal = ({ image, onClose }) => (
  <Modal isOpen={!!image} onRequestClose={onClose}>
    <div>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || 'No description'}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </Modal>
);

export default ImageModal;