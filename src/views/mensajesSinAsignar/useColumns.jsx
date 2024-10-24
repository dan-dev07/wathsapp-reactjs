import { useContext } from 'react';
import { WechatFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { SocketContext } from '../../context/SocketContext';

export const useColumns = () => {
  const {user} = useSelector(state => state.userReducer);
   const {socket} = useContext(SocketContext);

  const onClick = (datos) => {
    const datosPost ={
      ...datos,
      nombre: user.nombre,
      email:user.email,
      id:user.id,
      ultimaComunicacion:'',
      leido:false,
    };
    socket.emit('paciente-asignado', datosPost);
  }

  const columns = [
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
      key: 'telefono',
      // ...getColumnSearchProps('telefono'),
      sorter: (a, b) => a.telefono.localeCompare(b.telefono),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Mensaje',
      dataIndex: 'mensaje',
      key: 'telefono',
      // ...getColumnSearchProps('email'),
      sorter: (a, b) => a.mensaje.toLowerCase().localeCompare(b.mensaje.toLowerCase()),
      sortDirections: ['descend', 'ascend'],

    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      // ...getColumnSearchProps('fechaCreacion'),
      sorter: (a, b) => dayjs(a.fecha) - dayjs(b.fecha),
      sortDirections: ['descend', 'ascend'],
      render:(text, record, index)=>record.fecha,
      
    },
    {
      title: 'Asignar',
      dataIndex: '',
      key: 'id',
      render:(text,record, index)=>{
        return  <span 
                  style={{cursor:'pointer', display:'flex', justifyContent:'center', gap:5}}
                  onClick={()=>{
                    onClick(record);
                  }} >
                    <WechatFilled style={{fontSize:20, }}/>
                    Asignar
                  </span>
      },
      
    },
  ];

  return { 
    columns,
  }
}
