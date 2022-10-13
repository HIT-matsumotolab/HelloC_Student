import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Input, Button, FormErrorMessage, FormControl } from '@chakra-ui/react'
import styled from 'styled-components'
import client from '../../api/client'

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

type LoginRequest = {
  email: string
  password: string
}

const loginHandler = (request: LoginRequest) => {
  client
    .post(`/auth/signin`, {
      body: JSON.stringify(request)
    })
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log('error')
    })
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<LoginRequest>({ mode: 'onBlur' })

  return (
    <LoginLayout>
      <LoginHeading>
        <Image alt="Logo" src="/logo.svg" width="130" height="119" />
        <LoginTitle> HelloC For Student</LoginTitle>
      </LoginHeading>
      <LoginCaption>HelloC学習者向けサービス</LoginCaption>

      <LoginForm onSubmit={handleSubmit(loginHandler)}>
        <FormControl>
          <Input
            backgroundColor="#ffffff"
            type="email"
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            backgroundColor="#ffffff"
            type="password"
            {...register('password', {
              required: 'Required'
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: 'invalid password'
              // }
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          backgroundColor="#31C6D4"
          color="#ffffff"
          type="submit"
          disabled={!isValid}
        >
          Login
        </Button>
      </LoginForm>
    </LoginLayout>
  )
}

export default Login
