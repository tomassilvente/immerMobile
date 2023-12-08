interface InputFieldProps {
  type: string;
  placeholder: string;
  value?: any;
  onChange?: (e: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder }) => (
  <input className="input-field" onChange={onChange} type={type} value={value} placeholder={placeholder} />
);

export default InputField;
