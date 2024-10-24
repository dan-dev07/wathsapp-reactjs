import { createSlice } from '@reduxjs/toolkit';

export const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    usuarios:[],
  },
  reducers: {
    setUsuarios:(state, {payload})=>{
      state.usuarios = payload;
    }
  }
});


// Action creators are generated for each case reducer function
export const { setUsuarios } = usuariosSlice.actions;
