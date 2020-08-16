import React, { useCallback } from "react";

function FilterBox({
  cl,
  nl,
  ps,
  nationalityFilter,
  setnationalityFilter,
  clubFilter,
  setclubFilter,
  positionFilter,
  setpositionFilter,
}) {
  const filters = ["nationality", "club", "team_position"];

  const changeNationalityFilter = useCallback(
    (event, x) => {
      if (event === true) {
        setnationalityFilter([...nationalityFilter, x]);
      } else {
        setnationalityFilter(
          nationalityFilter.filter((a) => {
            return a !== x;
          })
        );
      }
    },
    [setnationalityFilter, nationalityFilter]
  );
  const changeClubFilter = useCallback(
    (event, x) => {
      if (event === true) {
        setclubFilter([...clubFilter, x]);
      } else {
        setclubFilter(
          clubFilter.filter((a) => {
            return a !== x;
          })
        );
      }
    },
    [setclubFilter, clubFilter]
  );
  const changePositionFilter = useCallback(
    (event, x) => {
      if (event === true) {
        setpositionFilter([...positionFilter, x]);
      } else {
        setpositionFilter(
          positionFilter.filter((a) => {
            return a !== x;
          })
        );
      }
    },
    [setpositionFilter, positionFilter]
  );

  let nationalityCheckBox = nl.map((x) => (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="nationality"
        checked={nationalityFilter.includes(x)}
        onChange={(event) => changeNationalityFilter(event.target.checked, x)}
      ></input>
      <label class="form-check-label" for="inlineCheckbox1">
        {x}
      </label>
    </div>
  ));
  let clubCheckBox = cl.map((x) => (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="club"
        checked={clubFilter.includes(x)}
        onChange={(event) => changeClubFilter(event.target.checked, x)}
      ></input>
      <label class="form-check-label" for="inlineCheckbox1">
        {x}
      </label>
    </div>
  ));
  let positionCheckBox = ps.map((x) => (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="position"
        checked={positionFilter.includes(x)}
        onChange={(event) => changePositionFilter(event.target.checked, x)}
      ></input>
      <label class="form-check-label" for="inlineCheckbox1">
        {x}
      </label>
    </div>
  ));
  return (
    <div className="filter-box">
      <div>
        <h5 className="card-title">Filter Box</h5>
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  id="btn-nationality-collapse"
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse-nationality"
                  aria-expanded="true"
                  aria-controls="collapse-nationality"
                >
                  {filters[0]}
                </button>
              </h2>
            </div>
            <div
              id="collapse-nationality"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">{nationalityCheckBox}</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  id="btn-club-collapse"
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse-club"
                  aria-expanded="false"
                  aria-controls="collapse-club"
                >
                  {filters[1]}
                </button>
              </h2>
            </div>
            <div
              id="collapse-club"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">{clubCheckBox}</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  id="btn-team_position-collapse"
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse-team_position"
                  aria-expanded="false"
                  aria-controls="collapse-team_position"
                >
                  {filters[2]}
                </button>
              </h2>
            </div>
            <div
              id="collapse-team_position"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">{positionCheckBox}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
