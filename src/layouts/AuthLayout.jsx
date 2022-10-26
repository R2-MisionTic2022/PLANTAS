import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="mainContainer">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout