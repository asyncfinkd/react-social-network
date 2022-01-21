import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'

export default function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}: any) {
  function likePost() {
    console.log('Like post')
  }

  function commentOnPost() {
    console.log('Comment post')
  }

  return (
    <>
      <Card>
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
          <Button as="div" labelPosition="right" onClick={likePost}>
            <Button color="teal" basic>
              <Icon name="heart" />
              Like
            </Button>
            <Label basic color="teal" pointing="left">
              {likeCount}
            </Label>
          </Button>

          <Button as="div" labelPosition="right" onClick={commentOnPost}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </Card.Content>
      </Card>
    </>
  )
}
