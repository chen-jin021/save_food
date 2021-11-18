// importing using webpack
import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { FilterButton } from "./components/FilterButton";
//use nanoid to make unique identifiers
import { nanoid } from "nanoid";

//create an object that maps the different states of the tasks
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

//to get the keys of the object that we created
const FILTER_NAMES = Object.keys(FILTER_MAP);

function addTask(name) {
  alert(name);
}
function App(props) {
  const [filter, setFilter] = useState("All");

  /**
   * demo: iteration
   * @key used for unique key value - key is a special prop that's managed by React
   *                                – you cannot use the word key for any other purpose.
   */
  const [tasks, setTasks] = useState(props.tasks);

  //use a function to change/add a new task
  function addTask(name) {
    //using nanoid to append unique identifier to the id
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    //adding a new task
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    //updating the toggled task along with mapping the entire tasks
    const updateTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updateTasks);
  }
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  //for counting whether using task or tasks (plural)
  const tasksNoun = taskList.length !== (1 && 0) ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>

      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/*basically Todo from Todo.js provides a template (component)*/}
        {/*and the actual contents are provided by the DATA from index.js*/}
        {/*where the list is parsed (in App.js) into constant taskList*/}
        {taskList}
      </ul>
    </div>
  );
}

//so that App component can be used by other modules
export default App;
