import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'http://localhost/wordpress/graphql';

const client = new GraphQLClient(endpoint);

export async function getPosts() {
  const query = gql`
    {
      posts {
        nodes {
          id
          title
          slug
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.posts.nodes;
}