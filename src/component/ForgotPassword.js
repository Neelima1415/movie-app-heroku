import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import img3 from "../images/forgotPassword pic.png";
import { Container, Row, Col } from "react-bootstrap";
import "./ForgotPassword.css";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("email was sent");
    } catch (error) {
      toast.error("failed to reset");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="image3">
            <img src={img3} alt="" />
          </div>

          <Col className="forgot">
            <div className="p-2 mt-4 boxes">
              <h1 className="mb-2"> Forgot Password </h1>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p>Please enter your email</p>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={onChange}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Reset Password
                  </Button>
                </div>
              </Form>
              <hr />

              <div className="p-2 box text-center">
                <Link to="/"> Login? </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgotPassword;
