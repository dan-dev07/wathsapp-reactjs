import React, { createContext, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useSocket } from '../hooks/useSockets';
import { startObtenerMensajesSinAsignar, startObtenerMisMensajes } from '../store/slices/mensajes/thunks';
import { setUltimoMensajeEnviado, setUltimoMensajeRecibido } from '../store/slices/paciente/pacienteSlice';

export const SocketContext = createContext();

export const SocketProvider =({children})=>{
  const dispatch = useDispatch();
  const {logged, user} = useSelector(state =>state.userReducer);
  const {online, socket, conectarSocket, desconectarSocket} = useSocket('https://wa-server-89ee8ef461d4.herokuapp.com');
  // const {online, socket, conectarSocket, desconectarSocket} = useSocket('http://localhost:3000');

  useEffect(() => {
    if (logged === 'logged') {
      console.log('logged');
      conectarSocket();
    };
  }, [logged, conectarSocket]);

  useEffect(() => {
      if ( logged === 'not logged') {
      desconectarSocket();
    }
  }, [logged, desconectarSocket]);

  //Escuchar los desde la ruta de crearMensajes
  useEffect(() => {
    socket?.on('mensajes-sinAsignar', (mensajes)=>{
      dispatch(startObtenerMensajesSinAsignar(mensajes));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('mis-mensajes', data => {
        dispatch(startObtenerMisMensajes(data));
      });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('archivo-enviado', data => {
        console.log(data);
        dispatch(setUltimoMensajeEnviado(data));
      });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('mensaje-recibido', (data)=>{
      dispatch(setUltimoMensajeRecibido(data.ultimo));
    });
  }, [socket, dispatch]);

  return(
    <SocketContext.Provider value={{socket, online}} >
      {children}
    </SocketContext.Provider>
  );
};