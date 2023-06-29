import '@styles/globals.scss';
import { ManagedUIContext } from '@contexts/managed-ui';
import { ModalUI } from '@components/modal/Modal';
import { SidebarUI } from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Metadata } from 'next';
import { Footer } from '@components/footer/Footer';
import { getPages } from '@sanity/sanity-utils';
import { NextAuthProvider } from '../provider';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Sanity Template',
    template: '%s | Next Sanity CMS',
  },
  description: 'Create Template with Next and Sanity',
  openGraph: {
    title: 'Next.js Sanity Template',
    description: 'Create Template with Next and Sanity',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    googleBot: {
      'index': true,
      'follow': true,
      'noimageindex': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://next-sanity-template-sigma.vercel.app/'),
  // icons: {
  //   icon: '/next.svg',
  //   shortcut: '/next.svg',
  //   apple: [{ url: '/next.svg' }, { url: '/next/svg', sizes: '180x180', type: 'image/svg' }],
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/next.svg',
  //   },
  // },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  themeColor: '#008080',
  generator: 'Next.js',
  category: 'technology',
  keywords: 'nextjs, react, sanity',
  // TODO: Verfiy site through google
  // verification: {
  //   google: 'google',
  // },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pages = await getPages();
  // NOTE: Links for dynamic pages
  // const links = pages.map((page) => {
  //   return { label: page.title, url: page.slug };
  // });

  const links = [
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ];
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextAuthProvider>
          <ManagedUIContext>
            <main className="flex flex-col items-center w-[100%] bg-white-500 text-black-500 relative overscroll-none">
              <Navbar
                links={links}
                format="Center links"
                logo={{
                  image: '/logo.svg',
                  shortImage: '/logo-short.png',
                  alt: 'NextGen WebWorks Logo',
                }}
              />
              {children}
              <Footer />
              <ModalUI />
              <SidebarUI />
            </main>
          </ManagedUIContext>
        </NextAuthProvider>
      </body>
    </html>
  );
}
