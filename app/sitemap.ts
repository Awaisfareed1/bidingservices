import { gql, GraphQLClient } from 'graphql-request';

export default async function sitemap() {
  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    if (!endpoint) {
      console.warn('No WordPress API URL found');
      return [];
    }

    const client = new GraphQLClient(endpoint);

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

    const posts = data?.posts?.nodes || [];

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'https://bidingservices.com';

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
    console.error('Sitemap error:', error);

    return [
      {
        url: 'https://bidingservices.com',
        lastModified: new Date(),
      },
    ];
  }
}