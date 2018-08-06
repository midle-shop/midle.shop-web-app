import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Divider, Dimmer, Menu, Segment } from 'semantic-ui-react';
import Loadable from 'react-loadable';

import { sidebarClose } from '../../store/actions/sidebar';


const SidebarMenu = Loadable({
  loader: () => import('./SidebarMenu'),
  loading: () => null,
});



const SidebarMobile = (props) => {
  //console.log('|--> SidebarMobile render ')

  return (
    <div>
      <Menu id='sidebar' vertical pointing
        inverted={(props.theme ==='night') ? true : false}
        style={{
          position: 'fixed', zIndex: 100,
          display: props.sidebarOpened ? 'block' : 'none',
          overflowY: 'auto', overflowX: 'hidden',
          height: '100%', width: '260px', top: '42px',
        }}
      >
        <Divider hidden/>
        <SidebarMenu />
        <Divider hidden/>
      </Menu>

      <Dimmer.Dimmable
        as={Segment} dimmed={props.sidebarOpened } blurring
        style={{
          zIndex: 99, margin: '0px', padding: '0px', top: '42px',
          paddingLeft: props.sidebarOpened ? '260px' : '0px',
        }}
      >
        <Dimmer active={props.sidebarOpened } onClick={props.handlePusherClick}/>
        {props.children}
      </Dimmer.Dimmable>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    sidebarOpened: state.sidebar.opened,
    theme: state.config.theme,
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handlePusherClick: () => {
      dispatch(sidebarClose());
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(SidebarMobile)
);
