import React from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  let cards = props.apps.map((x) => {
    return (
      <Link to={`/${x}`}>
        <div className="card-homepage">{x}</div>
      </Link>
    );
  });
  return <div>{cards}</div>;
}
export default Cards;
