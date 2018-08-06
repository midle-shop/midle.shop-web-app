import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Container, Grid, Icon, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';
import Loadable from 'react-loadable';

import { modalNewsletterOpen } from '../../store/actions/modalNewsletter';

const LanguageToogler = Loadable({
  loader: () => import('../../components/LanguageToogler'),
  loading: () => null,
});
const ThemeToogler = Loadable({
  loader: () => import('../../components/ThemeToogler'),
  loading: () => null,
});


const InfoTopComputer = (props) => {
  //console.log('|--> InfoTopComputer render')
  const { t, languages, pathname } = props;
  const ml = new mlURL({languages: languages, pathname: pathname});

  return (
    <Container>
      <Grid
        style={{
          marginTop: '1px',
        }}
      >
        <Grid.Column
          width={3}
          textAlign={ 'center' }
          verticalAlign={ 'middle' }
          style={{fontSize: '1.3em', }}
        >
          <Link to={ml.url('/')} >
            {t('main:projectName')}
          </Link>
        </Grid.Column >

        <Grid.Column
          width={4}
          textAlign={ 'left' }
          verticalAlign={ 'bottom' }
        >
          <List link style={{fontSize: '1.3em', }}>

            {/* ModalNewsletter */}
            <List.Item as={"a"} onClick={props.handleModalNewsletterOpen}
              style={{color: 'rgba(0,0,0,.87)',}}
            >
              <Icon name="announcement"/> {t('main:menu.newsletter')}
            </List.Item>

          </List>
        </Grid.Column>

        <Grid.Column
          width={9}
          textAlign={ 'right' }
          verticalAlign={ 'bottom' }
        >
          <Grid.Row>
            <List celled horizontal >

            </List>
          </Grid.Row>

          <Grid.Row>
            <List divided horizontal>
              <List.Item>
                <LanguageToogler />
              </List.Item>
              <List.Item>
                <ThemeToogler />
              </List.Item>
            </List>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    theme: state.config.theme,
    pathname: state.router.location.pathname,
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
    translate('main')(InfoTopComputer)
  )
);
