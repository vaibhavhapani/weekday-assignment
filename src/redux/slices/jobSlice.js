import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
  "fetchJobs",
  async (payload, thunkAPI) => {
    const { limit, offset } = payload;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({ limit, offset });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    return await response.json();
  }
);

const initialState = {
  value: {
    jdList: [],
    totalCount: 0,
  },
  offset: 0,
  isLoading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateOffset: (state, action) => {
      state.offset += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value = {
          jdList: [...(state.value.jdList || []), ...action.payload.jdList],
          totalCount: action.payload.totalCount,
        };
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
export const { updateOffset } = jobSlice.actions;
