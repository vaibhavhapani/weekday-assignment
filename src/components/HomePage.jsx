import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, updateOffset } from "../redux/slices/jobSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.jobs.offset);

  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset }));
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        dispatch(updateOffset(10));
      }
      console.log(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div>
      <Filters />
      <JobList></JobList>
    </div>
  );
};

export default HomePage;
