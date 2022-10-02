import React from 'react'
import Image from 'next/image'
import { Input, Button } from '@chakra-ui/react'
import styled from 'styled-components'

const LoginLayout = styled.div`
  padding: 100px 40px 0;
`

const LoginForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const LoginHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`

const LoginTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`

const LoginCaption = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`

const Login = () => {
  return (
    <LoginLayout>
      <LoginHeading>
        <Image alt="Logo" src="/logo.svg" width="130" height="119" />
        <LoginTitle> HelloC For Student</LoginTitle>
      </LoginHeading>
      <LoginCaption>HelloC学習者向けサービス</LoginCaption>

      <LoginForm>
        <Input backgroundColor="#ffffff" />
        <Input backgroundColor="#ffffff" />
        <Button backgroundColor="#31C6D4" color="#ffffff">
          Login
        </Button>
      </LoginForm>
    </LoginLayout>
  )
}

export default Login
