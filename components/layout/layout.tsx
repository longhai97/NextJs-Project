import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';

export type Props = {
  children: React.ReactNode
}
function Layout(props:Props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
