import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    if (isLoading) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange(name, value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
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
            handleChange={handleSearch}
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
