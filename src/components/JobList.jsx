import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slices/jobSlice";
import { useState } from "react";
import { Grid } from "@mui/material";

const JobList = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const { value: jobs, isLoading } = useSelector((state) => state.jobs);

  const handleSearch = () => {
    dispatch(fetchJobs({ limit, offset }));
  };

  return (
    <div>
      <button onClick={handleSearch}>Search Jobs</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Grid container spacing={2}>
            {jobs.jdList?.map((job) => (
              <Grid item xs={12} sm={6} md={4}>
                <JobCard key={job.jdUid} job={job} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default JobList;
