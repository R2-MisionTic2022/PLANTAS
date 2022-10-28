import { Outlet } from "react-router-dom"
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import { Row, Col } from "react-bootstrap";

const PrivateLayout = () => {
  return (
    <div className="mainContainer">
      <main>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </main>
      <Footer />
      
    </div>

  )
}

export default PrivateLayout