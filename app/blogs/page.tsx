import Container from '@/app/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import AppSection from '@/app/components/ui/AppSection';
import { getPosts } from '@/lib/api';

export const revalidate = 60;

export const metadata = {
  title: 'Blogs | Biding Services',
  description:
    'Explore job application strategies, career tips, and insights.',
  alternates: {
    canonical: 'https://bidingservices.com/blogs',
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="py-20">

      <AppSection>
        <Container>
          <h1 className="text-4xl text-white text-center mb-12">
            Blog & Insights
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            {posts.map((post: any) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden hover:border-purple-500 transition">

                  {/* IMAGE */}
                  {post.featuredImage?.node?.sourceUrl && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
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

                    <h2 className="text-white font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    <div
                      className="text-sm text-gray-400 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                    />

                  </div>
                </div>
              </Link>
            ))}

          </div>
        </Container>
      </AppSection>

    </main>
  );
}