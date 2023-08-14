export const ShowTaskList = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    // setTaskList(taskList.filter((t) => t.id!== id));
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleEdit = (id) => {
    setTask(taskList.find((task) => task.id === id));
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList &&
          taskList.map((t) => (
            <li key={t.id}>
              <p>
                <span className="name">{t.name}</span>
                <span className="time"> {t.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(t.id)}
              ></i>
              <i className="bi bi-trash" onClick={() => handleDelete(t.id)}></i>
            </li>
          ))}
      </ul>
    </section>
  );
};
