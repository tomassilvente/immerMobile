interface InputFieldProps {
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => (
  <input className="input-field" type={type} placeholder={placeholder} />
);

export default InputField;
