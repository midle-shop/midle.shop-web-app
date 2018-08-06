import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const MenuTopMobile = Loadable({
  loader: () => import('../MenuTop/MenuTopMobile'),
  loading: () => null,
});


const HeaderMobile = () => {
  //console.log('|--> HeaderMobile render')

  return (
    <header id='header'>
      <MenuTopMobile />
    </header>
  );
}

function mapStateToProps (state) {
  return {
    location: state.router.location,
  };
}

export default hot(module)(
  connect(mapStateToProps)(HeaderMobile)
);
