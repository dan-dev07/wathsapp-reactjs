import React, { useState } from 'react'
import { PaperClipOutlined } from '@ant-design/icons';
import { ModalCargar } from './modalCargar/modalCarga';

export const CompartirArchivo = ({setArchivo}) => {

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div style={{}}>
      <button onClick={handleModal}><PaperClipOutlined /></button>
      <ModalCargar open={open} setOpen={setOpen} setArchivo={setArchivo}/>
    </div>
  )
}
