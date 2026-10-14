import { Box } from '@chakra-ui/react';

import ButtonTriggerColorMode from './ButtonTriggerColorMode';

export default function Nav(): React.JSX.Element {
  return (
    <nav>
      <Box mt='4' position='absolute' right='4'>
        <ButtonTriggerColorMode />
      </Box>
    </nav>
  );
}
