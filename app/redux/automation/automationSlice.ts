import { Automation } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

export type AutomationRedux = Omit<Automation, "createdAt"> & {
  createdAt: string;
};

// Define initial value for the slice state
const initialState: AutomationRedux = {
  name: "",
  id: "",
  createdAt: "",
  active: false,
  userId: "",
  trigger: "COMMENT",
  keyword: "",
};

export const automationSlice = createSlice({
  name: "automation",
  initialState,
  reducers: {
    setAutomation: (state, action) => {
      return action.payload;
    },
    updateName: () => {},
    updateActive: () => {},
  },
});

export const { setAutomation, updateName, updateActive } =
  automationSlice.actions;

export default automationSlice.reducer;
