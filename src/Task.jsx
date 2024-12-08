import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "./redux/TodoSlice";
export default ({ task =[] }) => {
  const dispatch = useDispatch();
  const toggleDone = () => {
    dispatch(editTask({ id: task.id, isDone: !task.isDone }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
      <span
        className={`${
          task.isDone ? "line-through text-gray-400" : ""
        } text-lg`}
      >
        {task.description}
      </span>
      <div className="flex gap-2">
        <button
          onClick={toggleDone}
          className={`px-4 py-2 rounded ${
            task.isDone ? "bg-green-500" : "bg-gray-200"
          }`}
        >
          {task.isDone ? "Undo" : "Done"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};