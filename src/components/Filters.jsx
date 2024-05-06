import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  OutlinedInput,
  Chip,
  useTheme,
} from "@mui/material";
import {
  updateCompanyName,
  updateLocation,
  updateMinBasePay,
  updateMinExperience,
  updateRemote,
  updateRoles,
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

function getStyles(selectedValue, availableValues, theme) {
  return {
    fontWeight:
      availableValues.indexOf(selectedValue) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Filters = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { minExperience, minBasePay, remote, companyName, roles, locations } =
    useSelector((state) => state.filter);

  const rolesList = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Tech Lead",
    "Flutter",
    "IOS",
    "React Native",
    "Android",
  ];

  const locationList = ["Bangalore", "Mumbai", "Chennai", "Delhi NCR"];

  const techStackList = [];

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedItems = typeof value === "string" ? value.split(",") : value;
    console.log(selectedItems);

    dispatch(updateRoles(selectedItems));
  };

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    const selectedItems = typeof value === "string" ? value.split(",") : value;
    dispatch(updateLocation(selectedItems));
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="standard" fullWidth>
            <Select
              value={minExperience}
              onChange={(e) => dispatch(updateMinExperience(e.target.value))}
              input={<BootstrapInput />}
              renderValue={(value) => (value ? `${value}` : "Experience")}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((exp) => (
                <MenuItem key={exp} value={exp}>
                  {exp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="standard" fullWidth>
            <Select
              value={remote}
              onChange={(e) => dispatch(updateRemote(e.target.value))}
              input={<BootstrapInput />}
              renderValue={(value) => (value ? "Remote" : "On-Site")}
            >
              <MenuItem value={true}>Remote</MenuItem>
              <MenuItem value={false}>On-site</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="standard" fullWidth>
            <Select
              value={minBasePay}
              onChange={(e) => dispatch(updateMinBasePay(e.target.value))}
              input={<BootstrapInput />}
              renderValue={(value) =>
                value ? `${value}L` : "Minimum Base Salary"
              }
            >
              {[0, 10, 20, 30, 40, 50, 60, 70, 80].map((salary) => (
                <MenuItem key={salary} value={salary}>
                  {salary}L
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="outlined" fullWidth>
            <BootstrapInput
              placeholder="Enter company name"
              onChange={(e) => dispatch(updateCompanyName(e.target.value))}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Roles</InputLabel>
            <Select
              multiple
              value={roles}
              onChange={handleRoleChange}
              input={<OutlinedInput id="select-multiple-chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} sx={{borderRadius: "0"}}/>
                  ))}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 250,
                  },
                },
              }}
            >
              {rolesList.map((role) => (
                <MenuItem
                  key={role}
                  value={role}
                  style={getStyles(role, roles, theme)}
                >
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              multiple
              value={locations}
              onChange={handleLocationChange}
              input={<OutlinedInput id="select-multiple-chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} sx={{borderRadius: "0"}} />
                  ))}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 250,
                  },
                },
              }}
            >
              {locationList.map((loc) => (
                <MenuItem
                  key={loc}
                  value={loc}
                  style={getStyles(loc, locations, theme)}
                >
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
