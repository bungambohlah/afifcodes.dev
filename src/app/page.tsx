import type { Metadata } from 'next';

import HomePage from './HomePage';

export const metadata: Metadata = { title: 'Afif Codes Profile' };

export default async function IndexPage(): Promise<React.JSX.Element> {
  return <HomePage />;
}
