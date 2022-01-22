import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'util/hooks'
import { useMutation } from '@apollo/client'
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from 'graphql/queries'

export default function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallBack, {
    body: '',
  })

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data: any = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      })

      let newData = [...data.getPosts]
      newData = [result.data.createPost, ...newData]
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          ...data,
          getPosts: {
            newData,
          },
        },
      })
      values.body = ''
    },
  })

  function createPostCallBack() {
    createPost()
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <Form.Field>
          <Form.Input
            placeholder="Hi World!"
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <>
          <div className="ui error message" style={{ marginBottom: 20 }}>
            <ul className="list">
              <li>{error.graphQLErrors[0].message}</li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}
