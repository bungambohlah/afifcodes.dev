import { useEffect, useRef, useState } from 'react';

export type LinkedinBadgeProps = {
  locale?: string | 'en_US';
  size?: string | 'medium';
  theme?: 'dark' | 'light';
  vanity?: string;
};

function new_script(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', (e) => {
      reject(e);
    });
    document.body.append(script);
  });
}

export default function LinkedinBadge({
  locale,
  size = 'medium',
  theme = 'light',
  vanity,
}: LinkedinBadgeProps): React.JSX.Element {
  const [scriptState, setScriptState] = useState('start');
  const badgeFrame = useRef(null);

  useEffect(() => {
    // Some synchronous code.

    void (async () => {
      try {
        await new_script('https://platform.linkedin.com/badges/js/profile.js');
        setScriptState('done');
      } catch {
        setScriptState('error');
      }
    })();
  }, []);

  useEffect(() => {
    if (scriptState === 'error') {
      const frame = badgeFrame.current as unknown as HTMLObjectElement;
      const note = document.createElement('em');
      note.textContent = 'please disable any adblock for more information';
      frame.append(note);
    }
  }, [scriptState]);

  return (
    <div
      ref={badgeFrame}
      className='badge-base LI-profile-badge'
      data-locale={locale}
      data-size={size}
      data-theme={theme}
      data-type='HORIZONTAL'
      data-vanity={vanity}
      data-version='v1'
    />
  );
}
