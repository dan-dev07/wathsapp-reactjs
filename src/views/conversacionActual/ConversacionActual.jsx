import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EnviarMensaje } from './EnviarMensaje';
import { SocketContext } from '../../context/SocketContext';
import { useParams } from 'react-router-dom';
import { startSetConversacionActual } from '../../store/slices/paciente/thunks';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';

export const ConversacionActual = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.userReducer);
  const { chats } = useSelector(state => state.pacienteReducer);
  const { socket } = useContext(SocketContext);
  const { telefono } = params;

  const getMensajes = () => {
    const { email, id } = user;
    socket?.emit('conversacion-actual', { telefono, email, id }, actual => {
      dispatch(startSetConversacionActual(actual, telefono));
    });
  };

  useEffect(() => {
    getMensajes();
  }, []);

  return (
    <div className='fondo' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat Privado</h2>
        </div>
        <div className="chat-messages">
          {chats?.map((msg, index) => (
            (msg.emisor === 'Escotel')
            ? <OutgoingMessage key={`msg_${index}`} mensaje={msg} />
            : <IncomingMessage key={`msg_${index}`} mensaje={msg} />
          ))}
        </div>
        <div className="chat-input">
          <EnviarMensaje />
        </div>
      </div>
    </div>
  );
};