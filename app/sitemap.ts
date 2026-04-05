import { gql, GraphQLClient } from 'graphql-request';

export default async function sitemap() {
  try {
    const endpoint =
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
      'https://shop.bidingservices.com/graphql';

    const client = new GraphQLClient(endpoint);

    const query = gql`
      {
        posts(first: 50) {
          nodes {
            slug
            date
          }
        }
      }
    `;

    const data = await client.request(query);

    const posts = data?.posts?.nodes || [];

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://bidingservices.com';

    const urls = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date || new Date().toISOString(),
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString(),
      },
      ...urls,
    ];
  } catch (error) {
    console.error('Sitemap error:', error);

    return [
      {
        url: 'https://bidingservices.com',
        lastModified: new Date().toISOString(),
      },
    ];
  }
}