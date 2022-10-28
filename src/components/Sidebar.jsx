import {Link } from "react-router-dom";
import {CDBSidebar, CDBSidebarContent,CDBSidebarHeader, CDBSidebarMenu,CDBSidebarMenuItem}
from 'cdbreact';

const Sidebar = () => {
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="white" backgroundColor="#B88FDF">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <Link className="text-decoration-none" style={{ color: 'inherit' }} to="index">Administración</Link>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                    <Link to="/admin/clientes"activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Clientes</CDBSidebarMenuItem>
                    </Link>
                    <Link to="/admin/productos"activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="shopping-cart">Productos</CDBSidebarMenuItem>
                    </Link>

                </CDBSidebarMenu>
        </CDBSidebarContent>
          
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;