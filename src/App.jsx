import {Routes, Route} from "react-router-dom";
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from "layouts/AuthLayout";
import Login from 'pages/login';
import Registro from 'pages/registro';
import Index from 'pages/index';
import MonsteraInfoPage from 'pages/monstera';
import SansevieriaInfoPage from 'pages/sansevieria';
import Admin from 'pages/admin/admin';
import Clientes from 'pages/admin/clientes';
import Productos from 'pages/admin/productos';
import NotFound from "pages/notFound";
import 'styles/App.css';


function App() {
  return (
      <Routes>
        <Route path="/" element={<PublicLayout />} >
          <Route index element={<Index />} />
          <Route path="index" element={<Index /> } />  
          <Route path="monstera" element={<MonsteraInfoPage /> } />  
          <Route path="sansevieria" element={<SansevieriaInfoPage /> } />
        </Route>
        <Route element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro /> } />
        </Route>
        <Route element={<PrivateLayout />} >
          <Route path="admin" element={<Admin />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="productos" element={<Productos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
 
export default App;
