import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/TodoSlice";

export default () => {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (taskDescription.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          description: taskDescription,
          isDone: false,
        })
      );
      setTaskDescription("");
    }
  };
  return (
    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleAdd}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400"
      >
        Add Task
      </button>
    </div>
  );
};