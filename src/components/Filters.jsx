import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "@mui/base/Option";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import {
  updateCompanyName,
  updateMinBasePay,
  updateMinExperience,
  updateRemote,
} from "../redux/slices/filterSlice";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Filters = () => {
  const dispatch = useDispatch();
  const { minExperience, minBasePay, remote, companyName } = useSelector(
    (state) => state.filter
  );

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="experience-label">Experience</InputLabel>
            <Select
              labelId="experience-label"
              value={minExperience}
              onChange={(e) => dispatch(updateMinExperience(e.target.value))}
              input={<BootstrapInput />}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((exp) => (
                <MenuItem key={exp} value={exp}>
                  {exp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="remote-label">Remote</InputLabel>
            <Select
              labelId="remote-label"
              value={remote}
              onChange={(e) => dispatch(updateRemote(e.target.value))}
              input={<BootstrapInput />}
            >
              <MenuItem value={true}>Remote</MenuItem>
              <MenuItem value={false}>On-site</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="salary-label">Minimum Base Salary</InputLabel>
            <Select
              labelId="salary-label"
              value={minBasePay}
              onChange={(e) => dispatch(updateMinBasePay(e.target.value))}
              input={<BootstrapInput />}
            >
              {[0, 10, 20, 30, 40, 50, 60, 70, 80].map((salary) => (
                <MenuItem key={salary} value={salary}>
                  {salary}L
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="company-name">Company Name</InputLabel>
            <BootstrapInput
              id="company-name"
              onChange={(e) => dispatch(updateCompanyName(e.target.value))}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
