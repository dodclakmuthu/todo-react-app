import { TiDelete } from "react-icons/ti";

function Todo({id, title, deleteTodo}) {
  return (
    <>
      <div className="todo">
        <p>{title}</p> <TiDelete onClick={() => deleteTodo(id)} size={32} />
      </div>
    </>
  );
}

export default Todo;
