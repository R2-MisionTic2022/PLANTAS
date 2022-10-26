import { Outlet, Link } from "react-router-dom"

const Admin = () => {
  return (
    <div>
      <span>Página administración del sitio</span>
      <ul>
        <li>
          <Link to="clientes">Administración de clientes</Link>
        </li>
        <li>
          <Link to="productos">Administración de productos</Link>
        </li>
      </ul>
    <Outlet />
    </div>
  )
}

export default Admin