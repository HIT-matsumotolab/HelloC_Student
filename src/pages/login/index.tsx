import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import {
  Input,
  Button,
  FormErrorMessage,
  FormControl,
  Link,
  useToast
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
import { generateAuthCookieSetting } from '../../utils/style/generateAuthCookieSetting'
import { ApplicationHeader } from '../../components/app/ApplicationHeader'
import { backgroundColor, borderColor, color } from '../../constants/color'
import { fontSize } from '../../constants/fontSize'

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
  font-size: ${fontSize.title};
  font-weight: bold;
  color: ${color.white};

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
  font-size: ${fontSize.heading1};
  font-weight: bold;
  color: ${color.white};

  ${mediaQuery['sp']`
  font-size:18px;
  `}
`

const LinkCaption = styled.div`
  font-size: ${fontSize.heading4};
  text-align: center;
  margin-top: 15px;
`

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])
  const toast = useToast()
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<AuthRequest>({ mode: 'onBlur' })

  const loginHandler = (request: AuthRequest) => {
    client
      .post(`/login`, {
        email: request.email,
        password: request.password
      })
      .then((res: AxiosResponse<LoginResponse>) => {
        setCookie('HelloC', res.data.accessToken, generateAuthCookieSetting())
        router.push('/')
      })
      .catch((e: AxiosError<LoginErrorResponse>) => {
        toast({
          title: 'Login Failed...',
          description: e.response?.data.errors[0].message,
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      })
  }

  return (
    <LoginLayout>
      <ApplicationHeader pageTitle="HelloCログイン" />
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
          color={color.white}
          style={{
            borderBottom: `1px solid ${borderColor.white}`,
            textDecoration: 'none'
          }}
          href="/register"
        >
          新規登録はこちら
        </Link>
      </LinkCaption>

      <LoginForm onSubmit={handleSubmit(loginHandler)}>
        <FormControl>
          <Input
            backgroundColor={backgroundColor.white}
            placeholder="メールアドレス"
            type="mail"
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid mail address'
              }
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            backgroundColor={backgroundColor.white}
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
          backgroundColor={backgroundColor.aqua}
          color={color.white}
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
