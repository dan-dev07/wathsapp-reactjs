
export const MostrarTexto = ({ mensaje }) => {
  return (
    <div
      className={`message ${mensaje.emisor}`}
    >
      {mensaje.mensaje}
      <div>
        <sub>{mensaje.fecha}</sub>
      </div>
    </div>
  )
}
