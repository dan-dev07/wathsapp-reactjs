import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'

export const ChatItem = ({c}) => {

  if (c.emisor === 'Escotel')
    return (<OutgoingMessage key={c.fecha}>{c.mensaje}</OutgoingMessage>)
  
  return <IncomingMessage key={c.fecha}>{c.mensaje}</IncomingMessage>
}
