'use client';

import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

import { Layout } from '../components/Layout';

type LinkData = {
  name: string;
  url: string;
};

type ListLink = {
  cv_en: LinkData;
  resume: LinkData;
};
type ListLinkKey = keyof ListLink;
type IndexPageProps = {};
export default function HomePage({}: IndexPageProps): React.JSX.Element {
  const links: ListLink = {
    cv_en: {
      name: 'CV.pdf',
      url: '/cv/CV Afif Abdillah Jusuf_en.pdf',
    },
    resume: {
      name: 'Resume.pdf',
      url: '/resume/Resume Afif Abdillah Jusuf.pdf',
    },
  };

  return (
    <Layout home={true}>
      <Flex direction='column' justifyContent='flex-start' alignItems='center'>
        <Text fontSize='xl' pb='4'>
          Hello, my name is Afif, just call me Apep. My Professional skill are a
          Full-Stack developer and have a much year of experiences especially on
          Web Based Program.
        </Text>
        <Text fontSize='xl'>
          Contact me if you need anything on me, list on the below.
        </Text>
        <Box mx='auto'>
          <Flex alignItems='center' justifyContent='center' wrap='wrap'>
            <Button
              aria-label='My Facebook'
              colorScheme='facebook'
              my='4'
              mx='1'
              onClick={() =>
                window.open('https://fb.me/afifabdillahj', '_target')
              }>
              <FaFacebook />
            </Button>
            <Button
              aria-label='My Twitter'
              colorScheme='twitter'
              my='4'
              mx='1'
              onClick={() =>
                window.open('https://twitter.com/bungambohlah', '_target')
              }>
              <FaTwitter />
            </Button>
            <Button
              aria-label='My Github'
              colorScheme='github'
              my='4'
              mx='1'
              onClick={() =>
                window.open('https://github.com/bungambohlah', '_target')
              }>
              <FaGithub />
            </Button>
            <Button
              aria-label='My Linkedin'
              colorScheme='linkedin'
              mx='1'
              onClick={() =>
                window.open('https://www.linkedin.com/in/afifjusuf/', '_target')
              }>
              <FaLinkedin />
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* CV & Resume */}
      <section style={{ padding: '24px 0' }}>
        <Heading as='h2' size='lg' mb={6}>
          CV And Resume
        </Heading>
        <Flex direction='row' justifyContent='flex-start' alignItems='center'>
          {Object.keys(links).map((key) => {
            const keyLink = key as ListLinkKey;
            return (
              <Link
                key={key}
                href={links[keyLink].url}
                download={links[keyLink].name}
                prefetch={false}
                target='_blank'>
                <Button
                  aria-label={links[keyLink].name}
                  colorScheme='messenger'
                  mx='1'>
                  <Text fontSize='sm'>{links[keyLink].name}</Text>
                </Button>
              </Link>
            );
          })}
        </Flex>
      </section>

      {/* Portofolio */}
      <section style={{ padding: '24px 0' }}>
        <Heading as='h2' size='lg'>
          Portofolio
        </Heading>
        <Link href='https://portofolio.afifcodes.dev' prefetch={false}>
          <Button aria-label='Portofolio' colorScheme='messenger' my='4'>
            <Text fontSize='sm'>See My Portofolio</Text>
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
