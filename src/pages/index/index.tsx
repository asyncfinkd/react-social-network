import { useQuery } from '@apollo/client'
import PostCard from 'components/post-card'
import { FETCH_POSTS_QUERY } from 'graphql/queries'
import { Grid, Transition } from 'semantic-ui-react'

function IndexPage() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY)

  return (
    <>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1 style={{ marginLeft: '15px' }}>Loading posts..</h1>
          ) : (
            <Transition.Group>
              {data &&
                data.getPosts.map((post: any) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    </>
  )
}

export default IndexPage
