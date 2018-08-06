import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const MenuTopMobile = Loadable({
  loader: () => import('./MenuTopMobile'),
  loading: () => null,
});
const MenuTopTablet = Loadable({
  loader: () => import('./MenuTopTablet'),
  loading: () => null,
});
const MenuTopComputer = Loadable({
  loader: () => import('./MenuTopComputer'),
  loading: () => null,
});


const MenuTop = ({deviceScreenSizeType, fixed}) => {
  console.log('|--> MenuTop render')

  if (deviceScreenSizeType === 'mobile') {
    return (<MenuTopMobile />);
  } else if (deviceScreenSizeType === 'tablet') {
    return (<MenuTopTablet />);
  } else if (deviceScreenSizeType === 'computer') {
    return (<MenuTopComputer fixed={fixed}/>);
  } else if (deviceScreenSizeType === 'largeScreen') {
    return (<MenuTopComputer fixed={fixed}/>);
  } else if (deviceScreenSizeType === 'wideScreen') {
    return (<MenuTopComputer fixed={fixed}/>);
  } else {
    return null;
  }
}

function mapStateToProps (state) {
  return {
    deviceScreenSizeType: state.device.screen_size_type,
    pathname: state.router.location.pathname,
  };
}

export default hot(module)(
  connect(mapStateToProps)(MenuTop)
);
