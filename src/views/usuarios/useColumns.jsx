import { Button, Switch } from 'antd';
import { useContext, useState } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { EditOutlined } from '@ant-design/icons';
import { ModalActualizar } from './modalActualizar/ModalActualizar';


export const useColumns = () => {
  const {socket} = useContext(SocketContext);
  const [open, setOpen] = useState(false);
  const [actualizarEstado, setActualizarEstado] = useState(false);
  const [editarUsuario, setEditarUsuario] = useState({});
  
  const onChange = (checked, {email}) => {
    console.log('checked',checked);
    socket.emit('cambiar-estado',{activo:checked, email}, resultado =>{
      if (resultado.ok) {
        setActualizarEstado(resultado.ok);
      };
    });
  };

  const handleEdit =(data)=>{
    setOpen(true);
    setEditarUsuario(data);
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'id',
      sorter: (a, b) => a.nombre.localeCompare(b.nombre),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'id',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Roles',
      dataIndex: 'rol',
      key: 'id',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Activo',
      dataIndex: 'activo',
      key: 'id',
      sortDirections: ['descend', 'ascend'],
      render:(data,record,index)=>{
        return <Switch defaultValue={data} onChange={(e)=>onChange(e, record)} />
      }
    },
    {
      title: 'Editar',
      dataIndex: 'email',
      key: 'id',
      sortDirections: ['descend', 'ascend'],
      render:(data,record,index)=>{

        return  <Button onClick={()=>{
                  handleEdit(record);
                }}>
                  <EditOutlined />
                </Button>
      }
    },
  ];
  return {
    actualizarEstado,
    columns,
    editarUsuario,
    open,
    setEditarUsuario,
    setOpen,
  }
}
