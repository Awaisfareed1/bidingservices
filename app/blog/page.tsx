import Link from 'next/link';
import { getPosts } from '../../lib/api';
import Container from './../components/Container';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="py-10">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Blog</h1>

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
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}