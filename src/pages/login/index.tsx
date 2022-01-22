import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from 'graphql/queries'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'util/hooks'
import { AuthContext } from 'context/auth'

export default function LoginPage() {
  const context = React.useContext(AuthContext)
  const navigate = useNavigate()

  const [errors, setErrors] = React.useState({})

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    password: '',
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { login: userData } }) {
      context.login(userData)
      navigate('/')
    },
    onError(err) {
      // @ts-ignore
      setErrors(err.graphQLErrors[0].extensions.errors)
    },
    variables: values,
  })

  function registerUser() {
    loginUser()
  }
  return (
    <>
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          novalidate
          className={loading ? 'loading' : ''}
        >
          <h1>Login</h1>
          {/* react-hook-form */}
          <Form.Input
            label="Username"
            placeholder="Username..."
            name="username"
            value={values.username}
            onChange={onChange}
            type="text"
            // @ts-ignore
            error={errors.username ? true : false}
          />
          <Form.Input
            label="Password"
            placeholder="Password..."
            name="password"
            value={values.password}
            onChange={onChange}
            type="password"
            // @ts-ignore
            error={errors.password ? true : false}
          />
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value: any) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
