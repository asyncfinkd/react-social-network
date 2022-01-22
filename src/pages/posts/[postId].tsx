import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { FETCH_POST_QUERY, SUBMIT_COMMENT_MUTATION } from 'graphql/queries'
import { Button, Card, Form, Grid, Icon, Image, Label } from 'semantic-ui-react'
import moment from 'moment'
import LikeButton from 'components/like-button'
import { AuthContext } from 'context/auth'
import DeleteButton from 'components/delete-button'
import { useNavigate } from 'react-router-dom'

interface TComments {
  id: string
  createdAt: string
  body: string
  username: string
}

export default function PostsPostIdPage() {
  const commentInputRef = React.useRef<any>(null)
  const { user } = React.useContext(AuthContext)
  const navigate = useNavigate()
  const params = useParams()
  const [comment, setComment] = React.useState('')

  const { data } = useQuery(FETCH_POST_QUERY, {
    variables: { postId: params.postId },
  })

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment('')

      commentInputRef.current.blur()
    },
    variables: {
      postId: params.postId,
      body: comment,
    },
  })

  let postMarkup
  if (!data?.getPost) {
    postMarkup = <p>Loading post...</p>
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likeCount,
      commentCount,
      likes,
    } = data?.getPost

    const deleteButtonCallback = () => {
      navigate('/')
    }

    postMarkup = (
      <>
        <Grid style={{ marginTop: 10 }}>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16"
                size="small"
                float="right"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{username}</Card.Header>
                  <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                  <Card.Description>{body}</Card.Description>
                </Card.Content>
                <hr />
                <Card.Content extra>
                  <LikeButton user={user} post={{ id, likeCount, likes }} />
                  <Button
                    as="div"
                    labelPosition="right"
                    onClick={() => console.log('Comment on post')}
                  >
                    <Button basic color="blue">
                      <Icon name="comments" />
                    </Button>
                    <Label basic color="blue" pointing="left">
                      {commentCount}
                    </Label>
                  </Button>
                  {user && user.username === username && (
                    <DeleteButton postId={id} callback={deleteButtonCallback} />
                  )}
                </Card.Content>
              </Card>
              {user && (
                <Card fluid>
                  <Card.Content>
                    <p>Post a comment</p>
                    <Form>
                      <div className="ui action input fluid">
                        <input
                          type="text"
                          placeholder="Comment..."
                          name="comment"
                          value={comment}
                          onChange={(e: any) => setComment(e.target.value)}
                          ref={commentInputRef}
                        />
                        <button
                          type="submit"
                          className="ui button teal"
                          disabled={comment.trim() === ''}
                          onClick={() => submitComment()}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  </Card.Content>
                </Card>
              )}
              {comments.map((comment: TComments) => {
                return (
                  <>
                    <Card fluid key={comment.id}>
                      <Card.Content>
                        {user && user.username === comment.username && (
                          <DeleteButton postId={id} commentId={comment.id} />
                        )}
                        <Card.Header>{username}</Card.Header>
                        <Card.Meta>
                          {moment(comment.createdAt).fromNow()}
                        </Card.Meta>
                        <Card.Description>{comment.body}</Card.Description>
                      </Card.Content>
                    </Card>
                  </>
                )
              })}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }

  return postMarkup
}
