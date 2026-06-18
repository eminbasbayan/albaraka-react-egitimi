import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { ToastContainer } from 'react-toastify';
import Counter from './components/Counter';

function App() {

  return (
    <div className="root-component">
      <Counter />
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
