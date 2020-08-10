import React, { useRef, useEffect, useState } from "react";
import "./Timer.css";

function Button(props) {
  return <button onClick={props.reset}>Reset Timer to {props.n}</button>;
}

export function Timer() {
  const [value, setvalue] = useState(0);
  const [id, setid] = useState();
  useEffect(() => {
    setid(
      window.setInterval(() => setvalue((prevvalue) => prevvalue + 1), 1000)
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="container">
      <div className="timer">{value}</div>
      <Button
        reset={() => {
          setvalue(0);
          window.clearInterval(id);
          setid(
            window.setInterval(
              () => setvalue((prevvalue) => prevvalue + 1),
              1000
            )
          );
        }}
        n={0}
      />
      <Button
        reset={() => {
          setvalue(5);
          window.clearInterval(id);
          setid(
            window.setInterval(
              () => setvalue((prevvalue) => prevvalue + 1),
              1000
            )
          );
        }}
        n={5}
      />
    </div>
  );
}
