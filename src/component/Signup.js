import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import img2 from '../images/signup pic.png';
import "./Signup.css";
import { Container, Row, Col } from 'react-bootstrap'


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (

    <div>
      <Container>
        <Row> 
        <Col className="image1">
        <div>
         <img src={img2} alt= "" />
        </div>
        </Col>
        

      <Col className="signup">

        <div className="p-2 mt-4 boxes">
       
        <h1 className="mb-2"> Signup Form</h1>
        {error && <Alert variant="danger">{error}</Alert>}

        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
              Sign up
            </Button>
          </div>
        </Form>
      
      <hr />
      <div className="p-0 box text-center">
      
        Already have an account? <Link to="/">Log In</Link>
      </div>
     </div>
      </Col> 
    </Row>
  </Container>
  </div>
  );
};

export default Signup;