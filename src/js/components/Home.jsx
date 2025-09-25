import React, {useState} from "react";


const Home = () => {
  //input field state
  const [input, setInput] = useState("")
  //tasks state
	const [tasks, setTasks] = useState([])

  //Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.trim() === "");
    setTasks(...tasks, input);
    setInput("")

  }
	return(
		<div className="container-fluid">

      <div className="container">
        <h1 className="h1 text-danger fw-light mb-2 text-center">todos</h1>
        <div className="d-flex flex-column">
          <form>
            <input type="text" placeholder="What needs to be done?" className="p-3 w-100"/>
          </form>
              {tasks.map((task, indexOfTask) => (
          <p key={indexOfTask} className="p-3 border w-100">{task}</p>
        ))}

          </div>
          </div>
          
          
          
        </div>
          
	)
};

export default Home;