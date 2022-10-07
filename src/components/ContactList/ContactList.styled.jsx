import styled from '@emotion/styled';

export const List = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;

  font-size: 18px;

  border-radius: 10px;
  padding: 30px 20px;
  margin: 0;

  color: rgb(16, 16, 144);
  background-image: linear-gradient(
    to right,
    rgb(223, 236, 253) 15%,
    rgb(194, 223, 254) 40%,
    rgb(176, 212, 249) 65%,
    rgb(175, 212, 252)
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 20px;
  margin-bottom: 20px;

  border-radius: 10px;
  background-color: #ffff;

  transition: all 150ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    background-image: linear-gradient(
      to left,
      rgb(232, 251, 233) 15%,
      rgb(200, 253, 194) 40%,
      rgb(168, 247, 170) 65%,
      rgb(154, 244, 153)
    );

    cursor: pointer;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
