import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Responsive, Container, Header, Segment
} from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';

class PageNotFoundLayout extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.language !== nextProps.language) return true;
    return false;
  }

  render() {
    //console.log('|--> PageNotFoundLayout render')
    const { t, languages, pathname } = this.props;
    const ml = new mlURL({languages: languages, pathname: pathname});

    return (
      <Responsive >
        <Helmet>
          <title>{t('title')} - {t('projectName')}</title>
        </Helmet>
        <Container >
          <Segment vertical textAlign='center' style={{ padding: '5em 0em' }}>
            <Header as={'h1'}>{t('title')}</Header>
            <Link to={ml.url('/')}>{t('goToHomepage')}</Link>
          </Segment>
        </Container>
      </Responsive>
    );
  }
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    //deviceScreenSizeType: state.device.screen_size_type,
  };
}

export default hot(module)(
  connect(mapStateToProps)(
    translate('page_not_found_layout')(PageNotFoundLayout)
  )
);
