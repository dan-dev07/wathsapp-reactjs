import { Provider } from 'react-redux';
import { SocketProvider} from './context/SocketContext';
import {store} from './store/store';
import {AppRouter} from './routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </Provider>
  )
}

export default App
