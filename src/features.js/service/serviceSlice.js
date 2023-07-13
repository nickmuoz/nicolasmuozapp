import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cliente: "",
  date: "",
  phone: null,
  email: "",
  address: "",
  service: "",
  description: "",
  created: "",
  technician: "",
};

const serviceSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    addService: (state, action) => {
      const {
        cliente,
        date,
        phone,
        email,
        address,
        service,
        description,
        created,
        technician,
      } = action.payload;
      state.cliente = cliente;
      state.date = date;
      state.phone = phone;
      state.email = email;
      state.address = address;
      state.service = service;
      state.description = description;
      state.created = created;
      state.technician = technician;
    },
    deleteService: (state) => {
      state.cliente = "";
      state.date = "";
      state.phone = null;
      state.email = "";
      state.address = "";
      state.service = "";
      state.description = "";
      state.created = "";
      state.technician = "";
    },
  },
});

export const { addService, deleteService } = serviceSlice.actions;

export default serviceSlice.reducer;
