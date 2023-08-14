export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      //modification mode
      const date = new Date();
      const updatedTaskList = taskList.map((t) =>
        t.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : t
      );
      setTaskList(updatedTaskList);
    } else {
      //creation mode
      if (!e.target.task.value) {
        return;
      }
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      //clear input
      setTaskList([...taskList, newTask]);
    }
    e.target.task.value = "";
    setTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          name="task"
          autoComplete="off"
          maxLength="25"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit" className="updateAnimation">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};
