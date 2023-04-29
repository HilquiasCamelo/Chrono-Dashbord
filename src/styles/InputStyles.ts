import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

// estilo personalizado para o input text
export const CustomInput = styled.input`
  display: block;
  width: 100%;
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
`;

// estilo personalizado para o input radio
export const CustomRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span:after {
    display: block;
  }
`;

// estilo personalizado para o label do input radio
export const CustomRadioLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    left: 0;
    top: 0;
    background-color: #fff;
    border: 1px solid #ced4da;
  }
`;

// estilo personalizado para a bolinha do input radio
export const CustomRadioCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid #ced4da;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #495057;
  }
`;
