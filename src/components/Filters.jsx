import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "@mui/base/Option";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
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
      <Box sx={{ display: "flex", gap: 1 }}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Experience</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={minExperience}
            onChange={(e) => dispatch(updateMinExperience(e.target.value))}
            input={<BootstrapInput />}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Remote</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={remote}
            onChange={(e) => dispatch(updateRemote(e.target.value))}
            input={<BootstrapInput />}
          >
            <MenuItem value={true}>Remote</MenuItem>
            <MenuItem value={false}>On-site</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">
            Minimum Base Salary
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={minBasePay}
            onChange={(e) => dispatch(updateMinBasePay(e.target.value))}
            input={<BootstrapInput />}
          >
            <MenuItem value={0}>0L</MenuItem>
            <MenuItem value={10}>10L</MenuItem>
            <MenuItem value={20}>20L</MenuItem>
            <MenuItem value={30}>30L</MenuItem>
            <MenuItem value={40}>40L</MenuItem>
            <MenuItem value={50}>50L</MenuItem>
            <MenuItem value={60}>60L</MenuItem>
            <MenuItem value={70}>70L</MenuItem>
            <MenuItem value={80}>80L</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox">
            Company Name
          </InputLabel>
          <BootstrapInput
            id="demo-customized-textbox"
            onChange={(e) => dispatch(updateCompanyName(e.target.value))}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default Filters;
