import React from "react";

/**
 * handling form submission
 * 1. prevents default behavior of the submit event
 * 2. triggers the alert to show "Hello World"
 */
export function FilterButton(props) {
  return (
    // 'aria-pressed = true' means the button is either pressed or unpressed
    // as aria-pressed is set to true, it means the button is initially set as pressed
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      {/*visually-hideen is for general audiences as those with voiceover need more context*/}
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
