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
    <div className="h-screen text-main-dark dark:text-main-light bg-main-light dark:bg-main-dark transition-colors duration-700 relative pt-18 md:pt-20 flex xl:pl-[6.375rem] xl:pt-0">
      <Sidebar />
      <div className="w-full px-6 pt-8 md:pt-14 md:px-12 xl:pt-18 xl:px-0 max-w-[45.625rem] flex-col items-center justify-center my-0 mx-auto">
        {routes}
      </div>
    </div>
  );
};

export default App;
