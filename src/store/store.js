import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from './slices/auth/userSlice';
import { mensajesSlice } from './slices/mensajes/mensajesSlice';
import { pacienteSlice } from './slices/paciente/pacienteSlice';
import { usuariosSlice } from './slices/usuarios/usuariosSlice';

export const store = configureStore({
  reducer:{
    userReducer: userSlice.reducer,
    mensajesReducer: mensajesSlice.reducer,
    pacienteReducer: pacienteSlice.reducer,
    usuariosReducer: usuariosSlice.reducer,
  }
})