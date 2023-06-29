import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/BlogPost';
import { getBlogPosts } from '@sanity/sanity-utils';

export default async function Blog() {
  const blogPosts = await getBlogPosts(0, 6);

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4">News & Updates</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {blogPosts?.map((post: BlogPost) => {
            return (
              <Link
                href={'/blog/' + post.slug}
                key={post._id}
                className="flex flex-col items-center justify-center"
              >
                {post.image && (
                  <div className="h-[300px] sm:h-[320px] w-[300px] sm:w-[320px] border border-black-50 rounded-lg shadow-4 overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.name}
                      fill
                      className="object-cover h-[100%] border-gray-500"
                    />
                  </div>
                )}
                <div className="py-4 text-center">
                  <p className="font-bold">{post.name}</p>
                  <p className="text-underline text-sm text-blue-500">Read Article</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div>TODO: Create Pagination Component</div>
      </div>
    </div>
  );
}
