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
import { AxiosError, AxiosResponse } from 'axios'
import {
  RegisterErrorResponse,
  AuthRequest,
  RegisterResponse
} from '../../types/auth'
import { mediaQuery } from '../../utils/style/mediaQuery'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { generateAuthCookieSetting } from '../../utils/style/generateAuthCookieSetting'
import { ApplicationHeader } from '../../components/app/ApplicationHeader'
import { backgroundColor, borderColor, color } from '../../constants/color'

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
  color: ${color.white};

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
  color: ${color.white};

  ${mediaQuery['sp']`
  font-size:18px;
  `}
`

const LinkCaption = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
`

const Register = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['HelloC'])
  const toast = useToast()
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<AuthRequest>({ mode: 'onBlur' })

  const RegisterHandler = (request: AuthRequest) => {
    client
      .post(`/auth/signup`, {
        mail: request.mail,
        password: request.password,
        name: request.name,
        role: '学習者'
      })
      .then((res: AxiosResponse<RegisterResponse>) => {
        setCookie('HelloC', res.data.accessToken, generateAuthCookieSetting())
        router.push('/')
      })
      .catch((e: AxiosError<RegisterErrorResponse>) => {
        toast({
          title: 'Register Failed...',
          description: e.response?.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      })
  }

  return (
    <RegisterLayout>
      <ApplicationHeader pageTitle="HelloC新規登録" />
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
          color={color.white}
          style={{
            borderBottom: `1px solid ${borderColor.white}`,
            textDecoration: 'none'
          }}
          href="/login"
        >
          ログインはこちら
        </Link>
      </LinkCaption>

      <RegisterForm onSubmit={handleSubmit(RegisterHandler)}>
        <FormControl>
          <Input
            backgroundColor={backgroundColor.white}
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
            backgroundColor={backgroundColor.white}
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
          style={{ width: '100%' }}
        >
          Register
        </Button>
      </RegisterForm>
    </RegisterLayout>
  )
}

export default Register
