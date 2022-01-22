import { Button, Grid } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from 'graphql/queries'
import FriendsMap from './modules/friends-map'
import { Link } from 'react-router-dom'

export default function FriendsPage() {
  const { data } = useQuery(GET_USERS_QUERY)

  if (data) {
    console.log(data)
  }
  return (
    <>
      <Grid style={{ marginTop: 5 }}>
        <Grid.Row>
          <Grid.Column>
            <Button
              fluid
              as={Link}
              to="/friends/request"
              floated="right"
              style={{
                width: 200,
                height: 55,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              View Friend Requests
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h1 style={{ marginBottom: 30 }}>You may be familiar with</h1>
            {data?.getUsers?.map((item: any) => {
              return (
                <>
                  <FriendsMap item={item} />
                </>
              )
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
