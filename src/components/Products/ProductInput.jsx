const ProductInput = ({ label, type, placeholder, onChange, name }) => {
  return (
    <label className="form-field">
      <span className="field-label">{label}</span>
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export default ProductInput;
