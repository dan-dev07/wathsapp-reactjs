import { MostrarDocumento } from "./mostrarDocumento/MostrarDocumento";
import { MostrarImagen } from "./MostrarImagen";
import { MostrarTexto } from "./MostrarTexto";

export const OutgoingMessage = ({mensaje}) => {
  if (mensaje.tipo === 'image'){
    return <MostrarImagen mensaje={mensaje}/>
  }

  if (mensaje.tipo === 'document'){
    return <MostrarDocumento mensaje={mensaje} />
  }

  return <MostrarTexto mensaje={mensaje} />
}
