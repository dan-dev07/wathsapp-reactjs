import { useSelector } from 'react-redux';
import { Operador } from './operador/Operador';
import { Supervisor } from './supervisor/Supervisor';

export const MisMensajes = () => {
  const {user} = useSelector(state => state.userReducer);
  if (user.rol.includes('Supervisor')) {
    return <Supervisor />
  }
  return <Operador />
}
