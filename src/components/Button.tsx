import { ButtonVoltar, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonVoltar variant={variant}>Enviar</ButtonVoltar>
}
