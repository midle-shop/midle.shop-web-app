import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const HeaderMobile = Loadable({
  loader: () => import('./HeaderMobile'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const HeaderTablet = Loadable({
  loader: () => import('./HeaderTablet'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const HeaderComputer = Loadable({
  loader: () => import('./HeaderComputer'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});


const Header = ({deviceScreenSizeType}) => {
  //console.log('|--> Header render')

  if (deviceScreenSizeType === 'mobile') {
    return (<HeaderMobile />);
  } else if (deviceScreenSizeType === 'tablet') {
    return (<HeaderTablet />);
  } else if (deviceScreenSizeType === 'computer') {
    return (<HeaderComputer />);
  } else if (deviceScreenSizeType === 'largeScreen') {
    return (<HeaderComputer />);
  } else if (deviceScreenSizeType === 'wideScreen') {
    return (<HeaderComputer />);
  } else {
    return null;
  }
}

function mapStateToProps (state) {
  return {
    location: state.router.location,
    deviceScreenSizeType: state.device.screen_size_type,
  };
}

export default hot(module)(
  connect(mapStateToProps)(Header)
);
