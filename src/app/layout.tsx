import type { Metadata } from 'next';
import { SEO } from '../constants/seo-constant';
import Providers from './providers';
import './global.css';

const {
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  FAVICON_LINK,
} = SEO;

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_CANONICAL),

  title: {
    default: DEFAULT_TITLE,
    template: DEFAULT_TITLE_TEMPLATE,
  },

  description: DEFAULT_DESCRIPTION,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DEFAULT_CANONICAL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },

  icons: {
    shortcut: FAVICON_LINK,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
