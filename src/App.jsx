import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { ToastContainer } from 'react-toastify';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';

function App() {
  return (
    <div className="root-component">
      <ToastContainer />
      <TextInputWithFocusButton />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
