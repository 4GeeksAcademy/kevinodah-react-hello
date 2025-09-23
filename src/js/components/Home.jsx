import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	return(
		<div class="container-fluid">

      <div class="container">
        <h1 class="h1 text-danger fw-light mb-2 text-center">todos</h1>
        <div class="d-flex justify-content-center">
          <div class="col-6">
          <form>
            <input type="text" placeholder="What needs to be done?" class="p-3 w-100"/>
          </form>
          </div>
          
        </div>
      </div>
    </div>
	)
};

export default Home;