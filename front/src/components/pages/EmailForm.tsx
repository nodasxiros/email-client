import React, { useState, useEffect, ChangeEvent, SyntheticEvent, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import client from '../../client';
import { Email, } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AddEditEmailForm: React.FC = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    try {
      e.preventDefault()
      if (isEditMode && id)
      await client.patch(`/emails/${id}`, { address: email })
      else
      await client.post('/emails', { address: email })
      navigate('/dashboard');
    } catch (error: any) {
      const { message: [errorMessage]} = error.response.data;
      setError(`${error.message}: ${errorMessage}`);
    }
  }

  useEffect(() => {
    if (id && !isEditMode) {
      client
        .get(`/emails/${id}`)
        .then(({ data }) => {
          setEmail(data.address)
        })
    }
    setIsValid(Boolean(email.length && email.match(emailPattern)));
    setIsEditMode(true);
  }, [email])
  return (
    <>
      <h1 style={{color: 'black'}}>Create Email Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Form.Group>
        { error && <Alert variant={'danger'}>{error}</Alert>}
        <Button disabled={!isValid} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddEditEmailForm;
