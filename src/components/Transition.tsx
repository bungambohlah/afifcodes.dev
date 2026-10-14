import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import ChakraFramerBox from './framermotion/ChakraFramerBox';

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};

export default function Transition({
  children,
}: PropsWithChildren): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div className='pageTransitionEffect'>
      <AnimatePresence initial={false} exitBeforeEnter>
        <ChakraFramerBox
          key={pathname}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'>
          {children}
        </ChakraFramerBox>
      </AnimatePresence>
    </div>
  );
}
