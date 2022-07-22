import { Form, } from 'react-bootstrap';
import { RowProp, } from '../../../types';

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