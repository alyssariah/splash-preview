import { type SchemaTypeDefinition } from 'sanity';
import blogPosts from './blog-posts';
import home from './home';
import about from './about';
import contact from './contact';
import { user, account, verificationToken } from 'next-auth-sanity/schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, contact, blogPosts, user, account, verificationToken],
};
