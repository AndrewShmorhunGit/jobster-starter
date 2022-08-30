import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify/dist/components";

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
