import { Flex } from '@chakra-ui/react';
import React, { createContext, useRef } from 'react';
import PropTypes from 'prop-types';

export const AppBarContext = createContext();

function AppBarMount({ children }) {
  const t = useRef(null);

  return (
    <AppBarContext.Provider value={t}>
      <Flex
        h="full"
        direction="column"
      >
        <Flex
          bg="app.dark"
          boxShadow="md"
          p="2"
        >
          <div ref={t} />
        </Flex>
        {children}
      </Flex>
    </AppBarContext.Provider>
  );
}

AppBarMount.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppBarMount;
