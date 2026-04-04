import { GraphQLClient, gql } from 'graphql-request';

export async function getPosts() {
  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    // ❌ Prevent crash if env missing
    if (!endpoint) {
      console.warn('No WordPress API URL');
      return [];
    }

    const client = new GraphQLClient(endpoint);

    const query = gql`
      {
        posts {
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

    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);

    // ✅ Prevent build crash
    return [];
  }
}