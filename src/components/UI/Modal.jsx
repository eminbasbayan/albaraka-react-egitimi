import { createPortal } from 'react-dom';
import './Modal.css';
import { useEffect, useState } from 'react';

const Modal = ({
  title = 'Modal Başlığı',
  description = '  Burası modalın içerik alanı. Buraya dilediğin metin veya component gelebilir.',
  onClose,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Modal DOM'a ilk yüklendiğinde çalışır!");

    let sayi = 0;

    const id = setInterval(() => {
      sayi++;
      setCount(sayi);
      console.log(sayi);
    }, 1000);

    // clean-up function
    return () => {
      console.log("Modal DOM'dan kaldırıldığında çalışır!");
      clearInterval(id);
    };
  }, []);

  return createPortal(
    <div className="modal-container">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <h3>
            {title} {count}
          </h3>
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
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
