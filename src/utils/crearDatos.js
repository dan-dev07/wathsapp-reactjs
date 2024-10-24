export const crearDatosActualizar = (target, activo) => { 
  const nuevoEstado = {...activo, [target.name]:target.value};
  return nuevoEstado;
}