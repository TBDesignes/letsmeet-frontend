import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoCalendarNumberOutline, IoPersonCircleOutline, IoFileTrayFullOutline } from 'react-icons/io5/';
import AppBarMount from './component/appBar/appBarMount';
import IconLink from './component/iconLink';
import Sidebar from './component/sidebar';

function Layout() {
  return (
    <AppBarMount>
      <Sidebar items={(
        <>
          <IconLink icon={IoCalendarNumberOutline} to="/" />
          <IconLink icon={IoFileTrayFullOutline} to="ideas" />
          <IconLink icon={IoPersonCircleOutline} to="profile" />
        </>
        )}
      >
        <Outlet />
      </Sidebar>
    </AppBarMount>
  );
}

export default Layout;
