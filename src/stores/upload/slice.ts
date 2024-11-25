import { createSlice } from "@reduxjs/toolkit";
import { uploadAsync } from "./async";

export interface uploadStateProps {
  loading: boolean;
}

const initialState: uploadStateProps = {
  loading: false,
};

const uploadSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(uploadAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(uploadAsync.pending, (state) => {
        state.loading = true;
      });
  },
});

export default uploadSlice.reducer;
