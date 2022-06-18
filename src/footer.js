import { styled } from '@mui/material';
import React from 'react';

const StyledFooter = styled('footer')({
  position: 'absolute',
  bottom: 0,
  padding: 8,
  width: '100%',
});

function Footer() {
  return (
    <StyledFooter>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" border="0" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
