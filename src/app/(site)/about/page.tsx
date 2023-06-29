import SanityPortableText from '@/components/portable-text/PortableText';
import { getAboutPage } from '@sanity/sanity-utils';

export default async function AboutPage() {
  const aboutContent = await getAboutPage();

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1024px] w-[100%] min-h-[calc(100vh-60px)] my-4 text-black-500">
        <SanityPortableText content={aboutContent?.content} />
      </div>
    </div>
  );
}
