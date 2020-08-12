import React from "react";

const GuessedWords = (props) => {
  let contents;

  contents =
    props.guessedWords.length === 0 ? (
      <div id={"guess-instruction"}>Try to guess the secret word!</div>
    ) : (
      <div id={"guessed-words"}>
        <h3>Guessed Words</h3>
        <table className={"table table-sm"}>
          <thead className={"thead-light"}>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {props.guessedWords.map((x) => (
              <tr>
                <td>{x.guessedWord}</td>
                <td>{x.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  return <div id={"component-guessed-words"}>{contents}</div>;
};

export default GuessedWords;
