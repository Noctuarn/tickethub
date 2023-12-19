import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../../types/interfaces";

type userType = {
  id: number | null;
  name: string;
  money: number;
  tickets: Ticket[];
};

const initialState: userType = {
  id: null,
  name: "",
  money: 0,
  tickets: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      const { id, name, money, tickets } = action.payload;
      state.id = id;
      state.name = name;
      state.money = money;
      state.tickets = tickets;
    },
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
