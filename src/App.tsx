import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageNotFound } from './components/layout/PageNotFound';
import { Batching } from './components/batching/Batching';
import { Concurrent } from './components/concurrent/Concurrent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Batching />} />
          <Route path="batching" element={<Batching />} />
          <Route path="concurrent" element={<Concurrent />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
