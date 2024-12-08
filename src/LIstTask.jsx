import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./redux/TodoSlice";
import Task from "./Task";

export default () => {
  const { tasks, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === "done"
      ? tasks.filter((task) => task.isDone)
      : filter === "notDone"
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className={`${
            filter === "all" ? "bg-black text-white" : "bg-gray-200"
          } px-4 py-2 rounded`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("done"))}
          className={`${
            filter === "done" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded`}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter("notDone"))}
          className={`${
            filter === "notDone" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded`}
        >
          Not Done
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};