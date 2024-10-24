import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { useColumns } from './useColumns';

export const Operador = () => {
  const { misMensajes } = useSelector(state => state.mensajesReducer);
  const { columns } = useColumns();
  
  return (
    <Table
      style={{ marginTop: 5 }}
      columns={columns}
      dataSource={misMensajes}
      rowKey={(record) => record.id}
    />
  )
};
