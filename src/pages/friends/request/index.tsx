import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'
import { GET_FRIEND_REQUESTS_QUERY } from 'graphql/queries'
import FriendsRequestMap from './modules/friends-request-map'

export default function FriendsRequestPage() {
  const { data } = useQuery(GET_FRIEND_REQUESTS_QUERY)

  return (
    <>
      <Grid style={{ marginTop: 10 }}>
        <Grid.Row>
          <Grid.Column>
            <Card.Group>
              {data &&
                data.getFriendRequests.map((item: any) => {
                  return (
                    <>
                      <FriendsRequestMap item={item} />
                    </>
                  )
                })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
