import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';


const MenuTopTablet = Loadable({
  loader: () => import('../MenuTop/MenuTopTablet'),
  loading: () => null,
});


const HeaderTablet = () => {
  //console.log('|--> HeaderTablet render')

  return (
    <header id='header'>
      <MenuTopTablet />
    </header>
  );
}

function mapStateToProps (state) {
  return {
    location: state.router.location,
  };
}

export default hot(module)(
  connect(mapStateToProps)(HeaderTablet)
);
