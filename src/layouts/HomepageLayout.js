import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import MainContainer from '../components/MainContainer';


const MD = Loadable({
  loader: () => import('../components/MD'),
  loading: () => null,
});
/*
const HeadingHomepage = Loadable({
  loader: () => import('../components/headings/HeadingHomepage'),
  loading: () => null,
});
*/
const Footer = Loadable({
  loader: () => import('../components/Footer'),
  loading: () => null,
});





class HomepageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: "whitepaper",
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
    //console.log('|--> HomepageLayout render')
    const { t, deviceScreenSizeType } = this.props;
    // heading={HeadingHomepage}
    return (
      <MainContainer
        footer={Footer}
      >
        <Helmet>
          <title>{t('projectName')} - {t('description')}</title>
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
    deviceScreenSizeType: state.device.screen_size_type,
  };
}
function mapDispatchToProps (dispatch) {
  return {
  }
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('layout_homepage')(HomepageLayout)
  )
);
