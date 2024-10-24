import { useSelector } from 'react-redux';
import { useColumns } from './useColumns';
import { Table } from 'antd';

export const Supervisor = () => {
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
}
