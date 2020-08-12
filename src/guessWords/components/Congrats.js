import React from "react";

function Congrats(props) {
  if (props.success) {
    return (
      <div id={"congrats-alert"}>Congratulations! You guessed the word!</div>
    );
  }

  return null;
}

export default Congrats;
