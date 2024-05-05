import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/slices/jobSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset: 0  }));
  }, [])

  return (
    <div>
      <Filters />
      <JobList></JobList>
    </div>
  );
};

export default HomePage;
