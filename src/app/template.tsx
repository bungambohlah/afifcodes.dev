'use client';

import { PropsWithChildren, useEffect } from 'react';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
});

export default function Template({
  children,
}: PropsWithChildren): React.JSX.Element {
  useEffect(() => {
    Router.events.on('routeChangeStart', progress.start);
    Router.events.on('routeChangeComplete', () => {
      progress.finish();
      window.scrollTo(0, 0);
    });
    Router.events.on('routeChangeError', progress.finish);
  }, []);

  return <>{children}</>;
}
