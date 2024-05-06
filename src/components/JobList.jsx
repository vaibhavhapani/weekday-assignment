import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const JobList = () => {
  const { value: jobs, isLoading } = useSelector((state) => state.jobs);
  const { minExperience, minBasePay, remote, companyName, roles, locations } =
    useSelector((state) => state.filter);

  console.log(jobs);

  const filteredJobs = jobs?.jdList?.filter((job) => {
    const companyNameMatch = companyName
      ? job.companyName.toLowerCase().includes(companyName.toLowerCase()) // if user enters 'A' or 'a' it will show eBay too as it includes 'a'.
      : true; //  For exact match we can use .startsWith() instead of .include()

    const minExperienceMatch = job.minExp && job.minExp >= minExperience; // job will be showed if minimum experience value is null in job data

    const minBaseSalaryMatch = job.minJdSalary && job.minJdSalary >= minBasePay; // job will be showed if minimum salary value is null in job data

    const isRemote = remote
      ? job.location.includes("remote")
      : !job.location.includes("remote");

    const includesPreferredRoles =
      !roles ||
      roles.length === 0 ||
      roles.some((role) => role.toLowerCase() === job.jobRole.toLowerCase());

    const includesPreferredLocation =
      !locations ||
      locations.length === 0 ||
      locations.some(
        (location) => location.toLowerCase() === job.location.toLowerCase()
      );

    return (
      companyNameMatch &&
      minExperienceMatch &&
      minBaseSalaryMatch &&
      isRemote &&
      includesPreferredRoles &&
      includesPreferredLocation
    );
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Grid container spacing={2}>
            {filteredJobs?.map((job) => (
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
