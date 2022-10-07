import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 20px;
`;

export const Phonebook = styled.div`
  width: 600px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 20px 0;
  margin-right: 50px;

  background-image: linear-gradient(
    to right,
    rgb(227, 237, 250) 15%,
    rgb(201, 227, 254) 40%,
    rgb(188, 219, 252) 65%,
    rgb(175, 212, 252)
  );
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  color: rgb(16, 16, 144);

  margin-top: 0;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  color: rgb(16, 16, 144);

  padding: 10px 0;
  margin: 0;
`;

export const ErrorMessage = styled.div`
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 700;

  color: #ffff;
  background-color: rgb(245, 57, 57);

  border-radius: 15px;

  padding: 20px;
`;
