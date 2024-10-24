import { createSlice } from '@reduxjs/toolkit';

export const mensajesSlice = createSlice({
    name: 'mensajes',
    initialState: {
      sinAsignar:[],
      misMensajes:[],
    },
    reducers: {

      setAsignar: (state, {payload}) => {
        state.sinAsignar = payload;
      },
      setMisMensajes: (state, {payload}) => {
        state.misMensajes = payload;
      },
      setUltimoMensajeRecibido:(state, {payload}) => {
        state.misMensajes = [...state.misMensajes, payload.ultimo];
      }
    }
});


// Action creators are generated for each case reducer function
export const { setMisMensajes, setAsignar, setUltimoMensajeRecibido } = mensajesSlice.actions;
