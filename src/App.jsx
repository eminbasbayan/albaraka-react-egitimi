import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="root-component">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
