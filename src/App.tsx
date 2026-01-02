import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ELVision1000 from './1000';
import ELVision2000 from './2000';
import ELVision3000 from './3000';
import ELVision5000 from './5000';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/1000" element={<ELVision1000 />} />
        <Route path="/2000" element={<ELVision2000 />} />
        <Route path="/3000" element={<ELVision3000 />} />
        <Route path="/5000" element={<ELVision5000 />} />
        <Route path="/" element={<ELVision3000 />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;