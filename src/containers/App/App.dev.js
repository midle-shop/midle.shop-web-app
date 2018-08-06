import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import mlURL from 'multi-languages-url';
//import Loading from '../components/Loading';

import { deviceScreenSizeTypeChanged, deviceSetDid } from '../../store/actions/device';
import { getScreenSizeType } from '../../util/device-info';
//import apiDevice from '../../api/device';

import DevTools from '../../components/DevTools';


//const APIDevice = new apiDevice();

const ResponsiveContainer = Loadable({
  loader: () => import('../ResponsiveContainer'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});


const HomepageLayout = Loadable({
  loader: () => import('../../layouts/HomepageLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const ContactsLayout = Loadable({
  loader: () => import('../../layouts/ContactsLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});


const PurposeLayout = Loadable({
  loader: () => import('../../layouts/PurposeLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const WhitepaperLayout = Loadable({
  loader: () => import('../../layouts/WhitepaperLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const RoadmapLayout = Loadable({
  loader: () => import('../../layouts/RoadmapLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const FAQLayout = Loadable({
  loader: () => import('../../layouts/FAQLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});


const LegalLayout = Loadable({
  loader: () => import('../../layouts/LegalLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const PrivacyPolicyLayout = Loadable({
  loader: () => import('../../layouts/PrivacyPolicyLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const CookiesLayout = Loadable({
  loader: () => import('../../layouts/CookiesLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});
const TermsLayout = Loadable({
  loader: () => import('../../layouts/TermsLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});


const PageNotFoundLayout = Loadable({
  loader: () => import('../../layouts/PageNotFoundLayout'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});

const ModalNewsletter = Loadable({
  loader: () => import('../../components/ModalNewsletter'),
  loading: () => null,
  delay: 300,
  // timeout: 10000, // 10 seconds
});




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: undefined,
      scrollTop: 0,
      scrollLeft: 0,
    };

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleVisibilityChange();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('visibilitychange', this.handleVisibilityChange);
    /*
    if (this.props.did === null) {
      APIDevice.deviceInit()
      .then((response) => {
        if (response.result) {
          if (typeof response.result === "string") {
            this.props.handleDeviceSetDid(response.result);
          }
        }
      }).catch((error) => {
        console.error(error);
      });
    } else {
      APIDevice.deviceCheckDid(this.props.did)
      .then((response) => {
        console.log('deviceCheckDid response')
        console.log(response)
      }).catch((error) => {
        console.error(error);
      });
    }
    */

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleVisibilityChange() {
    let hiddenStatus;
    if (document['hidden']) {
      hiddenStatus= true;
    } else {
      hiddenStatus = false;
    }

    if (this.state.hidden !== hiddenStatus) {
      this.setState({ hidden: hiddenStatus });
    }
  }

  handleResize() {
    if (!this.state.hidden) {
      let newDeviceScreenSizeType = getScreenSizeType();
      if (this.props.deviceScreenSizeType !== newDeviceScreenSizeType && !this.state.hidden) {
        this.props.handleDeviceScreenSizeTypeChanged(newDeviceScreenSizeType);
      }
    }
  }
  /*
  shouldComponentUpdate(nextProps) {
    if (this.props.pathname !== nextProps.pathname) return true;
    //else if (this.props.language !== nextProps.language) return true;
    else return false;
  }
  */

  render() {
    //console.log('|--> App render')
    const { t, language, languages, pathname } = this.props;
    const ml = new mlURL({languages: languages, pathname: pathname});

    return (
      <div id='app'>
        <Helmet>
          <html lang={language} />
          <title>{t('projectName')}</title>
        </Helmet>
        <ResponsiveContainer>
          <Switch>
            <Route exact path={ml.url('/')} component={HomepageLayout} />
            <Route exact path={ml.url('/purpose')} component={PurposeLayout} />
            <Route exact path={ml.url('/whitepaper')} component={WhitepaperLayout} />
            <Route exact path={ml.url('/roadmap')} component={RoadmapLayout} />
            <Route exact path={ml.url('/faq')} component={FAQLayout} />
            {/*<Route exact path={ml.url('/team')} component={HomepageLayout} />*/}
            <Route exact path={ml.url('/contacts')} component={ContactsLayout} />
            {/*<Route exact path={ml.url('/newsletter')} component={HomepageLayout} />*/}

            {/*footer*/}
            {/*<Route exact path={ml.url('/careers')} component={HomepageLayout} />*/}

            <Route exact path={ml.url('/legal')} component={LegalLayout} />
            <Route exact path={ml.url('/legal/privacy')} component={PrivacyPolicyLayout} />
            <Route exact path={ml.url('/legal/privacy/cookies')} component={CookiesLayout} />
            <Route exact path={ml.url('/legal/terms')} component={TermsLayout} />

            <Route component={PageNotFoundLayout}/>
          </Switch>
        </ResponsiveContainer>
        <ModalNewsletter />
        { window.__REDUX_DEVTOOLS_EXTENSION__ ? null : <DevTools /> }
      </div>
    );
  }
};


function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    deviceScreenSizeType: state.device.screen_size_type,
    //did: state.device.did,
  };
}
function mapDispatchToProps (dispatch) {
  return {
    handleDeviceScreenSizeTypeChanged: (newDeviceScreenSizeType) => {
      dispatch(deviceScreenSizeTypeChanged(newDeviceScreenSizeType));
    },
    handleDeviceSetDid: (did) => {
      dispatch(deviceSetDid(did));
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('main')(App)
  )
);
