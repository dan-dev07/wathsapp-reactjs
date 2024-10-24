import React, { useEffect, useState } from 'react'
import { fetch } from '../../api/api';
import { urlBase } from '../../const/url';

export const MostrarImagen = ({mensaje}) => {
  const [imagen, setImagen] = useState('');
  const {urlDocumento, tipo } = mensaje;
  
  const getImagen = async () => {
    const body = {urlDocumento, tipo};
    const imgRes = await fetch('POST', `${urlBase}/api/media` , body);
    if (imgRes.ok) {
      return imgRes.data;
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      const imagen = await getImagen();
      setImagen(imagen.image); // Ahora guardas el resultado en el estado
    };
  
    fetchImage();

  }, []);

  return (
    <div className={`message ${mensaje.emisor}`}>
      <img 
        style={{ width: '250px', height: '250px', }} 
        src={imagen} 
      />
      <div>
        <sub>{mensaje.fecha}</sub>
      </div>
    </div>
  )
};