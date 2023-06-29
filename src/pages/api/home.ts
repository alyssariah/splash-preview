import { Home } from '@/types/Home';
import { client } from '@sanity/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await client.fetch<Home>(
      groq`*[_type=="home"][0] {
        firstSection,
        selectBlogPosts {
          title,
          blogPosts[]->{_id, _createdAt, name, "slug": slug.current, "image": image.asset->url}
        },
        newsletter
      }`
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default handler;
