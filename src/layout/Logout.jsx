import { PoweroffOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../store/slices/auth/userSlice";

export const Logout = ({ collapsed }) => {
  const dispatch = useDispatch();

  const salir = () => dispatch(logOut());
  //
  if (collapsed)
    return (
      <div className="logout" onClick={salir}>
        <Tooltip title="Cerrar Ssión">
          <PoweroffOutlined />
        </Tooltip>
      </div>
    );

  //
  return (
    <div className="logout" onClick={salir}>
      <PoweroffOutlined /> Cerrar Sesión
    </div>
  );
};
