import { List, Item } from './ContactList.styled';
import { Contact } from 'components/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </Item>
      ))}
    </List>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
