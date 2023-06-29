import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

export interface PortableTextProps {
  content: PortableTextBlock[];
}

export default function SanityPortableText({ content }: PortableTextProps) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <div className="w-[100%] h-[300px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value.imageURL}
            width="100%"
            height="100%"
            className="object-cover"
            alt="blog image"
          />
        </div>
      ),
      callToAction: ({ value, isInline }: any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value?.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="text-black-500 p-4 portable-text">
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
}
