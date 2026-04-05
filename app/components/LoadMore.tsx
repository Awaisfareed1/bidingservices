'use client';

import { useState } from 'react';

export default function LoadMore({ allPosts }: any) {
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  return (
    <>
      {allPosts.slice(0, visible).map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}

      {visible < allPosts.length && (
        <button
          onClick={loadMore}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg"
        >
          Load More
        </button>
      )}
    </>
  );
}