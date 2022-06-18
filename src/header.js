import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Button component={Link} to="calendar">Календарь</Button>
      <Button component={Link} to="ideas">Идеи</Button>
      <Button component={Link} to="profile">Профиль</Button>
    </header>
  );
}

export default Header;
