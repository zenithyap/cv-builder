import '../styles/input.css';

export default function Input({label, type, value, handleChange}) {
  return (
    <div className='input'>
      <label htmlFor={label}>{label[0].toUpperCase() + label.slice(1)}</label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => handleChange(label, e.target.value)}
      />
    </div>
  );
}