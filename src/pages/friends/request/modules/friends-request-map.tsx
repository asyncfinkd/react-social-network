import { useMutation } from '@apollo/client'
import { ACCEPT_FRIEND_REQUEST_MUTATION } from 'graphql/queries'
import moment from 'moment'
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default function FriendsRequestMap({ item }: any) {
  const [accept] = useMutation(ACCEPT_FRIEND_REQUEST_MUTATION, {
    variables: {
      friendId: item._id,
    },
  })

  return (
    <>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16"
          />
          <Card.Header>{item.username}</Card.Header>
          <Card.Meta>Sent you a friend request</Card.Meta>
          <Card.Description>
            {moment(item.createdAt).fromNow()}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={() => accept()}>
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </>
  )
}
