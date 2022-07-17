import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  IoCalendarNumberOutline,
  IoPersonCircleOutline,
  IoBookmarksOutline,
  IoChatbubbleEllipsesOutline,
} from 'react-icons/io5';
import { Box } from '@chakra-ui/react';
import AppBarMount from './component/appBar/appBarMount';
import IconLink from './component/iconLink';
import Sidebar from './component/sidebar';

function Layout() {
  return (
    <AppBarMount>
      <Sidebar items={(
        <>
          <IconLink icon={IoCalendarNumberOutline} to="/" />
          <IconLink icon={IoBookmarksOutline} to="ideas" />
          <IconLink icon={IoChatbubbleEllipsesOutline} to="chat" />
          <IconLink icon={IoPersonCircleOutline} to="profile" />
        </>
        )}
      >
        <Box
          bg="app.light"
          w="100%"
          h="100%"
        >
          <Outlet />
        </Box>
      </Sidebar>
    </AppBarMount>
  );
}

export default Layout;
