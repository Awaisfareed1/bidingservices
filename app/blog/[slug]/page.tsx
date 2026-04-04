import { gql, GraphQLClient } from 'graphql-request';
import Container from '@/app/components/Container';
import Image from 'next/image';

const endpoint = 'http://localhost/wordpress/graphql';
const client = new GraphQLClient(endpoint);

export const revalidate = 60;

// ✅ SEO METADATA
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = gql`
    query GetPostSEO($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const data = await client.request(query, { slug });
  const post = data.post;

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const description = post.excerpt?.replace(/<[^>]+>/g, '') || '';

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.featuredImage?.node?.sourceUrl
        ? [post.featuredImage.node.sourceUrl]
        : [],
    },
  };
}

// ✅ PAGE
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = gql`
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
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
  `;

  const data = await client.request(query, { slug });

  if (!data?.post) {
    return (
      <main className="py-10">
        <Container>
          <h1 className="text-2xl font-bold">Post not found</h1>
        </Container>
      </main>
    );
  }

  const post = data.post;

  // ✅ SCHEMA WITH REAL AUTHOR
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.featuredImage?.node?.sourceUrl || '',
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author?.node?.name || 'Unknown',
    },
  };

  return (
    <main className="py-10">
      <Container>
        <article className="max-w-3xl mx-auto">

          {/* ✅ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />

          {/* Featured Image */}
          {post.featuredImage?.node?.sourceUrl && (
            <div className="mb-6">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                width={1200}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Author + Date (nice UI upgrade) */}
          <p className="text-sm text-gray-500 mb-6">
            By {post.author?.node?.name || 'Unknown'} •{' '}
            {new Date(post.date).toLocaleDateString()}
          </p>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </Container>
    </main>
  );
}