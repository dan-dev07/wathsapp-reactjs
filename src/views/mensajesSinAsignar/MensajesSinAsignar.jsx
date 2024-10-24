import { useSelector } from 'react-redux';
import { Table } from "antd";
import { useColumns } from './useColumns';

export const MensajesSinAsignar = () => {
  const { sinAsignar } = useSelector(state => state.mensajesReducer);
  const { columns } = useColumns(); 

  return (
    <Table
      style={{ marginTop: 5 }}
      columns={columns}
      dataSource={sinAsignar}
      rowKey={(record) => record.id}
    />
  )
}
