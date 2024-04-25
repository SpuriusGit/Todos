import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addTodoToRemoved, removeTodo } from "../../redux/actions";
import ButtonComponent from "../UI/ButtonComponent";

type ListItemComponentProps = {
  id: number;
  text: string;
  isRemoved?: boolean;
};

const ListItemComponent: React.FC<ListItemComponentProps> = ({
  id,
  text,
  isRemoved,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
    dispatch(addTodoToRemoved({ id: id, text: text }));
  };

  return (
    <li className={styles.list_item}>
      <div
        className={`${styles.list_item__text} ${
          isRemoved && styles.list_item__text__removed
        }`}
      >
        {text}
      </div>

      {!isRemoved && <ButtonComponent onClick={handleDelete} title="Delete" />}
    </li>
  );
};

export default ListItemComponent;
