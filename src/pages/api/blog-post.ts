import { client } from '@sanity/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query;
    const data = await client.fetch(
      groq`*[_type=="blog" && slug.current==$slug][0] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
      { slug }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default handler;
