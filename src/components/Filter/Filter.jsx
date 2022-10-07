import { Label, Input, Text, Form } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return (
    <Form>
      <Label>
        <Text>Find contacts by name</Text>
        <Input type="text" name="searchName" onChange={handleFilter} />
      </Label>
    </Form>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};
