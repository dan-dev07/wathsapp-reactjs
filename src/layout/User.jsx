import { UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export const User = ({ collapsed }) => {
  const { user } = useSelector((state) => state.userReducer);

  if (collapsed) {
    return (
      <div style={{ textAlign: "center", fontSize: 12, marginBottom: 10 }}>
        <Tooltip title={user?.nombre}>
          <UserOutlined />
        </Tooltip>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", fontSize: 12, marginBottom: 10 }}>
      <UserOutlined /> {user?.nombre}
    </div>
  );
};
