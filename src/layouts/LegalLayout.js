import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Loader, Dimmer } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import MainContainer from '../components/MainContainer';


const MD = Loadable({
  loader: () => import('../components/MD'),
  loading: () => null,
});

const BreadcrumbLegalPage = Loadable({
  loader: () => import('../components/breadcrumbs/BreadcrumbLegalPage'),
  loading: () => null,
});
const Footer = Loadable({
  loader: () => import('../components/Footer'),
  loading: () => null,
});


class LegalLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: 'legal',
      text: null,
    };
    this.getMDContent = this.getMDContent.bind(this);
  }

  componentDidMount() {
    this.getMDContent();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.language !== prevProps.language) {
      this.getMDContent();
    }
  }

  getMDContent () {
    fetch(`/static/documents/${this.props.language}/${this.state.document}/README.md`)
    .then((response) => {
      return response.text();
    }).then((text) => {
      this.setState({text: text});
    });
  }

  render() {
    //console.log('|--> LegalLayout render')
    const { t } = this.props;

    return (
      <MainContainer
        breadcrumb={BreadcrumbLegalPage}
        footer={Footer}
      >
        <Helmet>
          <title>{t('footer.legal')} | {t('projectName')}</title>
        </Helmet>
        {
          (this.state.text === null)
          ? <Dimmer active inverted><Loader size='large'>{t('loading')}</Loader></Dimmer>
          : <MD md={this.state.text} />
        }
      </MainContainer>
    );
  }
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
  };
}


export default hot(module)(
  connect(mapStateToProps)(
    translate('main')(LegalLayout)
  )
);
