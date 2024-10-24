import { setConversacionActual } from "./pacienteSlice"


export const startSetConversacionActual =(chats,telefono)=>{
  return async (dispatch) =>{
    const pacienteActual = {chats, telefono}
    dispatch(setConversacionActual(pacienteActual));
  };
};