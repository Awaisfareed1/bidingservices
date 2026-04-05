import { gql, GraphQLClient } from 'graphql-request';
import Container from '@/app/components/Container';
import Image from 'next/image';
import Link from 'next/link';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://shop.bidingservices.com/graphql';

const client = new GraphQLClient(endpoint);

export const revalidate = 60;

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
    return <div>Post not found</div>;
  }

  const post = data.post;

  return (
    <main className="py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-3 max-w-3xl">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <p className="text-sm text-gray-500 mb-6">
              By {post.author?.node?.name || 'Unknown'} •{' '}
              {new Date(post.date).toDateString()}
            </p>

            {/* Image */}
            {post.featuredImage?.node?.sourceUrl && (
              <div className="mb-6">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="rounded-xl w-full object-cover"
                  unoptimized
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* 🔥 END CTA */}
            <div className="mt-12 p-6 bg-black text-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Want us to apply jobs for you?
              </h3>
              <p className="mb-4">
                We apply to jobs daily on your behalf across multiple platforms.
              </p>
              <Link
                href="/contact"
                className="bg-white text-black px-5 py-2 rounded-lg font-medium"
              >
                Get Started
              </Link>
            </div>

          </article>

          {/* 🔥 SIDEBAR */}
          <aside className="lg:col-span-1">

            <div className="sticky top-24 space-y-6">

              {/* CTA BOX */}
              <div className="p-5 border rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">
                  Get More Job Responses
                </h4>
                <p className="text-sm mb-3">
                  Let us handle your job applications professionally.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-black text-white py-2 rounded-lg"
                >
                  Apply Now
                </Link>
              </div>

              {/* SIMPLE RELATED (placeholder) */}
              <div className="p-5 border rounded-xl">
                <h4 className="font-semibold mb-3">Related Posts</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog">View More Articles →</Link>
                  </li>
                </ul>
              </div>

            </div>

          </aside>

        </div>
      </Container>
    </main>
  );
}