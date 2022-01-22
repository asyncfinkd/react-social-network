import React from 'react'
import { Button, Confirm, Icon } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import {
  DELETE_POST_MUTATION,
  FETCH_POSTS_QUERY,
  DELETE_COMMENT_MUTATION,
} from 'graphql/queries'
import MyPopup from 'util/popup'

export default function DeleteButton({
  postId,
  commentId,
  callback,
}: {
  postId?: string
  commentId?: string
  callback?: () => void
}) {
  const [confirmOpen, setConfirmOpen] = React.useState(false)

  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION

  const [deletePostOrMutation] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false)

      if (!commentId) {
        const data: any = proxy.readQuery({
          query: FETCH_POSTS_QUERY,
        })

        let newData = [...data.getPosts]
        newData = data.getPosts.filter((post: any) => post.id !== postId)
        proxy.writeQuery({
          query: FETCH_POSTS_QUERY,
          data: {
            ...data,
            getPosts: {
              newData,
            },
          },
        })
      }

      if (callback) callback()
    },
    variables: {
      postId,
      commentId,
    },
  })

  return (
    <>
      <MyPopup content={commentId ? 'Delete comment' : 'Delete post'}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </MyPopup>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        // @ts-ignore
        onConfirm={deletePostOrMutation}
      />
    </>
  )
}
