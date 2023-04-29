import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const CargoListStyle = styled.table`
  border-collapse: collapse;
  margin: 10px;
  width: 100%;
  height: auto;
  text-align: center;
  border-spacing: 0;

  th,
  td {
    background: ${props => props.theme['gray-500']};
    border: 1px solid ${props => props.theme['gray-500']};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    padding: 10px;
    text-align: left;
    transition: all 0.1s;
    text-align: center;
  }

  th {
    background-color: ${props => props.theme['gray-700']};
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  tr:nth-child(even) td {
    background: ${props => props.theme['gray-400']};
  }

  tr:hover td {
    background-color: ${props => props.theme['gray-800']};
    color: #fff;
  }

  td button.btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 6px 12px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 4px;

    &.btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    &.btn-secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }

    &.btn-success {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }

    &.btn-attention {
      color: #212529;
      background-color: yellow;
      border-color: yellow;
    }

    &.btn-danger {
      color: #fff;
      background-color: red;
      border-color: red;
    }

    &:hover {
      text-decoration: none;
    }
  }

  td.text-center {
    text-align: center;
  }

  th:nth-child(6) {
    width: 20em;
  }

  th:nth-child(5) {
    width: 5em;
  }
  
  th:nth-child(4) {
    width: 5em;
  }
  th:nth-child(1) {
    width: 5em;
  }
  th:nth-child(1) {
    width: 5em;
  }
  th:nth-child(2) {
    width: 20em;
  }
`;  

export const CargoListDesc = styled.div`
  /* Adicionando um overflow para a div que contém a tabela */
  overflow: auto;
  height: 300px; /* definindo uma altura fixa para a div */
  margin-bottom: 20px; /* adicionando uma margem inferior */
`;


export const VoltarStyle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background-color: var(--bs-primary); /* usa a cor azul padrão do Bootstrap */
  color: #fff;
  border-radius: 5px; /* adiciona um raio de borda de 5 pixels para arredondar as bordas */
  cursor: pointer; /* adiciona um cursor de ponteiro para indicar que o botão é clicável */
  font-size: 1rem; /* define o tamanho da fonte como 1 rem */
  line-height: 1.5; /* define o espaçamento entre as linhas como 1,5 vezes o tamanho da fonte */
  transition: background-color 0.2s ease-in-out; /* adiciona uma transição suave na mudança de cor de fundo */
  
  /* adiciona os estilos de tamanho do Bootstrap */
  &.btn-sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  
  &.btn-lg {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }
  
  /* adiciona um estilo hover ao botão */
  &:hover {
    background-color: var(--bs-primary-dark); /* usa a cor azul mais escura do Bootstrap */
  }
  
  /* aplica o estilo a qualquer botão dentro da div */
  button {
    background-color: ${props => props.theme['green-500']};
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
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
  top: 30%;
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
`;
