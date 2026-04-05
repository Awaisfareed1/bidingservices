import Container from '@/app/components/Container';
import Image from 'next/image';
import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://shop.bidingservices.com/graphql';

const client = new GraphQLClient(endpoint);

export const revalidate = 60;

async function getPost(slug: string) {
  const query = gql`
    {
      posts(first: 20) {
        nodes {
          id
          title
          slug
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
        }
      }
    }
  `;

  const data = await client.request(query);

  return data?.posts?.nodes.find(
    (p: any) => p.slug === slug
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="py-20 text-center text-white">
        Post not found
      </main>
    );
  }

  const words = post.content.replace(/<[^>]+>/g, '').split(' ').length;
  const readingTime = Math.ceil(words / 200);

  return (
    <main className="py-20">
      <Container>
        <article className="max-w-3xl mx-auto">

          {post.featuredImage?.node?.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={1200}
              height={600}
              className="rounded-xl mb-6"
              unoptimized
            />
          )}

          <h1 className="text-3xl font-bold text-white mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-gray-400 mb-6">
            {readingTime} min read •{' '}
            {new Date(post.date).toDateString()}
          </p>

          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </Container>
    </main>
  );
}