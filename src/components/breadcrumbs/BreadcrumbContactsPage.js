import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Breadcrumb } from 'semantic-ui-react';
import mlURL from 'multi-languages-url';
import { Link } from 'react-router-dom';



const BreadcrumbContactsPage = (props) => {
  //console.log('|--> BreadcrumbContactsPage render')
  const { t, languages, pathname } = props;
  const ml = new mlURL({languages: languages, pathname: pathname});

  return(
    <Breadcrumb style={{marginTop: '1em', marginBottom: '1em',}} size={props.size ? props.size : undefined}>
      <Breadcrumb.Section as={Link} to={ml.url('/')}>{t('menu.home')}</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>{t('footer.contacts')}</Breadcrumb.Section>
    </Breadcrumb>
  );
}
function mapStateToPropsBC (state) {
  return {
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
  };
}

export default hot(module)(
  connect(mapStateToPropsBC)(
    translate('main')(BreadcrumbContactsPage)
  )
);
