import { Outlet } from "react-router-dom"
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import { Row, Col } from "react-bootstrap";

const PrivateLayout = () => {
  return (
    <div>
      <main>
        <Row>
          <Col xs={3}>
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