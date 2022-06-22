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
    <div className="h-screen bg-main-light dark:bg-main-dark relative">
      <Sidebar />
      {routes}
    </div>
  );
};

export default App;
