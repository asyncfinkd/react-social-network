import React from 'react'
import AddFriendButton from 'components/add-friend-button'
import moment from 'moment'
import { Card, Image } from 'semantic-ui-react'
import { AuthContext } from 'context/auth'

export default function FriendsMap({ item }: any) {
  const { user } = React.useContext(AuthContext)
  return (
    <>
      <Card fluid>
        <Card.Content
          style={{ display: 'flex', gap: 15, position: 'relative' }}
        >
          <div>
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16"
              style={{
                height: 44,
                borderRadius: '50%',
                width: 44,
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <Card.Header>{item.username}</Card.Header>
            <Card.Meta>{moment(item.createdAt).fromNow()}</Card.Meta>
          </div>
        </Card.Content>
        <AddFriendButton user={user} item={item} />
      </Card>
    </>
  )
}
