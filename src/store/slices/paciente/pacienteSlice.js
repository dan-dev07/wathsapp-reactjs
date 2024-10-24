import { createSlice } from '@reduxjs/toolkit';

export const pacienteSlice = createSlice({
    name: 'paciente',
    initialState: {
      nombre:'',
      telefono:'',
      chats:[],
    },
    reducers: {
        setConversacionActual:(state, {payload})=>{
          state.chats = payload.chats;
          state.telefono = payload.telefono;
        },
        setUltimoMensajeEnviado: (state, {payload}) => {
          state.chats = [...state.chats, payload];
        },
        setUltimoMensajeRecibido: (state, {payload}) => {
          state.chats = [...state.chats, payload];
        },
    } 
});


// Action creators are generated for each case reducer function
export const { setConversacionActual, setUltimoMensajeEnviado, setUltimoMensajeRecibido } = pacienteSlice.actions;
