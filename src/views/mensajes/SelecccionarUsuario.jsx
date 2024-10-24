import React, { useContext, useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { fetch } from '../../api/api';
import { urlBase } from '../../const/url';
import { SocketContext } from '../../context/SocketContext';
import { useSelector } from 'react-redux';

export const SeleccionarUsuario = ({ datos, actualizar }) => {
  const [options, setOptions] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const { sinAsignar } = useSelector(state => state.mensajesReducer);
  const { socket } = useContext(SocketContext);

  const handleChange = (value) => {
    const nuevoUsuario = usuarios.find(u => u.email === value);
    const data = {
      telefono: datos.telefono,
      nuevoUsuario: {
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        id: nuevoUsuario.id
      },
      anteriorUsuario: {
        nombre: datos.usuario.nombre,
        email: datos.usuario.email,
        id: datos.usuario.id
      }
    };
    socket.emit('reasignar-paciente-por-supervisor', data);
  };

  const getUsers = async () => {
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
  }, [sinAsignar]);

  return (
    <Space wrap>
      <Select
        style={{
          width: 120,
        }}
        defaultValue={datos.usuario.nombre !== '' ? { label: datos.usuario.nombre } : { label: '' }}
        onChange={handleChange}
        options={options}
      />

    </Space>
  )
};