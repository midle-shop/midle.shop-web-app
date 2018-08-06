import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const SidebarMobile = Loadable({
  loader: () => import('./SidebarMobile'),
  loading: () => null,
});
const SidebarTablet = Loadable({
  loader: () => import('./SidebarTablet'),
  loading: () => null,
});



const Sidebar = (props) => {
  //console.log('|--> Sidebar render')
  const { deviceScreenSizeType } = props;

  if (deviceScreenSizeType === 'mobile') {
    return (<SidebarMobile {...props} />);
  } else if (deviceScreenSizeType === 'tablet') {
    return (<SidebarTablet {...props} />);
  } else {
    return null;
  }
}

function mapStateToProps (state) {
  return {
    deviceScreenSizeType: state.device.screen_size_type,
  };
}

export default hot(module)(
  connect(mapStateToProps)(Sidebar)
);
