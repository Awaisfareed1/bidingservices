import { GraphQLClient, gql } from 'graphql-request';

export async function getPosts() {
  try {
    const endpoint =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
      'https://shop.bidingservices.com/graphql';

    const client = new GraphQLClient(endpoint);

    const query = gql`
      {
        posts(first: 10) {
          nodes {
            id
            title
            slug
            excerpt
          }
        }
      }
    `;

    const data = await client.request(query);

    console.log('POSTS DATA:', data); // 🔥 debug

    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}