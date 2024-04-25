import styles from "./styles.module.scss";

type ButtonComponentPropTypes = {
  onClick?: () => void;
  title: string;
};

const ButtonComponent: React.FC<ButtonComponentPropTypes> = ({
  onClick,
  title,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonComponent;
