import styled from '@emotion/styled';
import {
  Form as ContactForm,
  Input as Field,
} from '../ContactForm/ContactForm';
import { Text as LabelText } from 'components/ContactForm/ContactForm.styled';

export const Form = ContactForm.withComponent('form');
export const Input = Field.withComponent('input');
export const Text = LabelText.withComponent('span');

export const Label = styled.label`
  width: 250px;

  display: flex;
  flex-direction: column;
`;
