import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes, { arrayOf } from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Phonebook, Title, Subtitle, Wrapper, ErrorMessage } from 'App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = values => {
    const { contacts } = this.state;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === values.name.toLowerCase()) {
        return toast.error(`${contact.name} is already in contacts`, {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    this.setState(prevState => {
      return {
        contacts: [
          { id: nanoid(), name: values.name, number: values.number },
          ...prevState.contacts,
        ],
      };
    });
  };

  deleteContact = e => {
    const { contacts } = this.state;
    const buttonId = e.target.dataset.id;

    const filterContacts = contacts.filter(contact => buttonId !== contact.id);
    this.setState({ contacts: [...filterContacts] });
  };

  handleFilter = e => {
    const inputValue = e.target.value.toLowerCase();
    this.setState({ filter: inputValue });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    if (filter) {
      const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
      return filterContacts;
    }
    return contacts;
  };

  render() {
    const contacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <Phonebook>
          <Title>Phonebook</Title>
          <ContactForm addContact={this.addContact} />
          <ToastContainer />

          <Subtitle>Contacts</Subtitle>
          <Filter handleFilter={this.handleFilter} />
        </Phonebook>
        {contacts.length !== 0 ? (
          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        ) : (
          <ErrorMessage>No Results</ErrorMessage>
        )}
      </Wrapper>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
