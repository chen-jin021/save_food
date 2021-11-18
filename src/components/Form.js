import React, { useState } from "react";

// props come from the parent of a componen
export default function Form(props) {
  /**@setName() a function whose job is to modify name, called setName().
   * @name is the variable that we want to change
   * useState('Using Hooks!') - set the initial value to using hooks (name initally is 'Using Hooks!')
   */
  const [name, setName] = useState("");

  /** we can user user data by reading e.target.value.
   * e.target represents the element that fired the change event — that’s our input.
   * So, value is the text inside it.
   */
  function handleChange(e) {
    setName(e.target.value);
  }
  //this function is used to handle the event of which the button is clicked
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Empty Submission Not Allowed");
    } else {
      props.addTask(name);
    }
    setName("");
  }
  return (
    // onSubmit is used with form where handleSubmit is a function defined on clicking the button
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        // this is to read user input
        onChange={handleChange}
      />

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

//OR DO: export default FilterButton;
