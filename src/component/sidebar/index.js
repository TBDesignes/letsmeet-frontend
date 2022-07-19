import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ children, items }) {
  return (
    <Flex
      flexGrow="1"
      overflow="auto"
    >
      <Stack
        align="center"
        direction="column"
        spacing="4"
        bg="app.regular"
        w="60px"
        p="2"
      >
        {items}
      </Stack>
      <Box
        overflow="auto"
        w="full"
        bg="app.light"
      >
        {children}
      </Box>
    </Flex>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
};

export default Sidebar;
