import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
import {consLogged} from '../const/consLogged';

export const PublicRoute = ({children}) => {
  const {logged} = useSelector(state => state.userReducer);
  return logged !== consLogged.LOGGED ? children : <Navigate to="/mensajesSinAsignar" />;
}
