import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { consLogged } from "../const/consLogged";
import { startRefreshToken } from "../store/slices/auth/thunks";
import { Login } from "../views/login/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";

export const AppRouter = () => {
  const { logged } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //Ejecuta la primera vez que carga la app
  useEffect(() => {
    dispatch(startRefreshToken());
  }, []);

  if (logged === consLogged.STARTING) return <></>

  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute >
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute >
              <ProtectedRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
