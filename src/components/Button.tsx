import { Button as ChakraButton } from '@chakra-ui/react'

type ButtonProps = {
  children: React.ReactNode
  colorScheme?: 'red' | 'blue' | 'green'
  onClick: () => void
  disabled: boolean
}

export const Button = ({
  children,
  colorScheme,
  onClick,
  disabled
}: ButtonProps): JSX.Element => {
  return (
    <ChakraButton
      colorScheme={colorScheme}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ChakraButton>
  )
}
