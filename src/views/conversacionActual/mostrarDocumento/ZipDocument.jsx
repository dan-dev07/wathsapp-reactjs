import { DownloadOutlined, FileZipOutlined } from "@ant-design/icons";
import { handleDownload } from "../../../utils/descargaArchivo";
import { Button } from "antd";

export const ZipDocument = ({ mensaje }) => {
  const {urlDocumento, tipo, filename} = mensaje;
  const [telefono,nombreDoc] = urlDocumento.split("/");
  
  return (
    <div className={`message ${mensaje.emisor}`}
      style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        className="file"
        style={{ display: 'flex', justifyContent: 'center' }}
        onClick={()=>handleDownload(urlDocumento, tipo, filename)}
      >
        <FileZipOutlined style={{ fontSize: '50px' }} />
        <DownloadOutlined style={{ fontSize: '25px' }} />
      </Button>
      <p>{nombreDoc}</p>
      <sub>{mensaje.fecha}</sub>
    </div>
  )
};