import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
        <div className="modal-header">
          <h3>Modal Başlığı</h3>
        </div>
        <div className="modal-content">
          <p>Burası modalın içerik alanı. Buraya dilediğin metin veya component gelebilir.</p>
        </div>
        <div className="modal-actions">
          <button className="btn-secondary">İptal</button>
          <button className="btn-primary">Onayla</button>
        </div>
    </div>
  );
};

export default Modal;