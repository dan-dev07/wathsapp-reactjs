import { useState, useEffect } from "react";
import { Table } from "antd";
import { fetch } from "../../api/api";
import { urlBase } from "../../const/url";
import { useColumns } from "./useColumns";
import { UsuariosHeader } from "./UsuariosHeader";
import { ModalActualizar } from "./modalActualizar/ModalActualizar";


export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [actualizar, setActualizar] = useState(false);
  const { columns, actualizarEstado, open, setOpen, editarUsuario } = useColumns();
  console.log(editarUsuario);

  const getUsers = async () => {
    const resp = await fetch('GET', `${urlBase}/api/Usuarios`);
    return resp;
  };

  useEffect(() => {
    const usuarios = async () => {
      const users = await getUsers();
      if (!users.ok) {
        return;
      };
      setUsuarios(users.data);
    };
    usuarios();
  }, [actualizar, actualizarEstado]);
  
  return (
    <>
      <UsuariosHeader setActualizar={setActualizar}/>
      <Table
        style={{ marginTop: 5 }}
        columns={columns}
        dataSource={usuarios}
        rowKey={(record) => record.id}
      />      
    </>
  );
};