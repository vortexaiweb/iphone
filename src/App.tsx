import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ICloudInstructions from './pages/ICloudInstructions';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="icloud-instructions" element={<ICloudInstructions />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
