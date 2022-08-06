import { Button as ChakraButton } from '@chakra-ui/react'

type ButtonProps = {
  children: React.ReactNode
  colorScheme?: 'red' | 'blue' | 'green'
  onClick: () => void
}

export const Button = ({
  children,
  colorScheme,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <ChakraButton colorScheme={colorScheme} onClick={onClick}>
      {children}
    </ChakraButton>
  )
}
