import styled from '@emotion/styled';

export const Label = styled.label`
  width: 250px;

  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-bottom: 15px;
  }
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: rgb(40, 70, 219);
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Comic Sans MS';
  font-size: 20px;
  font-weight: 600;

  padding: 10px 25px;
  margin: 0 auto;
  margin-top: 20px;

  color: #26a016;
  background-color: rgb(11, 20, 11);

  border-radius: 10px;
  border: none;

  cursor: pointer;
  transition: all 150ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.16) 4px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const Thumb = styled.div`
  position: relative;
`;
