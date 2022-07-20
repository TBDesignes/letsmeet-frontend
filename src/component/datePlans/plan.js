import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box, Flex, Heading, Text,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';

function Plan({
  title,
  description,
  date,
}) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Flex justifyContent="space-between" flexGrow="1">
          <Heading
            as="h4"
            size="md"
            color="app.accent"
          >
            {title}
          </Heading>
          <Box ml="2" color="app.accent">
            {date.toLocaleString(DateTime.TIME_24_SIMPLE)}
          </Box>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Text>{description}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

Plan.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(DateTime).isRequired,
};

export default Plan;
