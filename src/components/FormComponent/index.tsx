import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { useState } from "react";
import { addTodo } from "../../redux/actions";
import ButtonComponent from "../UI/ButtonComponent";
import InputComponent from "../UI/InputComponent";

const FormComponent = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoText.trim()) return;

    dispatch(addTodo({ id: Date.now(), text: todoText }));

    setTodoText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.form__label}>
          <h2>Todo:</h2>
        </label>
        <InputComponent
          type="text"
          id="name"
          name="name"
          value={todoText}
          onChange={handleInputChange}
        />
        <ButtonComponent title="Submit" />
      </form>
    </section>
  );
};

export default FormComponent;
