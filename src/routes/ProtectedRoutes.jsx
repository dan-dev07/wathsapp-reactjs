import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LayoutPage } from '../layout/LayoutPage';
import { MisMensajes } from '../views/misMensajes/MisMensajes';
import { MensajesSinAsignar } from '../views/mensajesSinAsignar/MensajesSinAsignar';
import { ConversacionActual } from '../views/conversacionActual/ConversacionActual';
import { Usuarios } from '../views/usuarios/Usuarios';
import { Reportes } from '../views/reportes/Reportes';
import { Mensajes } from '../views/mensajes/Mensajes';

export const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(startRefreshToken());
    }, 30 * 60000); // 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutPage>
      <Routes>
        <Route path='/misMensajes' element={<MisMensajes />} />
        <Route path='/mensajesSinAsignar' element={<MensajesSinAsignar />} />
        <Route path='/conversacionActual/:telefono' element={<ConversacionActual />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/reportes' element={<Reportes />} />
        <Route path='/mensajes' element={<Mensajes />} />
      </Routes>
    </LayoutPage>
  )
}
