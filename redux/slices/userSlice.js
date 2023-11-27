import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "user",
  initialState: {
    email: null,
    isLoggedIn: false,
    bioData: null,
    medicationList: [],
    reminderHistory: [],
  },
  reducers: {
    logIn: (state, action) => {
      return { ...state, ...{ isLoggedIn: true }, ...action.payload };
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setBioData: (state, action) => {
      state.bioData = action.payload;
    },
    addMedication: (state, action) => {
      state.medicationList.push(action.payload);
    },
    setReminderHistory: (state, action) => {
      state.reminderHistory = action.payload;
    },
  },
});

export const { setEmail, setBioData, addMedication, setReminderHistory } =
  User.actions;
export default User.reducer;
