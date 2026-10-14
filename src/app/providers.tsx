'use client';

import { ChakraProvider, Container } from '@chakra-ui/react';

import BgAnimation from '../components/animation/BgAnimation';
import Nav from '../components/Nav';
import Transition from '../components/Transition';
import system from '../styles/theme';
import { ColorModeProvider } from '../components/ui/color-mode';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <Nav />

        <Transition>
          <BgAnimation />
          <Container maxW='640px'>{children}</Container>
        </Transition>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
