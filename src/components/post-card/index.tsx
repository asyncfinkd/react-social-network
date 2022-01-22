import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'
import { AuthContext } from 'context/auth'
import LikeButton from 'components/like-button'

export default function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}: any) {
  const { user } = React.useContext(AuthContext)

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <LikeButton post={{ id, likes, likeCount }} user={user} />

          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" style={{ margin: 0 }} />
            </Button>
            <Label basic color="blue" pointing="left" floated="right">
              {commentCount}
            </Label>
          </Button>
          {user && user.username === username && (
            <>
              <Button
                as="div"
                color="red"
                onClick={() => console.log('Delete post')}
                floated="right"
              >
                <Icon name="trash" style={{ margin: 0 }} />
              </Button>
            </>
          )}
        </Card.Content>
      </Card>
    </>
  )
}
