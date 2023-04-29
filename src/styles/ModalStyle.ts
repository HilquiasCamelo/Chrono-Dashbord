import styled, { createGlobalStyle } from 'styled-components';
import { Modal, Button } from 'react-bootstrap';


export const SecondaryButton = styled(Button)`
  background-color: #eaeaea;
  color: #444;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const DangerButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #c82333;
  }
  
`;


