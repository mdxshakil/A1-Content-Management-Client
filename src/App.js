import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './LAYOUT/routes';
import store from './R E D U X/store';

function App() {
  return (
    <div>
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
    </div>
  );
}

export default App;
