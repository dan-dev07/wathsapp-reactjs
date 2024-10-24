import React, { useContext, useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { fetch } from '../../../api/api';
import { urlBase } from '../../../const/url';
import { useSelector } from 'react-redux';
import { SocketContext } from '../../../context/SocketContext';

export const SeleccionarUsuario = ({datos}) => {
  const [options, setOptions] = useState([]);
  const {user} = useSelector(state => state.userReducer);
  const [usuarios, setUsuarios] = useState([]);
  const {socket} = useContext(SocketContext);
  
  const handleChange = (value) => {
    const nuevoUsuario = usuarios.find(u=>u.email === value);
    const data = {
      telefono:datos.telefono,
      nuevoUsuario:{
        nombre:nuevoUsuario.nombre,
        email:nuevoUsuario.email,
        id:nuevoUsuario.id
      },
      anteriorUsuario:{
        nombre:user.nombre,
        email:user.email,
        id:user.id
      }
    };
    socket.emit('reasignar-paciente', data);
  };
  
  const getUsers = async()=>{
    const resp = await fetch('GET', `${urlBase}/api/Usuarios`);
    return resp;
  };

  useEffect(() => {
    const opc = async () => {
      const resp = await getUsers();
      if (!resp.ok) {
        return;
      }
      const { data } = resp;
      const a = [];
      const arr = data.filter(a => (a.rol.includes("Operador") && (a.activo === true)) || a.rol.includes("Supervisor") && (a.activo === true));
      let aux = arr.map(o => {
          return {
            value: o.email,
            label: o.nombre
        }
      });
      setUsuarios(resp.data);
      setOptions(aux);
    };
    opc();
  }, []);
  
  return (
  <Space wrap>
    <Select
      style={{
        width: 120,
      }}
      defaultValue={{label:user.nombre}}
      onChange={handleChange}
      options={options}
    />
    
  </Space>
)};