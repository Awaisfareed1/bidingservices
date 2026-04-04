import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'http://localhost/wordpress/graphql';

const client = new GraphQLClient(endpoint);

export default async function sitemap() {
  try {
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

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

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
  } catch (error) {
    console.error('Sitemap generation failed:', error);

    return [];
  }
}