import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 } //only screen and (max-width: 1199px) and (min-width: 992px)
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/

const ResponsiveContainerMobile = Loadable({
  loader: () => import('./ResponsiveContainerMobile'),
  loading: () => null,
});
const ResponsiveContainerTablet = Loadable({
  loader: () => import('./ResponsiveContainerTablet'),
  loading: () => null,
});
const ResponsiveContainerComputer = Loadable({
  loader: () => import('./ResponsiveContainerComputer'),
  loading: () => null,
});
const ResponsiveContainerLargeScreen = Loadable({
  loader: () => import('./ResponsiveContainerLargeScreen'),
  loading: () => null,
});
const ResponsiveContainerWideScreen = Loadable({
  loader: () => import('./ResponsiveContainerWideScreen'),
  loading: () => null,
});


const ResponsiveContainer = (props) => {
  //console.log('|--> ResponsiveContainer render')
  const { deviceScreenSizeType }  = props;

  if (deviceScreenSizeType === 'mobile') {
    return (<ResponsiveContainerMobile {...props} />);
  } else if (deviceScreenSizeType === 'tablet') {
    return (<ResponsiveContainerTablet {...props} />);
  } else if (deviceScreenSizeType === 'computer') {
    return (<ResponsiveContainerComputer {...props} />);
  } else if (deviceScreenSizeType === 'largeScreen') {
    return (<ResponsiveContainerLargeScreen {...props} />);
  } else if (deviceScreenSizeType === 'wideScreen') {
    return (<ResponsiveContainerWideScreen {...props} />);
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
  connect(mapStateToProps)(ResponsiveContainer)
);
