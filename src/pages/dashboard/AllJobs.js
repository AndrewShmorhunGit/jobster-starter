import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { JobsContainer, SearchContainer } from "../../components";

const AllJobs = () => {
  const { soneState } = useSelector((store) => store.allJobs);
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
