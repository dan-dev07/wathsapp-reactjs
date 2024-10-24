import { PlusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { ModalAgregar } from "./modalAgregar/ModalAgregar"
import { useState } from "react"


export const UsuariosHeader = ({setActualizar}) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={() => setOpen(true)} >
        Usuario
        <PlusCircleOutlined />
      </Button>
      <ModalAgregar open={open} setOpen={setOpen} setActualizar={setActualizar}/>
    </div>
  )
}
