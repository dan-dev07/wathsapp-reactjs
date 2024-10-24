
import { setAsignar, setMisMensajes } from "./mensajesSlice"


export const startObtenerMensajesSinAsignar = (mensajes)=>{
  return async(dispatch) =>{
      dispatch(setAsignar(mensajes.mensajes));
  };
};

export const startObtenerMisMensajes = (pacientes)=>{
  return async(dispatch) =>{
      dispatch(setMisMensajes(pacientes));
  };
};

// export const startPacienteActual = (paciente)=>{
//   return async(dispatch) =>{
//       dispatch(setPacienteActual(paciente));
//   };
// };