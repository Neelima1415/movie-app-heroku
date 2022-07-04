import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import SeatPicker from "./component/SeatPicker";
//  style={{ width: "1500px" }}
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Picker"
                element={
                  <ProtectedRoute>
                    <SeatPicker />
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
