import React from 'react'
import { Button } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import {
  ADD_FRIEND_MUTATION,
  GET_USERS_QUERY,
  REMOVE_FRIEND_MUTATION,
} from 'graphql/queries'

export default function AddFriendButton({
  item: { id: userId, friends },
  user,
}: any) {
  const [requested, setRequested] = React.useState(false)

  React.useEffect(() => {
    if (
      user &&
      friends.find((friend: any) => friend.username === user.username)
    ) {
      setRequested(true)
    } else setRequested(false)
  }, [user, friends])

  const [addFriend] = useMutation(ADD_FRIEND_MUTATION, {
    update(proxy, result) {
      const data: any = proxy.readQuery({
        query: GET_USERS_QUERY,
      })

      let newData = [...data.getUsers]
      newData = [result.data.getUsers, ...newData]
      proxy.writeQuery({
        query: GET_USERS_QUERY,
        data: {
          ...data,
          getUsers: {
            newData,
          },
        },
      })
    },
    variables: {
      userId,
    },
  })

  const [removeFriendOrDecline] = useMutation(REMOVE_FRIEND_MUTATION, {
    update(proxy, result) {
      const data: any = proxy.readQuery({
        query: GET_USERS_QUERY,
      })

      let newData = [...data.getUsers]
      newData = [result.data.getUsers, ...newData]
      proxy.writeQuery({
        query: GET_USERS_QUERY,
        data: {
          ...data,
          getUsers: {
            newData,
          },
        },
      })
    },
    variables: {
      friendId: friends[0]?._id,
      userId: userId,
    },
  })

  return (
    <>
      {requested ? (
        <Button
          style={{
            position: 'absolute',
            right: 15,
            width: 150,
            top: 20,
          }}
          onClick={() => removeFriendOrDecline()}
          active={requested}
        >
          {friends[0]?.status === 'Pending'
            ? 'Decline Request'
            : 'Remove Friend'}
        </Button>
      ) : (
        <Button
          style={{
            position: 'absolute',
            right: 15,
            width: 150,
            top: 20,
          }}
          onClick={() => addFriend()}
          active={requested}
        >
          Add Friend
        </Button>
      )}
    </>
  )
}
