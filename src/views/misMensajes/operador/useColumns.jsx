import React, { useContext } from 'react';
import { MessageOutlined, WechatFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startSetConversacionActual } from '../../../store/slices/paciente/thunks';
import { Button } from 'antd';
import { SocketContext } from '../../../context/SocketContext';

export const useColumns = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();

  const onClick = (datos) => {
    dispatch(startSetConversacionActual(datos.mensajes));
    navigate(`/conversacionActual/${datos.telefono}`);
  };

  const onClickLiberar =(record)=>{
    const data ={
      email:user.email,
      telefono:record.telefono
    };
    socket.emit('liberar-paciente', data);
  };

  const columns = [
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
      key: 'id',
      // ...getColumnSearchProps('telefono'),
      sorter: (a, b) => a.telefono.localeCompare(b.telefono),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Ultimo Mensaje',
      dataIndex: 'mensaje',
      key: 'id',
      // ...getColumnSearchProps('email'),
      sorter: (a, b) => a.mensaje.toLowerCase().localeCompare(b.mensaje.toLowerCase()),
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) => {
        // console.log(record);

        return <>
          <div>
            {record.mensaje}
            {!record.leido && <sup><MessageOutlined size={5} /></sup>}
          </div>
        </>

      }
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      // ...getColumnSearchProps('fechaCreacion'),
      sorter: (a, b) => dayjs(a.fecha) - dayjs(b.fecha),
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) => record.fecha
    },
    {
      title: 'Conversar',
      dataIndex: '',
      key: 'id',
      render: (text, record, index) => {
        return <span
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: 5 }}
          onClick={() => {
            onClick(record);
          }} >
          <WechatFilled style={{ fontSize: 20 }} />
          Conversar
        </span>
      },

    },
    {
      title: 'Liberar',
      dataIndex: '',
      key: 'id',
      render: (text, record, index) => {
        return <Button onClick={()=>onClickLiberar(record)}>
          Liberar
        </Button>
      },
    },
  ];

  return {
    columns,
  }
}
