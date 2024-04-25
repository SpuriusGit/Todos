import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { State, type Todo } from "../../redux/reducers";
import ListItemComponent from "../ListItemComponent";

type ListComponentProps = {
  isRemoved?: boolean;
};

const ListComponent: React.FC<ListComponentProps> = ({ isRemoved }) => {
  const items = useSelector((state: State) =>
    isRemoved ? state.rootReducer.removed : state.rootReducer.todos
  );

  return (
    <div className={styles.list_container}>
      <h2 className={styles.title}>{isRemoved ? "Removed" : "Todos"}</h2>
      <ul className={styles.list}>
        {items &&
          items.map((todo: Todo) => (
            <ListItemComponent
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isRemoved={isRemoved}
            />
          ))}
      </ul>
    </div>
  );
};

export default ListComponent;
