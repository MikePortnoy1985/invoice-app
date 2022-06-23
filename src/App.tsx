import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import InvoiceList from './pages/InvoicesList';
import InvoiceOverview from './pages/InvoiceOverview';

const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <InvoiceList />,
    },
    {
      path: ':id',
      element: <InvoiceOverview />,
    },
  ]);

  return (
    <div className="h-screen text-main-dark dark:text-main-light bg-main-light dark:bg-main-dark transition-colors duration-700 relative pt-18 flex">
      <Sidebar />
      {routes}
    </div>
  );
};

export default App;
