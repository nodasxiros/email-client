import React, { SyntheticEvent, useState, useEffect } from 'react';
import {
  Button,
  Alert,
  Form,
} from 'react-bootstrap';
import client from '../../client';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleFormChange = (field: 'email' | 'password', value: string): void => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
    }
  }

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    try {
      e.preventDefault()
      const { data: { access_token }} = await client.post(`/auth/signup`, { email, password });
      localStorage.setItem('access_token', access_token);
    } catch (error: any) {
      const { message: [errorMessage]} = error.response.data;
      setError(`${error.message}: ${errorMessage}`);
    }
  }

  useEffect(() => {
    setIsValid(Boolean(email && password));
  }, [email, password, email, password])

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleFormChange('email', e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleFormChange('password', e.target.value)}
        />
      </Form.Group>
      { error && <Alert variant={'danger'}>{error}</Alert>}
      <Button disabled={!isValid} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SignUpForm;
