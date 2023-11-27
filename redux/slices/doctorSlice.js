import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    pendingReminders: [],
    hospitals: [],
  },
  reducers: {
    addPendingReminder: (state, action) => {
      state.pendingReminders.push(action.payload);
    },
    setHospitals: (state, action) => {
      state.hospitals = action.payload;
    },
  },
});

export const { addPendingReminder, setHospitals } = doctorSlice.actions;
export default doctorSlice.reducer;
