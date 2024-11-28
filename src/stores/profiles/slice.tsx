import { createSlice } from '@reduxjs/toolkit';
import { ProfileResponseDTO } from '../../DTO/profile-DTO';
import { getProfileAsync, putProfileAsync } from './async';
export interface ProfileState {
  profile: ProfileResponseDTO;
  loading: boolean;
}

const initialState: ProfileState = {
  profile: {} as ProfileResponseDTO,
  loading: false,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.content;
      })
      .addCase(getProfileAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileAsync.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(putProfileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.content;
      })
      .addCase(putProfileAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(putProfileAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ProfileSlice.reducer;
