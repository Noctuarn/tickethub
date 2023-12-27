import { createSlice } from "@reduxjs/toolkit";
import { TicketProps } from "../../types/interfaces";

type userType = {
  id: number | null;
  name: string;
  surname: string;
  tel: string;
  email: string;
  money: number;
  tickets: TicketProps[];
};

const initialState: userType = {
  id: null,
  name: "",
  surname: "",
  tel: "",
  email: "",
  money: 0,
  tickets: [],
};

const loadState = (): userType | undefined => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: userType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch {
    console.error("Error !!!");
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: loadState() || initialState,

  reducers: {
    setNewUser: (state) => {
      (state.id = null),
        (state.name = ""),
        (state.surname = ""),
        (state.tel = ""),
        (state.email = ""),
        (state.money = 0),
        (state.tickets = []);

        saveState(state);
    },

    setUser: (state, action) => {
      const { id, name, money, tickets, email, tel, surname } = action.payload;
      state.id = id;
      state.name = name;
      state.surname = surname;
      state.money = money;
      state.tickets = tickets;
      state.email = email;
      state.tel = tel;

      saveState(state);
    },

    addTicket: (state, action) => {
      const {
        price,
        id,
        departure,
        destination,
        date,
        deperatureTime,
        arrivalTime,
        carrier,
        amount
      } = action.payload;

      state.tickets.push({
        id,
        departure,
        destination,
        date,
        deperatureTime,
        arrivalTime,
        price,
        carrier,
        amount
      });
      state.money = state.money - price;
      saveState(state);
    }, 

    returnTicket: (state, action) => {
      const { ticketId, price } = action.payload;
    
      state.money += price;
      state.tickets = state.tickets.filter((ticket) => ticket.id !== ticketId);
      saveState(state);
    }
    
  }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
