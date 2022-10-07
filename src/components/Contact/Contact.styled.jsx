import styled from '@emotion/styled';

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Comic Sans MS';

  padding: 10px 10px;

  background-color: rgb(240, 196, 196);

  border-radius: 10px;
  border: none;

  cursor: pointer;
  transition: all 150ms ease-out;

  &:hover,
  &:focus {
    background-color: rgb(205, 3, 3);
  }

  & > svg {
    pointer-events: none;
    color: #ffff;
  }
`;
