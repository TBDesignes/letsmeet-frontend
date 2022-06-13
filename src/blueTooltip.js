import React from 'react';
import {
  styled,
  Tooltip,
} from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';

const BlueTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.textContrast,
    boxShadow: theme.shadows[2],
    fontSize: 11,
  },
}));

export default BlueTooltip;
