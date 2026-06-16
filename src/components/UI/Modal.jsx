import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({
  title = 'Modal Başlığı',
  description = '  Burası modalın içerik alanı. Buraya dilediğin metin veya component gelebilir.',
  onClose,
}) => {
  return createPortal(
    <div className="modal">
      <div className="modal-header">
        <h3>{title}</h3>
      </div>
      <div className="modal-content">
        <p>{description}</p>
      </div>
      <div className="modal-actions">
        <button className="btn-secondary" onClick={onClose}>
          İptal
        </button>
        <button className="btn-primary" onClick={onClose}>
          Tamam
        </button>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
