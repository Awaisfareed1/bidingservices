import Link from 'next/link';
import Image from 'next/image';
import Container from '@/app/components/Container';
import { gql, GraphQLClient } from 'graphql-request';
import AppBlogSection from '../components/ui/AppBlogSection';

export const metadata = {
  title: 'Blogs | Bidding Services',
  description:
    'Read our latest insights on job searching, LinkedIn strategies, resume tips and more to get more responses.',
  alternates: {
    canonical: 'https://bidingservices.com/blogs',
  },
};

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://shop.bidingservices.com/graphql';

const client = new GraphQLClient(endpoint);

export const revalidate = 60;

const POSTS_PER_PAGE = 6;

// ✅ GET POSTS
async function getPosts() {
  const query = gql`
    {
      posts(first: 50) {
        nodes {
          id
          title
          slug
          excerpt
          date
          categories {
            nodes {
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
  return data?.posts?.nodes || [];
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const allPosts = await getPosts();

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  // ✅ Recent posts for sidebar
  const recentPosts = allPosts.slice(0, 3);

  return (
    <main className="py-12">
      <Container>

        {/* HEADER */}
        <AppBlogSection>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Insights & Strategies
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl">
              Learn how to get more job responses and land opportunities.
            </p>
          </div>
        </AppBlogSection>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-4 gap-10">

          {/* BLOG GRID */}
          <div className="lg:col-span-3">
            <AppBlogSection>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

                {posts.map((post: any) => (
                  <div
                    key={post.id}
                    className="group bg-[#111] border border-[#222] rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition"
                  >

                    {/* IMAGE */}
                    {post.featuredImage?.node?.sourceUrl && (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        width={600}
                        height={350}
                        className="w-full h-48 object-cover group-hover:scale-105 transition"
                        unoptimized
                      />
                    )}

                    <div className="p-5">

                      {/* CATEGORY */}
                      {post.categories?.nodes?.[0] && (
                        <p className="text-xs text-purple-400 mb-2">
                          {post.categories.nodes[0].name}
                        </p>
                      )}

                      {/* DATE */}
                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(post.date).toDateString()}
                      </p>

                      {/* TITLE */}
                      <Link href={`/blogs/${post.slug}`}>
                        <h2 className="text-lg font-semibold text-white group-hover:underline">
                          {post.title}
                        </h2>
                      </Link>

                      {/* EXCERPT */}
                      <div
                        className="text-sm text-gray-400 mt-2 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />

                    </div>
                  </div>
                ))}

              </div>
            </AppBlogSection>
          </div>

          {/* 🔥 SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 ">

              <h3 className="text-black font-semibold mb-4">
                Recent Posts
              </h3>

              {recentPosts.map((post: any) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                  <div className="flex gap-3 bg-[#111] border border-[#222] p-3 rounded-lg hover:border-purple-500 transition mb-5">

                    {/* IMAGE */}
                    {post.featuredImage?.node?.sourceUrl && (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-md"
                        unoptimized
                      />
                    )}

                    <div>
                      <p className="text-sm text-white line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.date).toDateString()}
                      </p>
                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>

        </div>

        {/* 🔥 PAGINATION */}
        <div className="flex justify-center gap-4 mt-12">

          {currentPage > 1 && (
            <Link
              href={`/blogs?page=${currentPage - 1}`}
              className="px-4 py-2 border border-[#222] text-white rounded-lg hover:border-purple-500"
            >
              ← Prev
            </Link>
          )}

          {currentPage < totalPages && (
            <Link
              href={`/blogs?page=${currentPage + 1}`}
              className="px-4 py-2 border border-[#222] text-white rounded-lg hover:border-purple-500"
            >
              Next →
            </Link>
          )}

        </div>

      </Container>
    </main>
  );
}