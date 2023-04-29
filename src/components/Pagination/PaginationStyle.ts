import styled from "styled-components";

export const PaginationContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  Button {
  cursor: pointer;
  margin-right: 10px;
  padding: 8px 16px;
  transition: all 0.3s ease;
  background-color: ${props => props.theme['green-700']};
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: ${props => props.theme['green-700']};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
  
  .current-page {
    font-weight: bold;
    margin: 0 10px;
  }

  .div{
    position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  }
  `;