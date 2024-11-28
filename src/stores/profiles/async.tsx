import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { apiV1 } from '../../lib/api-v1';
import { ProfileSchema } from '../../schemas/profile-schema';

export const putProfileAsync = createAsyncThunk<any, ProfileSchema>(
  'profiles/post',
  async (data, thunkAPI) => {
    try {
      const res = await apiV1.put('/profiles', data, {
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

export const getProfileAsync = createAsyncThunk<any, ProfileSchema>(
  'profiles/get',
  async (_, ThunkAPI) => {
    try {
      const res = await apiV1.get('/profile');
      return ThunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data.message);
      } else toast.error('get profile failed, please try again');
      return ThunkAPI.rejectWithValue('something error, please try again');
    }
  }
);
