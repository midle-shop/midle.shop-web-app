import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const InfoTopComputer = Loadable({
  loader: () => import('./InfoTopComputer'),
  loading: () => null,
});


const InfoTop = (props) => {
  //console.log('|--> InfoTop render')
  const { deviceScreenSizeType } = props;

  if (deviceScreenSizeType === 'computer') {
    return (<InfoTopComputer />);
  } else if (deviceScreenSizeType === 'largeScreen') {
    return (<InfoTopComputer />);
  } else if (deviceScreenSizeType === 'wideScreen') {
    return (<InfoTopComputer />);
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
  connect(mapStateToProps)(InfoTop)
);
