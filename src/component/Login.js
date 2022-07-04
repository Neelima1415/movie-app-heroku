import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import img1 from '../images/login pic.png';
import "./Login.css";
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
   


  return (
   

  <div>
    
    <Container>
      <Row>
      <Col className="image" xs={12}>
        <div>
         <img src={img1} alt=""  /> 
      </div> 
      </Col>

     <Col className="login" xs={12}>
     {/* mt-4 */}
      <div className="p-4 box">

        <h1 className="mb-4"> Login Form </h1>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          
       
        <div className="forgot-password text-right">
            <Link to={'/forgot'}>Forgot password? </Link>
        </div>
        
      </Form>
     <hr />

    <div className="p-1 box text-center">
        
      Don't have an account? <Link to="/signup">Sign up</Link>

    </div>
   
      </div>
    </Col>
    </Row>
  </Container>
  </div>
  );

};

export default Login;