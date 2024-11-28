import { createSlice } from '@reduxjs/toolkit';
import { ProfileResponseDTO } from '../../DTO/profile-DTO';
import { getProfileAsync, putProfileAsync } from './async';
export interface ProfileState {
  Profile: ProfileResponseDTO;
  loading: boolean;
}

const initialState: ProfileState = {
  Profile: {} as ProfileResponseDTO,
  loading: false,
};

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfileAsync.fulfilled, (state) => {
        state.loading = false;
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
        state.Profile = action.payload.profile;
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
