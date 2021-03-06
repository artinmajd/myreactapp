import React, { useState, useEffect, useCallback } from "react";
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import Input from "../containers/Input";

function getLetterMatchCount(guessedWord, secretWord) {
  let t = 0;
  const min = Math.min;
  for (let i = 0; i < 26; i++) {
    t +=
      min(
        guessedWord.split(String.fromCharCode(i + 65)).length,
        secretWord.split(String.fromCharCode(i + 65)).length
      ) - 1;
  }
  for (let i = 0; i < 26; i++) {
    t +=
      min(
        guessedWord.split(String.fromCharCode(i + 97)).length,
        secretWord.split(String.fromCharCode(i + 97)).length
      ) - 1;
  }
  return t;
}

function App() {
  const [success, setSuccess] = useState(false);
  const [secretWord, setSecretWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);

  useEffect(() => {
    setSecretWord("Letter");
  }, []);
  const guessWordCallback = useCallback(
    (guessedWord) => {
      setSuccess(guessedWord === secretWord);

      setGuessedWords([
        ...guessedWords,
        {
          guessedWord: guessedWord,
          letterMatchCount: getLetterMatchCount(guessedWord, secretWord),
        },
      ]);
    },
    [guessedWords, secretWord]
  );

  return (
    <div className={"container"}>
      <h2 className={"mt-2"}>Guess the word!</h2>
      <Congrats success={success} />
      <Input onGuessWord={guessWordCallback} success={success} />
      <GuessedWords id={"guessed-word"} guessedWords={guessedWords} />
    </div>
  );
}

export default App;
