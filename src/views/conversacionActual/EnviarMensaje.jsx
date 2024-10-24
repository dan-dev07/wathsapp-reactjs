import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { Button, Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUltimoMensajeEnviado } from '../../store/slices/paciente/pacienteSlice'
import { SendOutlined } from '@ant-design/icons';
import InputText from '../../components/InputText';
import { SocketContext } from '../../context/SocketContext';
import { CompartirArchivo } from './Compartir';
import { formatoFecha } from '../../utils/fecha';

export const EnviarMensaje = () => {
  const [mensaje, setMensaje] = useState('');
  const [archivo, setArchivo] = useState();
  const { socket } = useContext(SocketContext);
  const { user } = useSelector(state => state.userReducer);
  const params = useParams();
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    setMensaje(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (mensaje.length === 0) {
      return;
    };

    socket.emit('mensaje-enviado', {
      telefono: params.telefono,
      fecha: formatoFecha(),
      mensaje,
      leido: false,
      emisor: 'Escotel',
      user,
      tipo: "text"
    }, ultimoMensaje => {
      // console.log('ultimo mensaje', ultimoMensaje);
      if (!ultimoMensaje.err) {
        dispatch(setUltimoMensajeEnviado(ultimoMensaje));
      }
    });
    setMensaje('');
  };
  return (
    <>
      <Row  >

        <Col span={18} >
          <form onSubmit={onSubmit}>
            <InputText
              placeholder={'Mensaje...'}
              value={mensaje}
              onChange={onChange}
            />
          </form>
        </Col>
        <Col span={2}>
          <Button
            onClick={onSubmit}
            icon={<SendOutlined />}
          />
        </Col>
        <Col span={2}>
          <CompartirArchivo setArchivo={setArchivo} />
        </Col>

      </Row>

    </>

  )
}
