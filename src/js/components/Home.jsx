import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="h1 text-danger fw-light mb-2 text-center">todos</h1>
        <div className="d-flex flex-column">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="What needs to be done?"
              className="p-3 w-100"
            />
          </form>

          {tasks.length === 0 ? (
            <p className="text-center p-2">No tasks, add a task 📋</p>
          ) : (
            tasks.map((task, idx) => (
              <div className="container d-flex justify-content-between align-items-center border p-3 mt-2" key={idx}>
                <p className="mb-0">
                  {task}
                </p>
                    <i className="delete-icon fa-solid fa-square-minus text-danger"></i>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;