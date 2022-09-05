import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   e.target.name = name;
  //   e.target.value = value;
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={() => console.log("handleChange")}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={() => console.log("handleChange")}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchSort"
            value={sort}
            handleChange={() => console.log("handleChange")}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort by */}
          <FormRowSelect
            labelText="sort"
            name="searchType"
            value={searchType}
            handleChange={() => console.log("handleChange")}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
