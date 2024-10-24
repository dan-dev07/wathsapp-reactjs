import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../store/slices/auth/thunks";
import { Alert, Button, Input } from "antd";
import logo from '../../assets/LogoFull.png'

export const Login = () => {
  const dispatch = useDispatch();
  const { loginErr, loadingLogin } = useSelector((state) => state.userReducer);
  const [data, setData] = useState({});

  const changeData = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const formSubmit = () => dispatch(startLogin(data));

  const isDiabled = () => {
    if (!data.email || !data.password || loadingLogin) return true;
    return false;
  };
  
  return (
    <div className="Login_loginPage">
      <div className="Login_loginCaja">
        <div className="Login_cajaLogo">
          <img className="Login_logo" src={logo} />
        </div>
        <div className="Login_input">
          <Input
            autoComplete="none"
            onChange={changeData}
            name="email"
            value={data.email}
            placeholder="user@aa.com"
          />
        </div>
        <div className="Login_input">
          <Input.Password
            onChange={changeData}
            name="password"
            value={data.password}
            placeholder="password"
          />
        </div>
        <div className="Login_submit">
          <Button
            loading={loadingLogin}
            disabled={isDiabled()}
            onClick={formSubmit}
            type="primary"
          >
            Login
          </Button>
        </div>
        <div className="Login_input" style={{ height: 45 }}>
          {loginErr && <Alert type="error" message={loginErr} />}
        </div>
      </div>
    </div>
  );
}
