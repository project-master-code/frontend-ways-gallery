import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiV1 } from "../../lib/api-v1";
import { isAxiosError } from "axios";
import { UploadSchema } from "../../schemas/upload-schema";

export const uploadAsync = createAsyncThunk<any, UploadSchema>("upload/post", async (data, thunkAPI) => {
  try {
    const res = await apiV1.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });
    return thunkAPI.fulfillWithValue(res.data);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      toast.error(error?.response?.data.message);
    } else toast.error("login failed, please try again");
    return thunkAPI.rejectWithValue("failed login, please try again");
  }
});
