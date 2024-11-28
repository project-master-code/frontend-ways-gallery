import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ProfileResponseDTO } from '../../DTO/profile-DTO';
import { ResponseDTO } from '../../DTO/response-DTO';
import { apiV1 } from '../../lib/api-v1';

export const putProfileAsync = createAsyncThunk(
  'profiles/post',
  async (
    { profileId, formData }: { profileId: number; formData: FormData },
    thunkAPI
  ) => {
    try {
      const res = await apiV1.put(`profile/${profileId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data.message);
      } else toast.error('login failed, please try again');
      return thunkAPI.rejectWithValue('failed login, please try again');
    }
  }
);

export const getProfileAsync = createAsyncThunk<
  ResponseDTO<ProfileResponseDTO>,
  void
>('profiles/get', async (_, ThunkAPI) => {
  try {
    const res = await apiV1.get('/profile');
    return ThunkAPI.fulfillWithValue(res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      toast.error(error?.response?.data.message);
    } else toast.error('get profile failed, please try again');
    return ThunkAPI.rejectWithValue('something error, please try again');
  }
});
