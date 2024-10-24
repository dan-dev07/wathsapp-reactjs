import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export const LabelCargaFile = ({ label, onClickCarga, punteado }) => {
  return (
    <>
      <div className="label">
        <span style={punteado && { borderBottom: "2px dotted orange" }}>
          {label}
        </span>
      </div>
      <div className="valor">
        <Button onClick={onClickCarga} size="small" type="link">
          <UploadOutlined /> Subir Pago
        </Button>
      </div>
    </>
  );
};
