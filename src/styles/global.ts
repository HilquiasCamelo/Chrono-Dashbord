import styled, { createGlobalStyle } from 'styled-components';
import { Modal, Button } from 'react-bootstrap';



export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Adicionando uma borda ao elemento que está em foco */
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea, 
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  }

  .modal {
  display: none;
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-dialog {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

 
  
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
  color: #212529;
  justify-content: center;
  align-items: center;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
}

.modal-header h5.modal-title {
  margin-top: 0;
  margin-bottom: 0;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - (1.75rem * 2));
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - (1.75rem * 2));
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}

.modal-content input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.modal-content input {display: block;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1rem;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
}


`;


