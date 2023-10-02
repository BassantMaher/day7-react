import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      username: '',
      validationErrors: {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        username: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, confirmPassword, username } = this.state;
    let isValid = true;
    const validationErrors = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      username: '',
    };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.match(emailPattern)) {
      validationErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Name validation
    if (!name) {
      validationErrors.name = 'Please enter your name';
      isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || !password.match(passwordPattern)) {
      validationErrors.password =
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Username validation (no spaces)
    if (!username || username.includes(' ')) {
      validationErrors.username = 'Username cannot contain spaces';
      isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
      // Perform your signup logic here
      console.log('Signup successful');
    }

    this.setState({ validationErrors });
  };

  render() {
    const { email, name, password, confirmPassword, username, validationErrors } = this.state;

    return (
      <div className="container">
        <h2>Sign Up</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              isInvalid={!!validationErrors.email}
            />
            <Form.Control.Feedback type="invalid">{validationErrors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              isInvalid={!!validationErrors.name}
            />
            <Form.Control.Feedback type="invalid">{validationErrors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              isInvalid={!!validationErrors.password}
            />
            <Form.Control.Feedback type="invalid">{validationErrors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              isInvalid={!!validationErrors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">{validationErrors.confirmPassword}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              isInvalid={!!validationErrors.username}
            />
            <Form.Control.Feedback type="invalid">{validationErrors.username}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
