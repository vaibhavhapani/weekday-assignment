import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minExperience: 0,
  companyName: "",
  locations: [],
  remote: false,
  techStack: [],
  roles: [],
  minBasePay: 0,
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
  },
});

export default filterSlice.reducer;
export const {
  updateCompanyName,
  updateMinBasePay,
  updateMinExperience,
  updateRemote,
} = filterSlice.actions;
