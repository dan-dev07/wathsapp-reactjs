import { useCallback } from 'react';
import { fetchSinToken } from '../../../api/api';
import { consLogged } from '../../../const/consLogged';
import { URL_LOGIN } from '../../../const/url';
import parseJwt from '../../../utils/parseJwt';
import { setLoadingLogin, setLogged, setLoginErr, storeUser } from './userSlice';

export const startLogin = (body) => {
  return async (dispatch) => {
    dispatch(setLoginErr(null));
    dispatch(setLoadingLogin());
    const r = await fetchSinToken("post", `${URL_LOGIN}`, {
      ...body,
    });
    if (r.ok) {
      localStorage.setItem("token", r.data.data.token);
      dispatch(storeUser(parseJwt(r.data.data.token)));
    } else {
      if (!r.response || r.response.status == 500)
        dispatch(setLoginErr("Error en servidor"));
      if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
    }
  };
};

export const startRefreshToken =() => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(setLogged(consLogged.NOTLOGGED));
        return;
      };
      const r = await fetchSinToken("POST", `${URL_LOGIN}/Refresh`, {
        token,
      });
      if (r.ok) {
        localStorage.setItem("token", r.data.data.token);
        dispatch(storeUser(parseJwt(r.data.data.token)));
        dispatch(setLogged(consLogged.LOGGED));
      } else {
        dispatch(setLogged(consLogged.NOTLOGGED));
        const token = localStorage.removeItem("token");
        if (!r.response || r.response.status == 500)
          dispatch(setLoginErr("Error en servidor"));
        if (r.response.status == 400) dispatch(setLoginErr(r.response.data));
      };
    };
  };
 