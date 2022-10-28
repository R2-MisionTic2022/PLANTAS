import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const AuthLayout = () => {
  return (
    <div className="mainContainer">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AuthLayout