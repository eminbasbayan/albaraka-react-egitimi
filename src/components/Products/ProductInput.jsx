const ProductInput = ({ label, type, placeholder, onChange, name, value }) => {
  return (
    <label className="form-field">
      <span className="field-label">{label}</span>
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
