import { RouterProvider } from 'react-router';
import router from './routes/routes';

function App() {
  return (
    <div className="root-component">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
