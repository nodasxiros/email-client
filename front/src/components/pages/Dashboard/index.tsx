import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Alert, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import client from '../../../client';
import { Email, RowProp } from '../../../types';
import EmailForm from '../../forms/EmailForm';
import TableRow from './TableRow'

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
          <NavLink to="emails/create">
            <Button variant="primary">
              Create Email
            </Button>
          </NavLink>
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
          { emails.map((email, i) => <TableRow key={i} email={email} handleChange={() => handleSelectedChange(email)} handleListChange={getEmails} />) }
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
