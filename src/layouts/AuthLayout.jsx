import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const AuthLayout = () => {
  return (
    <div className="authContainer">
      <Outlet />
      <Footer />
    </div>
  )
}

export default AuthLayout