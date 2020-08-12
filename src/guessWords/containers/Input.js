import React, { useState, Fragment, useCallback } from "react";

function Input(props) {
  const [guessedWord, setGuessedWord] = useState("");
  const onChangeCallback = useCallback((event) => {
    setGuessedWord(event.target.value);
  });
  const onSubmitGuessedWord = () => {
    if (guessedWord.length != 0) {
      props.onGuessWord(guessedWord);
      setGuessedWord("");
    }
    return null;
  };

  const contents = props.success ? null : (
    <Fragment>
      <input
        value={guessedWord}
        id={"word-guess"}
        placeholder={"enter guess"}
        className={"mb-2 mx-sm-3"}
        onChange={onChangeCallback}
      />
      <button
        className={"btn btn-primary mb-2"}
        id={"guess-word-button"}
        onClick={onSubmitGuessedWord}
      >
        Submit
      </button>
    </Fragment>
  );

  return <div>{contents}</div>;
}
export default Input;
