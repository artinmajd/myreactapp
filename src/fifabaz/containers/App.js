import React, { useState, useCallback } from "react";
import Table from "../components/Table";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";
import playerData from "../data/Players";
import clubs from "../data/Clubs";
import nations from "../data/Nationality";
import positions from "../data/TeamPositions";

function App() {
  const players = playerData;

  const [nationalityFilter, setnationalityFilter] = useState([]);
  const [clubFilter, setclubFilter] = useState([]);
  const [positionFilter, setpositionFilter] = useState([]);
  const [sort, setSort] = useState({ sortBy: "", sortType: "" });
  //////////////////////////////////////////////////////////////////////
  const howToSort = useCallback(
    (x, y) => {
      if (sort.sortBy === "age") {
        if (sort.sortType === "desc") {
          return y.age - x.age;
        } else {
          return x.age - y.age;
        }
      }
      if (sort.sortBy === "short_name") {
        if (sort.sortType === "desc") {
          return y.short_name.toLowerCase() > x.short_name.toLowerCase()
            ? 1
            : -1;
        } else {
          return x.short_name.toLowerCase() > y.short_name.toLowerCase()
            ? 1
            : -1;
        }
      }
      if (sort.sortBy === "value") {
        if (sort.sortType === "desc") {
          return y.value - x.value;
        } else {
          return x.value - y.value;
        }
      }
      return y.overall - x.overall;
    },
    [sort]
  );

  const applyNationality = useCallback(
    (props) => {
      let a = props.filter((x) => {
        if (nationalityFilter.length === 0) {
          return true;
        }
        return nationalityFilter.includes(x.nationality);
      });
      return a;
    },
    [nationalityFilter]
  );
  const applyClub = useCallback(
    (props) => {
      let a = props.filter((x) => {
        if (clubFilter.length === 0) {
          return true;
        }
        return clubFilter.includes(x.club);
      });
      return a;
    },
    [clubFilter]
  );

  const applyPosition = useCallback(
    (props) => {
      let a = props.filter((x) => {
        if (positionFilter.length === 0) {
          return true;
        }
        return positionFilter.includes(x.team_position);
      });
      return a;
    },
    [positionFilter]
  );
  const changeFilter = useCallback(() => {
    let a = applyNationality(players);
    a = applyClub(a);
    a = applyPosition(a);
    a = a.sort(howToSort);
    return a;
  }, [howToSort, applyNationality, applyClub, applyPosition, players]);

  const renderTable = useCallback(() => {
    return <Table plyrs={changeFilter()} />;
  }, [changeFilter]);

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-lg-2 col-12">
          <FilterBox
            cl={clubs}
            nl={nations}
            ps={positions}
            nationalityFilter={nationalityFilter}
            setnationalityFilter={setnationalityFilter}
            clubFilter={clubFilter}
            setclubFilter={setclubFilter}
            positionFilter={positionFilter}
            setpositionFilter={setpositionFilter}
          />
        </div>
        <div className="col-lg-10 col-12">
          <SortBox sort={sort} setSort={setSort} />
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default App;
