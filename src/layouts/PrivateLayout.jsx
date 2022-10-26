import { Outlet } from "react-router-dom"

const PrivateLayout = () => {
  return (
    <div className="mainContainer">
      <main>
        <Outlet />
      </main>
    </div>

  )
}

export default PrivateLayout