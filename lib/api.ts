import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://shop.bidingservices.com/graphql';

const client = new GraphQLClient(endpoint);

// ✅ GET POSTS
export async function getPosts() {
  try {
    const query = gql`
      {
        posts(first: 20) {
          nodes {
            id
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const data = await client.request(query);
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('GET POSTS ERROR:', error);
    return [];
  }
}

// ✅ GET SINGLE POST (FIXED)
export async function getPost(slug: string) {
  try {
    const query = gql`
      query ($slug: String!) {
        posts(where: { name: $slug }) {
          nodes {
            title
            content
            excerpt
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const data = await client.request(query, { slug });

    return data?.posts?.nodes?.[0] || null;
  } catch (error) {
    console.error('GET POST ERROR:', error);
    return null;
  }
}