import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AllJobs = () => {
  const { soneState } = useSelector((store) => store.allJobs);
  return <h1>AllJobs</h1>;
};

export default AllJobs;
