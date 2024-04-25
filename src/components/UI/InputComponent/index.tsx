import styles from "./styles.module.scss";

type InputComponentPropTypes = {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputComponentPropTypes> = ({
  type,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default InputComponent;
