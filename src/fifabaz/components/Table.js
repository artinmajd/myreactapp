import React from "react";

function Table(props) {
  // Use this for showing thead
  const fields = [
    "#",
    "short_name",
    "age",
    "nationality",
    "club",
    "overall",
    "value",
    "preferred_foot",
    "team_position",
  ];
  let hdrs = fields.map((x) => <th>{x}</th>);
  let plyrs = props.plyrs.map((x, index) => (
    <tr>
      {fields.map((y) => (y === "#" ? <td>{index + 1}</td> : <td>{x[y]}</td>))}
    </tr>
  ));
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        <tr>{hdrs}</tr>
      </thead>
      <tbody>{plyrs}</tbody>
    </table>
  );
}

export default Table;
