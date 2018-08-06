import React from 'react';
import { hot } from 'react-hot-loader';
import { Responsive } from 'semantic-ui-react';
import HeaderTablet from '../../components/Header/HeaderTablet';
import SidebarTablet from '../../components/Sidebar/SidebarTablet';


/**
* static onlyTablet = { minWidth: 768, maxWidth: 991 }
*/

const ResponsiveContainerTablet = (props) => {
  //console.log('|--> ResponsiveContainerTablet render')
  const { children } = props;

  return (
    <Responsive {...Responsive.onlyTablet} id='container' >
      <HeaderTablet />
      <SidebarTablet >
        {children}
      </SidebarTablet>
    </Responsive>
  );
}

export default hot(module)(ResponsiveContainerTablet);
