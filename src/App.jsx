import Index from 'pages';
import MonsteraInfoPage from 'pages/monstera';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Index /> } />  
          <Route path="index" element={<Index /> } />  
          <Route path="monstera" element={<MonsteraInfoPage /> } />  
        </Routes>
      </Router>     
    </div>
  );
}
 
export default App;
