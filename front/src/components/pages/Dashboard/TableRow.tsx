import React, { useState, useEffect } from 'react';
import { Form, ButtonGroup, Button, } from 'react-bootstrap';
import { RowProp, } from '../../../types';
import { NavLink } from 'react-router-dom';
import client from '../../../client';

const TableRow: React.FC<RowProp> = ({ email, handleChange, handleListChange}) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const handleDeleteRecord = async (id: number) => {
    try {
      setLoading(true)
      await client.delete(`/emails/${email.id}`)
      handleListChange()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {

  },[isLoading])
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
      <td>
        <ButtonGroup>
          <Button variant="warning">
            <NavLink to={`/dashboard/emails/${email.address}`} className="link">
              Edit
            </NavLink>
          </Button>
          <Button disabled={isLoading} variant="danger" onClick={() => handleDeleteRecord(email.id)}>
            { isLoading ? 'Deleting...' : 'Delete' }
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default TableRow;
