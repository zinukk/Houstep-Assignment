import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

const Router = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
