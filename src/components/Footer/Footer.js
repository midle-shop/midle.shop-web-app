import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Container, Header, Icon, List, Grid, Divider,Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';

import socialLinks from '../../constants/social-networks-links';
import { modalNewsletterOpen } from '../../store/actions/modalNewsletter';


const style = {
  mobile: {
    width: '100%',
    margin: '0px', padding: '0px',
  },
  tablet: {
    width: '100%',
    margin: '0px', padding: '0px',
    paddingLeft: '2em', paddingRight: '2em',
  }
}

const Footer = (props) => {

    //console.log('|--> Footer render')
    const { t, languages, pathname, deviceScreenSizeType } = props;
    const ml = new mlURL({languages: languages, pathname: pathname});

    return (
      <Segment id='footer' vertical
        inverted={(props.theme ==='night') ? true : false}
        style={{ padding: '2em 0em 2em', }}
      >
        <Container style={style[deviceScreenSizeType]}>
          <Grid stackable
            inverted={(props.theme ==='night') ? true : false}
            textAlign={(deviceScreenSizeType === 'mobile') ? 'center' : 'left'}
          >
            <Grid.Row>

              <Grid.Column width={6} > {/*3*/}
                <Header as='h4' content={t('footer.information')} inverted={(props.theme ==='night') ? true : false}/>
                <List link inverted={(props.theme ==='night') ? true : false}>

                  {/*
                  <List.Item as={Link} to={ml.url('/blog')}>
                    {t('footer.blog')}
                  </List.Item>
                  */}
                  <List.Item as={Link} to={ml.url('/contacts')}>
                    {t('footer.contacts')}
                  </List.Item>
                  <List.Item as='a' onClick={props.handleModalNewsletterOpen}>
                    {t('footer.newsletter')}
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={5} >

                <Header as='h4' content={t('project')} inverted={(props.theme === 'night') ? true : false}/>
                <List link inverted={(props.theme === 'night') ? true : false}>
                  <List.Item as={Link} to={ml.url('/purpose')}>
                    {t('footer.purpose')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/whitepaper')}>
                    {t('footer.whitepaper')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/roadmap')}>
                    {t('footer.roadmap')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/faq')}>
                    {t('footer.faq')}
                  </List.Item>
                  {/*
                  <List.Item as={Link} to={ml.url('/team')}>
                    {t('footer.team')}
                  </List.Item>
                  */}
                </List>
              </Grid.Column>

{/*
              <Grid.Column width={5} >

                <Header as='h4' content={t('footer.careers')} inverted={(props.theme === 'night') ? true : false}/>
                <List link inverted={(props.theme === 'night') ? true : false}>
                  <List.Item as={Link} to={ml.url('/careers')}>
                    {t('footer.openVacancies')}
                  </List.Item>
                </List>
              </Grid.Column>
*/}
{/*
              <Grid.Column width={7} >
                <Header as='h4' content={t('footer.possibility')} textAlign={'center'} inverted={(props.theme === 'night') ? true : false}/>
                <Grid stackable inverted={(props.theme === 'night') ? true : false}>
                  <Grid.Column width={8} >
                    <Header as='h4' content={t('footer.forUsers')} inverted={(props.theme === 'night') ? true : false}/>
                    <Header as='h4' content={t('footer.forManufacturers')} inverted={(props.theme === 'night') ? true : false}/>
                  </Grid.Column>
                  <Grid.Column width={8} >
                    <Header as='h4' content={t('footer.forBusiness')} inverted={(props.theme === 'night') ? true : false}/>
                    <Header as='h4' content={t('footer.forInvestors')} inverted={(props.theme === 'night') ? true : false}/>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
*/}
              <Grid.Column width={5} > {/*3*/}
                <Header as='h4' content={t('footer.socialNetworks')} inverted={(props.theme === 'night') ? true : false}/>
                <List link inverted={(props.theme === 'night') ? true : false}>
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
              </Grid.Column>

            </Grid.Row>
          </Grid>

          <Divider/>
          <Grid stackable
            inverted={(props.theme ==='night') ? true : false}
            textAlign={(props.deviceScreenSizeType === 'mobile') ? 'center' : 'left'}
          >
            <Grid.Row>
              <List horizontal inverted={(props.theme === 'night') ? true : false}>
                <List.Item>{t('footer.copyright')}</List.Item>
              </List>
            </Grid.Row>
              <Grid.Row>
                <List celled horizontal link inverted={(props.theme === 'night') ? true : false}>
                  <List.Item as={Link} to={ml.url('/legal/privacy')} target='_blank'>
                    {t('footer.privacyPolicy')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/legal/privacy/cookies')} target='_blank'>
                    {t('footer.useOfCookies')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/legal/terms')} target='_blank'>
                    {t('footer.termsOfUse')}
                  </List.Item>
                  <List.Item as={Link} to={ml.url('/legal')} target='_blank'>
                    {t('footer.legal')}
                  </List.Item>
                  {/*<List.Item as={Link} to={ml.url('/sitemap')} target='_blank'>
                    {t('footer.siteMap')}
                  </List.Item>*/}
                </List>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
}

function mapStateToProps (state) {
  return {
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    deviceScreenSizeType: state.device.screen_size_type,
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
    translate("main")(Footer)
  )
);
