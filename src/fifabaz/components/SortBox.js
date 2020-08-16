import React from "react";
import { useCallback } from "react";
function SortBox({ sort, setSort }) {
  // Sorting buttons
  const fields = ["age", "short_name", "value"];

  const setClassName = useCallback(
    (type) => {
      if (sort.sortBy === type) {
        return sort.sortType === "desc" ? "btn-success" : "btn-info";
      }
      return "btn-outline-primary";
    },
    [sort.sortType, sort.sortBy]
  );

  const changeSelectedSort = useCallback(
    (val) => {
      if (val === sort.sortBy) {
        if (sort.sortType === "desc") {
          setSort({ sortBy: val, sortType: "asc" });
        } else {
          setSort({ sortBy: "", sortType: "" });
        }
      } else {
        setSort({ sortBy: val, sortType: "desc" });
      }
    },
    [sort.sortBy, sort.sortType, setSort]
  );
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
