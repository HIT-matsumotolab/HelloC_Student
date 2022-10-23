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
import {
  LoginErrorResponse,
  AuthRequest,
  LoginResponse
} from '../../types/auth'
import { AxiosError, AxiosResponse } from 'axios'
import { mediaQuery } from '../../utils/style/mediaQuery'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

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

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<AuthRequest>({ mode: 'onBlur' })

  const loginHandler = (request: AuthRequest) => {
    client
      .post(`/auth/signin`, {
        mail: request.mail,
        password: request.password
      })
      .then((res: AxiosResponse<LoginResponse>) => {
        alert('ログインしました！')
        setCookie('HelloC', res.data.accessToken)
        router.push('/')
      })
      .catch((e: AxiosError<LoginErrorResponse>) => {
        alert(e.response?.data.errors[0].message)
      })
  }

  return (
    <LoginLayout>
      <LoginHeading>
        <Image alt="Logo" src="/logo.svg" width="130" height="119" />
        <LoginTitle> HelloC For Student</LoginTitle>
      </LoginHeading>
      <LoginCaption>
        <span>HelloC学習者向けサービス</span>
        <span>ログイン</span>
      </LoginCaption>

      <LinkCaption>
        <Link
          color="#ffffff"
          style={{ borderBottom: '1px solid #ffffff', textDecoration: 'none' }}
          href="/register"
        >
          新規登録はこちら
        </Link>
      </LinkCaption>

      <LoginForm onSubmit={handleSubmit(loginHandler)}>
        <FormControl>
          <Input
            backgroundColor="#ffffff"
            placeholder="メールアドレス"
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
        >
          Login
        </Button>
      </LoginForm>
    </LoginLayout>
  )
}

export default Login
