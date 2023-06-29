import GithubProvider from 'next-auth/providers/github';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '@sanity/lib/client';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    SanityCredentials(client),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(client),
};
