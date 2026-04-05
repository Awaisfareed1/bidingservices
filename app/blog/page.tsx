import Link from 'next/link';
import { getPosts } from '@/lib/api';
import Container from '@/app/components/Container';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="py-10">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>

        {posts.length === 0 && (
          <p className="text-gray-500">No posts available</p>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-semibold">
                  {post.title}
                </h2>
              </Link>

              <div
                className="text-sm text-gray-600 mt-2 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}