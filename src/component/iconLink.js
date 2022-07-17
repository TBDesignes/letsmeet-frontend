import React from 'react';
import { Icon, Square } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function IconLink({ icon, to }) {
  return (
    <Link
      to={to}
      style={{ lineHeight: 0 }}
    >
      <Square
        size="46px"
        bg="app.white"
        rounded="sm"
        boxShadow="base"
        color="app.accent"
        _hover={{ bg: 'app.accent', color: 'app.light' }}
      >
        <Icon w="8" h="8" as={icon} />
      </Square>
    </Link>
  );
}

IconLink.propTypes = {
  icon: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default IconLink;
