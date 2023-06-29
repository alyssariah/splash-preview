import { PortableText } from '@portabletext/react';
import { getBlogPost } from '@sanity/sanity-utils';
import Image from 'next/image';

type Props = {
  params: {
    post: string;
  };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getBlogPost(slug);

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1024px] w-[100%] min-h-[calc(100vh-60px)] my-8 px-4">
        <h1 className="text-5xl font-bold">{post.name}</h1>
        <p className="text-md">{new Date(post._createdAt).toDateString()}</p>
        <div className="w-[100%] h-[300px] overflow-hidden relative my-8">
          <Image src={post.image} alt={post.name} fill className=" object-cover" />
        </div>

        <div className="text-black-500 portable-text">
          <PortableText value={post.content} />
        </div>
      </div>
    </div>
  );
}
