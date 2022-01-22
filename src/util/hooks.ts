import { useState } from 'react'

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState<any>(initialState)

  const onChange = (event: any) => {
    setValues({ ...values, [event?.target.name]: event.target.value })
  }

  const onSubmit = (event: any) => {
    event.preventDefault()

    callback()
  }

  return {
    onChange,
    onSubmit,
    values,
  }
}
