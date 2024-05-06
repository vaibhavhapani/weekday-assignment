import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minExperience: 0,
  companyName: "",
  locations: [],
  remote: false,
  techStack: [],
  roles: [],
  minBasePay: 0,
  techStack: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateMinExperience: (state, action) => {
      state.minExperience = action.payload;
    },
    updateCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    updateRemote: (state, action) => {
      state.remote = action.payload;
    },
    updateMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
    updateRoles: (state, action) => {
      state.roles = action.payload;
    },
    updateLocation: (state, action) => {
      state.locations = action.payload;
    },
    updateTechStack: (state, action) => {
      state.techStack = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  updateCompanyName,
  updateMinBasePay,
  updateMinExperience,
  updateRemote,
  updateRoles,
  updateLocation,
  updateTechStack,
} = filterSlice.actions;
