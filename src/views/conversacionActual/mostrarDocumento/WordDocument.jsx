import { DownloadOutlined, FilePdfOutlined, FileWordOutlined } from "@ant-design/icons";
import {Button} from 'antd';
import { handleDownload } from "../../../utils/descargaArchivo";

export const WordDocument = ({ mensaje }) => {
  const {urlDocumento, tipo, filename} = mensaje;
  const [nombreDoc] = urlDocumento.split("/");
  
  return (
    <div className={`message ${mensaje.emisor}`}
      style={{ display: 'flex', flexDirection: 'column' }}>
      <Button 
        className="file"
        style={{ display: 'flex', justifyContent: 'center' }}
        onClick={()=>handleDownload(urlDocumento, tipo, filename)}
      >
        <FileWordOutlined style={{ fontSize: '50px' }} />
        <DownloadOutlined style={{ fontSize: '25px' }} />
      </Button>
      <p>{nombreDoc}</p>
      <sub>{mensaje.fecha}</sub>
    </div>
  )
};