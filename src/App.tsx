import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ELVision3000 from './usa_3000';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ELVision3000 />} />
      </Routes>
    </Router>
  );
}

export default App;