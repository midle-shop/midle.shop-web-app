import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Divider, Icon, Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import mlURL from 'multi-languages-url';

import socialLinks from '../../constants/social-networks-links';
import { modalNewsletterOpen } from '../../store/actions/modalNewsletter';

const LanguageToogler = Loadable({
  loader: () => import('../LanguageToogler'),
  loading: () => null,
});
const ThemeToogler = Loadable({
  loader: () => import('../ThemeToogler'),
  loading: () => null,
});


const SidebarMenu = (props) => {
  //console.log('|--> SidebarMenu render')
  const { t, languages, pathname, theme, handleModalNewsletterOpen } = props;
  const ml = new mlURL({languages: languages, pathname: pathname});

  return (
    <div>
      <Menu.Item as={NavLink} to={ml.url('/whitepaper')}>
        <Icon name="file alternate" />{t('sidebar.whitepaper')}
      </Menu.Item>
      <Menu.Item as={NavLink} to={ml.url('/roadmap')}>
        <Icon name="map" />{t('sidebar.roadmap')}
      </Menu.Item>
      <Menu.Item as={NavLink} to={ml.url('/faq')}>
        <Icon name="question" />{t('sidebar.faq')}
      </Menu.Item>
      {/*
      <Menu.Item as={NavLink} to={ml.url('/blog')}>
        <Icon name="blogger b" />{t('sidebar.blog')}
      </Menu.Item>
      */}
      <Divider hidden/>
      <Menu.Item>
        <ThemeToogler />
        <Icon name={ (theme ==='night') ? 'moon' : 'sun' } />
      </Menu.Item>
      <Menu.Item>
        <LanguageToogler />
        <Icon name='translate' />
      </Menu.Item>
      <Menu.Item onClick={handleModalNewsletterOpen}>
        <Icon name='announcement' />{t('sidebar.newsletter')}
      </Menu.Item>

      <Menu.Item>
        {
          Object.keys(socialLinks).map((item, index) =>
            <Button key={index} className={'icon'}
              inverted={(theme ==='night') ? true : false}
              as={'a'} href={socialLinks[item].url} target="_blank" text=' '
            >
              <Icon name={socialLinks[item].icon} size='large' fitted/>
            </Button>
          )
        }
      </Menu.Item>
    </div>
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
    handleModalNewsletterOpen: () => {
      dispatch(modalNewsletterOpen());
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('main')(SidebarMenu)
  )
);
