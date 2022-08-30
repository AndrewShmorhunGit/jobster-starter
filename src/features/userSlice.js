import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

const initialState = {
  isLoading: false,
  user: null,
};

export const loginUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {}
);

export const registerUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/testingRegister", user);
      console.log(thunkAPI);
      console.log(resp);
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error.response);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
