import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Header, List, Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import MainContainer from '../components/MainContainer';
import socialLinks from '../constants/social-networks-links';
import emails from '../constants/emails';


const BreadcrumbContactsPage = Loadable({
  loader: () => import('../components/breadcrumbs/BreadcrumbContactsPage'),
  loading: () => null,
});
const Footer = Loadable({
  loader: () => import('../components/Footer'),
  loading: () => null,
});


class ContactsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: 'faq',
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
    //console.log('|--> ContactsLayout render')
    const { t } = this.props;

    return (
      <MainContainer
        breadcrumb={BreadcrumbContactsPage}
        footer={Footer}
      >
        <Helmet>
          <title>{t('title')} | {t('projectName')}</title>
        </Helmet>
          <Header as='h4' content={t('emails')} />
          <List>
            <List.Item>
              {t('info')}: <a href={"mailto:" + emails.info.email} target="_blank">{emails.info.name}</a>
            </List.Item>
            <List.Item>
              {t('support')}: <a href={"mailto:" + emails.support.email} target="_blank">{emails.support.name}</a>
            </List.Item>
            <List.Item>
              {t('careers')}: <a href={"mailto:" + emails.careers.email} target="_blank">{emails.careers.name}</a>
            </List.Item>
            <List.Item>
              {t('press')}: <a href={"mailto:" + emails.press.email} target="_blank">{emails.press.name}</a>
            </List.Item>
          </List>

          <Header as='h4' content={t('socialNetworks')} />
          <List  >
            {
              Object.keys(socialLinks).map((item, index) =>
                <List.Item key={index}
                  as={'a'} href={socialLinks[item].url} target='_blank'
                >
                  <Icon name={socialLinks[item].icon}/> {socialLinks[item].name}
                </List.Item>
              )
            }
          </List>
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
    translate('layout_contacts')(ContactsLayout)
  )
);
