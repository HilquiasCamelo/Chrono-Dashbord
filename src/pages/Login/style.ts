import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Message = styled.span`
  font-size: 1.5rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const LoginContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #2c2c54, #007f5f);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      font-size: 0.8rem;
      border-radius: 0.5rem;
      border: none;
      background: #f4f4f4;
      color: #2c2c54;
      transition: background-color 0.2s ease-in;

      &:focus {
        outline: none;
        background-color: #eaeaea;
      }

      &::placeholder {
        color: #999;
      }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #2c2c54;
      color: #fff;
      font-size: 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in;

      &:hover {
        background-color: #4b4b8f;
      }
    }
  }

  p {
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #999;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #2c2c54;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    animation: ${fadeIn} 0.5s ease-in-out;
  }
`;
export const GoogleButton = styled.button`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 16px;
`;