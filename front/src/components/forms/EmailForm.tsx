import React, { useState, useEffect, ChangeEvent, SyntheticEvent, useRef } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import client from '../../client';
import { Email, Message } from '../../types';

type Props = {
  show: boolean
  selectedEmails: Email[]
  handleClose: () => void
  handleError: (e: string) => void
}

const EmailForm: React.FC<Props> = ({ show, selectedEmails, handleClose, handleError }) => {
  const timer = useRef<any>(null);
  const [message, setMessage] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messageInstance, setMessageInstance] = useState<Message | null>(null);

  const handleMessageChange = (e: string): void => {
    setMessage(e);
  }

  const handleSubmit = (e: SyntheticEvent): void => {
    try {
      e.preventDefault();
      setLoading(true);
      client
        .post(`/emails/send`, {
          emails: selectedEmails.map(mail => mail.address),
          message
        })
      if (messageInstance)
      client.patch(`/messages/${messageInstance.id}`, {
        isSent: true
      })
      setLoading(false);
      handleClose();
    } catch (err: any) {
      const { message: [errorMessage]} = err.response.data;
      handleError(`${err.message}: ${errorMessage}`);
      handleClose();
    }
  }

  const updateMessageInstance = () => {
    // delay request while user is typing
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (messageInstance?.id)
      client.patch(`/messages/${messageInstance.id}`, {
        message: message,
        isSent: false
      })
    }, 300)
  }

  const setInstance = (res: Message) => {
    setMessageInstance(res)
    setMessage(res.message)
    if(res.message.length && selectedEmails.length)
    setIsValid(true);
  }

  const setData = async () => {
    try {
      const { data } = await client.get('/messages/findNotSent')
      setInstance(data)
    } catch (error) {
      const { data } = await client.post(`/messages`, {
        message: message,
        isSent: false
      })
      setInstance(data)
    }
  }

  useEffect(() => {
    updateMessageInstance();
    if(message.length && selectedEmails.length)
    setIsValid(true);
  }, [message, isValid, isLoading, selectedEmails])

  // Run once to get - set record
  useEffect(() => {
    setData()
  }, [])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compose Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="text"
              readOnly
              placeholder="name@example.com"
              value={selectedEmails.map((mail: Email) => mail.address).join(', ')}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              value={message}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleMessageChange(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button disabled={!isValid}  variant="primary" type='submit' onClick={handleSubmit}>
          { isLoading ? 'Sending ' : 'Send' } { selectedEmails.length } emails
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmailForm;
