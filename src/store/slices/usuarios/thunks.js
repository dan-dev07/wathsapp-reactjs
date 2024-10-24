import { setUsuarios } from "./usuariosSlice"


export const startSetUsuarios =(usuarios)=>{
  return async (dispatch) =>{
    console.log(usuarios);
    dispatch(setUsuarios(usuarios));
  }
}