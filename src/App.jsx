import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App
