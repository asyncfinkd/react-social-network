import { InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache: new InMemoryCache({
    // @ts-ignore
    dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
})

export default client
