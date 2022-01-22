import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LIKE_POST_MUTATION } from 'graphql/queries'

export default function LikeButton({
  post: { id, likeCount, likes },
  user,
}: any) {
  const [liked, setLiked] = React.useState(false)

  React.useEffect(() => {
    if (user && likes.find((like: any) => like.username === user.username)) {
      setLiked(true)
    } else setLiked(false)
  }, [user, likes])

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  })

  const likeButton = user ? (
    liked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="heart" />
    </Button>
  )

  return (
    <>
      <Button as="div" labelPosition="right" onClick={() => likePost()}>
        {likeButton}
        <Label basic color="teal" pointing="left">
          {likeCount}
        </Label>
      </Button>
    </>
  )
}
