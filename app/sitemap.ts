import { gql, GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost/wordpress/graphql';
const client = new GraphQLClient(endpoint);

export default async function sitemap() {
  const query = gql`
    {
      posts {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await client.request(query);

  const posts = data.posts.nodes;

  const baseUrl = 'http://localhost:3000';

  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}