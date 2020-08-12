import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Timer.css";

function Button(props) {
  return (
    <button onClick={props.reset} className="button_timer">
      Reset Timer to {props.n}
    </button>
  );
}

export function Timer() {
  const [value, setvalue] = useState(0);
  const [id, setid] = useState();
  const resetZeroCallback = useCallback(() => {
    setvalue(0);
    window.clearInterval(id);
    setid(
      window.setInterval(() => setvalue((prevvalue) => prevvalue + 1), 1000)
    );
  }, [id]);
  const resetFiveCallback = useCallback(() => {
    setvalue(5);
    window.clearInterval(id);
    setid(
      window.setInterval(() => setvalue((prevvalue) => prevvalue + 1), 1000)
    );
  }, [id]);
  useEffect(() => {
    setid(
      window.setInterval(() => setvalue((prevvalue) => prevvalue + 1), 1000)
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="container_timer">
      <div className="timer">{value}</div>
      <Button reset={resetZeroCallback} n={0} />
      <Button reset={resetFiveCallback} n={5} />
    </div>
  );
}
