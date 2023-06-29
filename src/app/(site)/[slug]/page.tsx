import { PortableText } from '@portabletext/react';
import { getPage } from '@sanity/sanity-utils';

export interface Props {
  params: { slug: string };
}
export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8 text-black-500">
        <h1>{page?.title}</h1>

        <div className="mt-8 text-black-500">
          <PortableText value={page?.content} />
        </div>
      </div>
    </div>
  );
}
