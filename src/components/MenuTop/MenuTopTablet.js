import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import mlURL from 'multi-languages-url';

import { sidebarToggle } from '../../store/actions/sidebar';


const MenuTopTablet = (props) => {
  //console.log('|--> MenuTopTablet render')
  const { t, languages, pathname } = props;
  const ml = new mlURL({languages: languages, pathname: pathname});

  return(
    <Menu as='nav' id='menu' size='large' fixed={'top'}
      inverted={(props.theme ==='night') ? true : false}
    >
      <Menu.Item onClick={props.handleSidebarToggle} >
        <Icon name='sidebar' fitted />
      </Menu.Item>

      <Menu.Item as={NavLink} to={ml.url('/whitepaper')}>
        <Icon name="file alternate" />{t('main:menu.whitepaper')}
      </Menu.Item>
      <Menu.Item as={NavLink} to={ml.url('/roadmap')}>
        <Icon name="map" />{t('main:menu.roadmap')}
      </Menu.Item>
      <Menu.Item as={NavLink} to={ml.url('/faq')}>
        <Icon name="question" />{t('main:menu.faq')}
      </Menu.Item>
      {/*
      <Menu.Item as={NavLink} to={ml.url('/blog')}>
        <Icon name="blogger b" />{t('main:menu.blog')}
      </Menu.Item>
      */}
    </Menu>
  );
}

function mapStateToProps (state) {
  return {
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    theme: state.config.theme,
  };
}
function mapDispatchToProps (dispatch) {
  return {
    handleSidebarToggle: () => {
      dispatch(sidebarToggle());
    }
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('main')(MenuTopTablet)
  )
);
