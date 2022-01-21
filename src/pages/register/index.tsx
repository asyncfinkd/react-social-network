import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from 'graphql/queries'

export default function RegisterPage(props: any) {
  const [errors, setErrors] = React.useState({})
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  })

  const onChange = (event: any) => {
    setValues({ ...values, [event?.target.name]: event.target.value })
  }

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result)

      props.history.push('/')
    },
    onError(err) {
      // @ts-ignore
      setErrors(err.graphQLErrors[0].extensions.errors)
    },
    variables: values,
  })

  const onSubmit = (event: any) => {
    event.preventDefault()

    addUser()
  }
  return (
    <>
      <div className="form-container">
        <Form onSubmit={onSubmit} novalidate>
          <h1>Register</h1>
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
            label="Email"
            placeholder="Email..."
            name="email"
            value={values.email}
            onChange={onChange}
            type="email"
            // @ts-ignore
            error={errors.email ? true : false}
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
          <Form.Input
            label="Confirm Password"
            placeholder="Confirm Password..."
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={onChange}
            type="password"
            // @ts-ignore
            error={errors.confirmPassword ? true : false}
          />
          <Button type="submit" primary>
            Register
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
