import React, { useMemo, useEffect, useState, useCallback } from 'react';

import { io } from 'socket.io-client';

export const useSocket = (serverPath) => {
  // const socket = useMemo(() => io(serverPath), [serverPath]) ;
  const [online, setOnline] = useState(false);
  const [socket, setSocket] = useState(null);

  const conectarSocket =
    useCallback(() => {
      const token = localStorage.getItem('token');
      const socketTemp = io.connect(serverPath, {
        transport: 'websocket',
        autoConnect: true,
        forceNew: true,
        query: {
          'auth': token,
        },
      });
      setSocket(socketTemp);
    }, [serverPath]
    );

  const desconectarSocket =
    useCallback(() => {
      socket?.disconnect();
    }, [socket]);


  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket,
  }
}
