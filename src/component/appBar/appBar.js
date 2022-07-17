import {
  useContext, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AppBarContext } from './appBarMount';

function AppBar({ children }) {
  const appBar = useContext(AppBarContext);
  const [appBarEl, setAppBarEl] = useState(null);

  useEffect(() => {
    setAppBarEl(appBar.current);
  });

  return appBarEl
    ? createPortal(children, appBarEl)
    : null;
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppBar;
