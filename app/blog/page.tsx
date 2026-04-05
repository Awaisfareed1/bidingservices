import Link from 'next/link';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { gql, GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://shop.bidingservices.com/graphql';

const client = new GraphQLClient(endpoint);

export const revalidate = 60;

async function getPosts() {
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
        }
      }
    }
  `;

  const data = await client.request(query);
  return data?.posts?.nodes || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="py-12">
      <Container>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Insights & Strategies
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Learn how to get more job responses, improve your applications,
            and land opportunities globally.
          </p>
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <p className="text-gray-500">No posts available</p>
        )}

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Image */}
              {post.featuredImage?.node?.sourceUrl && (
                <div className="overflow-hidden">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={600}
                    height={350}
                    className="w-full h-48 object-cover group-hover:scale-105 transition"
                    unoptimized
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">

                {/* Date */}
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(post.date).toDateString()}
                </p>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg font-semibold group-hover:underline">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <div
                  className="text-sm text-gray-600 mt-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />

                {/* Read More */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-black"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* 🔥 CTA SECTION */}
        <div className="mt-16 p-8 bg-black text-white rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Want better job results?
          </h2>
          <p className="mb-5 text-gray-300">
            We apply to jobs daily on your behalf across multiple platforms.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </Link>
        </div>

      </Container>
    </main>
  );
}