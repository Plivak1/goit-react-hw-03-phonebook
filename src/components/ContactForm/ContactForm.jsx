import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { Label, Text, AddButton, Thumb } from './ContactForm.styled';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  width: 450px;

  background-color: rgb(220, 253, 220);

  padding: 15px 10px;
  margin: 0 auto;
  border: 3px solid rgb(18, 209, 18);
  border-radius: 10px;
`;

export const Input = styled(Field)`
  width: 250px;

  font-size: 18px;
  color: rgb(6, 25, 122);

  padding: 10px 15px;
  border: 1px solid rgb(40, 70, 219);
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: 2px solid rgb(40, 70, 219);
  }
`;

const ErrorElem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0px;
  left: -220px;

  font-size: 15px;

  width: 200px;
  padding: 10px;

  border-radius: 10px;
  color: #ffff;
  background-color: rgb(252, 44, 44);
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={msg => {
        return <ErrorElem>{msg}</ErrorElem>;
      }}
    />
  );
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Имя может содержать только буквы, апостроф, тире и пробелы. По бокам нет пробелов'
    )
    .required('Это поле обязательное'),
  number: Yup.string()
    .matches(
      /[0-9]{3}-[0-9]{2}-[0-9]{2}/,
      'Номер должен содержать только числа и тире. Формат: (123-45-67)'
    )
    .min(9, 'Номер должен состоять из 9 символов')
    .max(9, 'Номер должен состоять из 9 символов')
    .required('Это поле обязательное'),
});

export class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    resetForm();
    this.props.addContact(values);
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <Label>
            <Text>Name</Text>
            <Thumb>
              <Input type="text" name="name" placeholder="Name Surname" />
              <FormError name="name" />
            </Thumb>
          </Label>

          <Label>
            <Text>Number {`(xxx-xx-xx)`}</Text>
            <Thumb>
              <Input type="tel" name="number" placeholder="123-45-67" />
              <FormError name="number" />
            </Thumb>
          </Label>

          <AddButton type="submit">Add contact</AddButton>
        </Form>
      </Formik>
    );
  }
}

Formik.propTypes = {
  initialValues: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
