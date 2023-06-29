import { client } from '@sanity/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await client.fetch(
      groq`*[_type=="about"][0] {
        content[] {
          ...,
          _type == "image" => {
            "imageURL": asset->url
          }
        }
      }`
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default handler;
