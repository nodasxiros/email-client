import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import client from '../../client';

interface Email {
  address: string,
}

const Dashboard: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([])
  const getEmails = async () => {
    const { data } = await client.get('/emails');
    console.log(data)
  }
  useEffect(() => {
    getEmails()
  });
  return (
    <>
      <h1 style={{color: 'black'}}>Dashboard Page</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { }
        </tbody>
      </Table>
    </>
  )
}

export default Dashboard;
