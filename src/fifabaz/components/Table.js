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
    "team_position"
  ];
let hdrs = fields.map((x)=><th>{x}</th>)
let plyrs = props.plyrs.map((x,index)=><tr>
  <td>{index+1}</td>
  <td>{x.short_name}</td>
  <td>{x.age}</td>
  <td>{x.nationality}</td>
  <td>{x.club}</td>
  <td>{x.overall}</td>
  <td>{x.value}</td>
  <td>{x.preferred_foot}</td>
  <td>{x.team_position}</td>
  </tr>)
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        <tr>
        {
          hdrs
        }
        </tr>
      </thead>
      <tbody>
        {
          plyrs
        }
      </tbody>
    </table>
  );
}

export default Table;
