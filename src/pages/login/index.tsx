import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Input, Button, FormErrorMessage, FormControl } from '@chakra-ui/react'
import styled from 'styled-components'
import client from '../../api/client'
import { AuthErrorResponse, AuthRequest } from '../../types/auth'
import { AxiosError } from 'axios'
import { mediaQuery } from '../../utils/style/mediaQuery'

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
  gap: 10px;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`

const LoginTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;

  ${mediaQuery['sp']`
  font-size:28px;
  `}
`

const LoginCaption = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;

  ${mediaQuery['sp']`
  font-size:18px;
  `}
`

const loginHandler = (request: AuthRequest) => {
  client
    .post(`/auth/signin`, {
      mail: request.mail,
      password: request.password
    })
    .then((res) => {
      console.log(res)
    })
    .catch((e: AxiosError<AuthErrorResponse>) => {
      console.log(e)
      console.log('error')
    })
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<AuthRequest>({ mode: 'onBlur' })
  // console.log(client)
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
            type="mail"
            {...register('mail', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid mail address'
              }
            })}
          />
          <FormErrorMessage>
            {errors.mail && errors.mail.message}
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
