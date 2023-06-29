import { client } from '@sanity/lib/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = req.body;

    const document = {
      _type: 'contact',
      name,
      email,
      message,
    };

    await client.create(document);

    res.status(200).json({ message: 'Successfully submitted contact form!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default handler;
