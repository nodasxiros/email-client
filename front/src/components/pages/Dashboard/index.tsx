import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Alert } from 'react-bootstrap';
import client from '../../../client';
import { Email, RowProp } from '../../../types';
import EmailForm from '../../forms/EmailForm';

const TableRow: React.FC<RowProp> = ({ email, handleChange}) => {
  return (
    <tr>
      <td>
        <Form.Check 
          type='checkbox'
          onChange={() => handleChange(email)}
        />
      </td>
      <td>{ email.id }</td>
      <td>{ email.address }</td>
    </tr>
  );
}

const Dashboard: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selected, setSelected] = useState<Email[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getEmails = async () => {
    const { data } = await client.get('/emails');
    setEmails(data)
  }

  const handleSelectedChange = (e: Email) => {
    const found = selected.find(mail => mail.id === e.id);
    if (found)
      setSelected([...selected.filter(mail => mail.id !== e.id)]);
    else
      setSelected([...selected, e]);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getEmails()
  }, [selected]);

  return (
    <>
      { error && <Alert variant={'danger'}>{error}</Alert>}
      <div className='row'>
        <div className="col">
          <h1 style={{color: 'black'}}>Dashboard Page</h1>
        </div>
        <div className="col">
          <Button variant="primary" onClick={handleShow}>
            Send Email
          </Button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Email address</th>
          </tr>
        </thead>
        <tbody>
          { emails.map((email, i) => <TableRow key={i} email={email} handleChange={() => handleSelectedChange(email)}/>) }
        </tbody>
      </Table>
      <EmailForm
        show={show}
        selectedEmails={selected}
        handleClose={handleClose}
        handleError={(e) => setError(e)}
      />
    </>
  )
}

export default Dashboard;
