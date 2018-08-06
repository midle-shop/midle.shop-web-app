import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import mlURL from 'multi-languages-url';

import { sidebarToggle } from '../../store/actions/sidebar';


class MenuTopMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: undefined,
      scrollTop: 0,
      scrollLeft: 0,
    };

  }

  render () {
    console.log('|--> MenuTopMobile render')
    const { languages, pathname } = this.props;
    const ml = new mlURL({languages: languages, pathname: pathname});

    return(
      <Menu as='nav' id='menu' size='large' fixed={'top'}
        inverted={(this.props.theme ==='night') ? true : false}
      >
        <Menu.Item onClick={this.props.handleSidebarToggle} >
          <Icon name='sidebar' fitted />
        </Menu.Item>

        <Menu.Item as={NavLink} to={ml.url('/whitepaper')}>
          <Icon name="file alternate" fitted/>
        </Menu.Item>
        <Menu.Item as={NavLink} to={ml.url('/roadmap')}>
          <Icon name="map" fitted/>
        </Menu.Item>
        <Menu.Item as={NavLink} to={ml.url('/faq')}>
          <Icon name="question" fitted/>
        </Menu.Item>
        {/*
        <Menu.Item as={NavLink} to={ml.url('/blog')}>
          <Icon name="blogger b" fitted />
        </Menu.Item>
        */}
      </Menu>
    );
  }
}

function mapStateTothisProps (state) {
  return {
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    theme: state.config.theme,
  };
}
function mapDispatchTothisProps (dispatch) {
  return {
    handleSidebarToggle: () => {
      dispatch(sidebarToggle());
    }
  };
}

export default hot(module)(
  connect(mapStateTothisProps, mapDispatchTothisProps)(MenuTopMobile)
);
