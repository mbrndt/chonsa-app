import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./pages.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();

  return (
    <div>
      <div className="signin-outline">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {/* email */}
            <Form>
              <Form.Group id="e-mail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            </Form>
            {/* password */}
            <Form>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
            </Form>
            {/* password conf */}
            <Form>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfRef} required />
              </Form.Group>
              <Button className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
            {/*  */}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Alreay have an account? Log In
        </div>
      </div>
      <div className="empty-space"></div>
    </div>
  );
}

export default SignUp;
