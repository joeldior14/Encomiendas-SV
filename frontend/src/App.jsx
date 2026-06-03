import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './views/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Aquí agregaremos más rutas luego, como /cliente o /admin */}
      </Routes>
    </Router>
  );
}

export default App;