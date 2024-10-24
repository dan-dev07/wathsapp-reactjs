import { useContext, useEffect, useState } from 'react'
import { urlBase } from '../../const/url';
import { fetch } from '../../api/api';
import { useColumns } from './useColumns';
import { Divider, Table } from 'antd';
import { useSelector } from 'react-redux';
import { SocketContext } from '../../context/SocketContext';

export const Mensajes = () => {
  const { columns, actualizar, setActualizar } = useColumns();
  const { sinAsignar } = useSelector(state => state.mensajesReducer);
  const [usuarios, setUsuarios] = useState([]);
  const {socket} = useContext(SocketContext);

  const getUsers = async () => {
    const resp = await fetch('GET', `${urlBase}/api/datos/allMessages`);
    return resp;
  };
  useEffect(() => {
    const allUsers = async () => {
      const users = await getUsers();
      if (!users.ok) {
        return;
      };
      setUsuarios(users.data);
      setActualizar(false);
    };
    allUsers();
  }, [actualizar]);

  useEffect(() => {
    socket?.on('actualizar-ventana', (data)=>{
      if (data.todosLosMensajes) {
        setActualizar(true);
      }
    });
  }, [socket]);

  console.log(usuarios);
  return (
    <>
      <Table
        style={{ marginTop: 5 }}
        columns={columns}
        dataSource={usuarios}
        rowKey={(record) => record.telefono}
      />
    </>
  )
}


