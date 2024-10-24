import { Button, message, Space } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotificacion } from '../store/slices/notificacion/notificacionSlice';

export const Notificacion = () => {
  const {notificacion} = useSelector(state => state.notificacionReducer)
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (notificacion.type === 'success') {
      messageApi.open({
        type: 'success',
        content: notificacion.content,
      });   
    }
    if (notificacion.type === 'error') {
      messageApi.open({
        type: 'error',
        content: notificacion.content,
      });      
    }
    // messageApi.success('Bievenido');
  }, [notificacion.date]);

    return (
      <>
        {contextHolder} 
      </>
    )
  }
