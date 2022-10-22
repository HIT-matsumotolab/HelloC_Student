import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import {
  Input,
  Button,
  FormErrorMessage,
  FormControl,
  Link
} from '@chakra-ui/react'
import styled from 'styled-components'
import client from '../../api/client'
import { AxiosError } from 'axios'
import { AuthErrorResponse, AuthRequest } from '../../types/auth'
import { mediaQuery } from '../../utils/style/mediaQuery'

const RegisterLayout = styled.div`
  padding: 100px 40px 0;
`

const RegisterForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const RegisterHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`

const RegisterTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;

  ${mediaQuery['sp']`
  font-size:28px;
  `}
`

const RegisterCaption = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;

  ${mediaQuery['sp']`
  font-size:18px;
  `}
`

const LinkCaption = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
`

const RegisterHandler = (request: AuthRequest) => {
  console.log('test')
  client
    .post(`/auth/signup`, {
      mail: request.mail,
      password: request.password,
      name: request.name,
      role: '学習者'
    })
    .then((res) => {
      console.log(res)
    })
    .catch((e: AxiosError<AuthErrorResponse>) => {
      console.log(e.response?.data.errors)
      console.log('error')
    })
}

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<AuthRequest>({ mode: 'onBlur' })
  // console.log(client)
  return (
    <RegisterLayout>
      <RegisterHeading>
        <Image alt="Logo" src="/logo.svg" width="130" height="119" />
        <RegisterTitle> HelloC For Student</RegisterTitle>
      </RegisterHeading>
      <RegisterCaption>
        <span>HelloC学習者向けサービス</span>
        <span>新規登録</span>
      </RegisterCaption>

      <LinkCaption>
        <Link
          color="#ffffff"
          style={{ borderBottom: '1px solid #ffffff', textDecoration: 'none' }}
          href="/login"
        >
          ログインはこちら
        </Link>
      </LinkCaption>

      <RegisterForm onSubmit={handleSubmit(RegisterHandler)}>
        <FormControl>
          <Input
            backgroundColor="#ffffff"
            type="name"
            placeholder="名前"
            {...register('name', {
              required: 'Required'
            })}
          />
          <FormErrorMessage>
            {errors.mail && errors.mail.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <Input
            backgroundColor="#ffffff"
            type="mail"
            placeholder="メールアドレス"
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
            placeholder="パスワード"
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
          style={{ width: '100%' }}
        >
          Register
        </Button>
      </RegisterForm>
    </RegisterLayout>
  )
}

export default Register
