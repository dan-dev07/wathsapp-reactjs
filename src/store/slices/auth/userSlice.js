import { createSlice } from "@reduxjs/toolkit";
import { consLogged } from "../../../const/consLogged";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    logged: consLogged.STARTING,
    loginErr: null,
    loadingLogin: false,
    checking:true,
    user: {
      nombre: "Patrik Reyes",
      email:"",
      id:"",
      rol:[],
    }
  },
  reducers: {
    setLoginErr: (state, action) => {
      state.loginErr = action.payload;
      state.loadingLogin = false;
      state.checking = false;
    },
    setLoadingLogin: (state) => {
      state.loadingLogin = true;
    },
    setLogged: (state, { payload }) => {
      state.logged = payload;
      state.checking = false;
    },
    storeUser: (state, { payload }) => {
      state.user = payload;
      state.loadingLogin = false;
      state.logged = consLogged.LOGGED;
      state.checking = false;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.logged = consLogged.NOTLOGGED;
    }
  },
});

export const { setLoginErr, setLoadingLogin, setLogged, storeUser, logOut, setToken } =
  userSlice.actions;
