import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { getItem } from "./getItem";
import { Menu } from "antd";
import { useEffect, useState } from "react";

export const MenuLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userReducer);
  const [items, setItems] = useState([]);
  
  const Operador = [
    getItem("Sin Asignar", "/mensajesSinAsignar", <DesktopOutlined />),
    getItem("Mis mensajes", "/misMensajes", <DesktopOutlined />),
  ]
  const Supervisor = [
    getItem("Todos los mensajes", "/mensajes", <DesktopOutlined />),
  ]
  const Admin = [
    getItem("Usuarios", "/usuarios", <DesktopOutlined />),
    getItem("Reportes", "/reportes", <DesktopOutlined />),  
  ];

  useEffect(() => {
    let itemUser = [];
    if (user.rol.includes("Operador")) {
      itemUser = [...itemUser, ...Operador];
    };
    if (user.rol.includes("Supervisor")) {
      itemUser = [...itemUser, ...Supervisor];
    };
    if (user.rol.includes("Admin")) {
      itemUser = [...itemUser, ...Admin];
    };
    setItems(itemUser);
  }, [user]);
  
  const menuClick = ({ key }) => {
    navigate(key);
  };
  
  return (
    <Menu
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      onClick={menuClick}
    />
  );
};
