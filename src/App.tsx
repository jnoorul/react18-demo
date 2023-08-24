import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageNotFound } from './components/layout/PageNotFound';
import { Batching } from './components/batching/Batching';
import { WithTransition } from './components/concurrent/WithTransition';
import { WithDeferred } from './components/concurrent/WithDeferred';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Batching />} />
          <Route path="batching" element={<Batching />} />
          <Route path="transition" element={<WithTransition />} />
          <Route path="deferred" element={<WithDeferred />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
