import Index from 'pages';
import MonsteraInfoPage from 'pages/monstera';
import SansevieriaInfoPage from 'pages/sansevieria';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'styles/App.css';
import Layout from 'layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index /> } />  
            <Route path="index" element={<Index /> } />  
            <Route path="monstera" element={<MonsteraInfoPage /> } />  
            <Route path="sansevieria" element={<SansevieriaInfoPage /> } />  
          </Routes>
        </Layout>
      </Router>     
    </div>
  );
}
 
export default App;
