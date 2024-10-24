import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'antd';
import { fetch } from '../../../api/api';
import { useSelector } from 'react-redux';
import { urlBase } from '../../../const/url';


export const ModalCargar = ({ open, setOpen }) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useSelector(state => state.userReducer);
  const { telefono } = useParams();

  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCarga = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('telefono', telefono);
    formData.append('messaging_product', 'whatsapp');
    formData.append('email', user.email);
    formData.append('idUser', user.id);

    try {
      const response = await fetch('POST', `${urlBase}/api/media/carga`, formData, 'multipart/form-data');
      // const response = await fetch('POST', 'http://localhost:3000/api/media/carga', formData, 'multipart/form-data');
      if (response.ok) {

      } else {
        alert('Error al subir el archivo');
      };

    } catch (error) {
      console.log(error);
    };
  };
  return (
    <>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form onSubmit={handleCarga}>
          <h2>Compartir Archivo</h2>
          <input type="file" onChange={handleFileChange} required />
          <button type='submit'> Cargar archivo </button>
        </form>
      </Modal>
    </>
  );
};