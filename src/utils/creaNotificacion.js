

export const creaNotificacion = (type, content) => {

  return {
    
      type,
      content,
      date: Date.now()
  }
}
