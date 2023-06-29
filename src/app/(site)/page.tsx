import animationData from '../../../public/developer-animation.json';
import LottieComp from '@/components/lottie/Lottie';
import { BlogPost } from '@/types/BlogPost';
import { Home } from '@/types/Home';
import { Button } from '@components/button/Button';
import { getHomePage } from '@sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { BsTagFill } from 'react-icons/bs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const homeContent = await getHomePage();

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8">
        <div className="bg-white-600 mx-4 p-8 sm:p-12 md:p-20 min-h-[75vh] rounded-lg flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-[500px]">
            <p>{homeContent?.firstSection?.subheading}</p>
            <h1 className="text-6xl font-bold">{homeContent?.firstSection?.heading}</h1>
            <p className="mt-4 mb-8">{homeContent?.firstSection?.tagline}</p>
            <Button
              label={homeContent?.firstSection?.callToAction?.buttonText}
              configuration="outlined"
              size="large"
              modal={true}
            />
          </div>
          <div>
            <div className="max-w-[500px]">
              <LottieComp animationData={animationData} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] py-24 sm:py-12">
          <h2 className="text-3xl font-bold mb-4">{homeContent?.selectBlogPosts?.title}</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
            {homeContent?.selectBlogPosts?.blogPosts?.map((post: BlogPost) => {
              return (
                <Link
                  href={'/blog/' + post.slug}
                  key={post._id}
                  className="flex flex-col items-center justify-center"
                >
                  {post.image && (
                    <div className="h-[320px] w-[320px] border border-black-50 rounded-lg shadow-4 overflow-hidden relative">
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
        </div>
        <div className="bg-blue-50 mx-4 p-8 sm:p-12 lg:p-16 rounded-lg flex flex-col justify-center items-center">
          <BsTagFill className="text-blue-500 text-4xl" />
          <h3 className="text-4xl font-bold mt-4 mb-8 max-w-[600px] text-center">
            {homeContent?.newsletter?.title}
          </h3>
          <Button
            label={homeContent?.newsletter?.callToAction?.buttonText}
            configuration="outlined"
            size="medium"
            modal={true}
          />
        </div>
      </div>
    </div>
  );
}
