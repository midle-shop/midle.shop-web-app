import React from 'react';
import { hot } from 'react-hot-loader';
import { Responsive } from 'semantic-ui-react';
import HeaderMobile from '../../components/Header/HeaderMobile';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';


/**
* static onlyMobile = { minWidth: 320, maxWidth: 767 }
*/

const ResponsiveContainerMobile = (props) => {
  //console.log('|--> ResponsiveContainerMobile render')
  const { children } = props;

  return (
    <Responsive {...Responsive.onlyMobile} id='container'>
      <HeaderMobile />
      <SidebarMobile >
        {children}
      </SidebarMobile>
    </Responsive>
  );
}

export default hot(module)(ResponsiveContainerMobile);
