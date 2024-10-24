import { MostrarImagen } from "./MostrarImagen";
import { MostrarDocumento } from "./mostrarDocumento/MostrarDocumento";
import { MostrarTexto } from "./MostrarTexto";

export const IncomingMessage = ({ mensaje }) => {
  if (mensaje.tipo === 'image'){
    return <MostrarImagen mensaje={mensaje}/>
  }

  if (mensaje.tipo === 'document'){
    return <MostrarDocumento mensaje={mensaje} />
  }

  return <MostrarTexto mensaje={mensaje} />
}
