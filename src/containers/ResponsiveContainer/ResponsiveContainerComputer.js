import React from 'react';
import { hot } from 'react-hot-loader';
import { Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import HeaderComputer from '../../components/Header/HeaderComputer';


/**
* static onlyComputer = { minWidth: 992, max-width: 1199px }
*/

const ResponsiveContainerComputer = (props) => {
  //console.log('|--> ResponsiveContainerComputer rernder');
  const { children } = props;

  return (
    <Responsive id='container' {...Responsive.onlyComputer} >
      <HeaderComputer/>
      {children}
    </Responsive>
  );
}


function mapStateToProps (state) {
  return {
    theme: state.config.theme,
  };
}

export default hot(module)(
  connect(mapStateToProps)(ResponsiveContainerComputer)
);
