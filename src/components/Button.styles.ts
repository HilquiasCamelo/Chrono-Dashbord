import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonVoltar = styled.button<ButtonContainerProps>`
  width: 110px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: 0ch;
  margin: 8px;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariant[props.variant]};
    `
  }} */
`
