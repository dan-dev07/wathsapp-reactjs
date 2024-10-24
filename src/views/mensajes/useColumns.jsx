import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { SeleccionarUsuario } from './SelecccionarUsuario';
import { SocketContext } from '../../context/SocketContext';

export const useColumns = () => {
  const [actualizar, setActualizar] = useState(false);
  const { user } = useSelector(state => state.userReducer);
  const {socket} = useContext(SocketContext);
  const location = useLocation();

  const onClickLiberar =({telefono,usuario})=>{
    const data ={
      email:usuario.email,
      telefono:telefono,
      id:usuario.id 
    };
    console.log(data);  
    socket.emit('liberar-paciente-por-supervisor', data, response =>{
      console.log(response);
      if (response.ok && location.pathname === '/mensajes') {
        setActualizar(true);
      };
    });
  };

  const columns = [
    {
      title: 'Paciente',
      dataIndex: 'telefono',
      key: 'telefono',
      // ...getColumnSearchProps('telefono'),
      sorter: (a, b) => a.telefono.localeCompare(b.telefono),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Último Mensaje',
      dataIndex: 'fecha',
      key: 'telefono',
      // ...getColumnSearchProps('fechaCreacion'),
      sorter: (a, b) => dayjs(a.fecha) - dayjs(b.fecha),
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) => record.fecha
    },
    {
      title: 'Liberar',
      dataIndex: '',
      key: 'telefono',
      render: (text, record, index) => {
        return <Button onClick={()=>onClickLiberar(record)}>
          Liberar
        </Button>
      },
    },
    {
      title: 'Reasignar',
      dataIndex: '',
      key: 'telefono',
      render: (text, record, index) => {

        return <SeleccionarUsuario datos = {record} setActualizar={setActualizar} actualizar={actualizar}/>
      },
    },
  ];

  return {
    actualizar,
    columns,
    setActualizar
  }
}
