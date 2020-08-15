import React from "react";

function SortBox(props) {
  // Sorting buttons
  const fields = ["age", "short_name", "value"];

  const setClassName = (type) => {
    console.log(props.sort);
    if (props.sort.sortBy === type) {
      return props.sort.sortType === "desc" ? "btn-success" : "btn-info";
    }
    return "btn-outline-primary";
  };

  const changeSelectedSort = (val) => {
    // Default sorted => "btn-outline-primary" Non selected button (Third Click)
    // Descending sorted => "btn-success" First Click
    // Ascending sorted => "btn-info" Second Click
    // Your Code ...
    if (val === props.sort.sortBy) {
      if (props.sort.sortType === "desc") {
        props.setSort({ sortBy: val, sortType: "asc" });
      } else {
        props.setSort({ sortBy: "", sortType: "" });
      }
    } else {
      console.log(val);
      props.setSort({ sortBy: val, sortType: "desc" });
    }
  };
  return (
    <div id="sort-box-container" className="d-flex py-2">
      <button
        id="sort-btn-age"
        type="button"
        value="age"
        className={`btn mx-2 sort-btn ${setClassName("age")}`}
        onClick={(event) => {
          changeSelectedSort(event.target.value);
        }}
      >
        {fields[0]}
      </button>
      <button
        id="sort-btn-short_name"
        type="button"
        value="short_name"
        className={`btn mx-2 sort-btn ${setClassName("short_name")}`}
        onClick={(event) => {
          changeSelectedSort(event.target.value);
        }}
      >
        {fields[1]}
      </button>
      <button
        id="sort-btn-value"
        type="button"
        value="value"
        className={`btn mx-2 sort-btn ${setClassName("value")}`}
        onClick={(event) => {
          changeSelectedSort(event.target.value);
        }}
      >
        {fields[2]}
      </button>
    </div>
  );
}

export default SortBox;
