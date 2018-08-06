import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { Container, Header, Segment } from 'semantic-ui-react';


const style = {
  mobile: {
    minHeight: 350, padding: '1em 0em',
    boxShadow: "0 0 960px 960px rgba(0, 0, 0, 0.33) inset",
    //backgroundImage: `url(${LOGO})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  tablet: {
    minHeight: 350, padding: '1em 0em',
    boxShadow: "0 0 960px 960px rgba(0, 0, 0, 0.33) inset",
    //backgroundImage: `url(${LOGO})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  computer: {
    minHeight: 350, padding: '1em 0em',
    boxShadow: "0 0 960px 960px rgba(0, 0, 0, 0.33) inset",
    //backgroundImage: `url(${LOGO})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  largeScreen: {
    minHeight: 350, padding: '1em 0em',
    boxShadow: "0 0 960px 960px rgba(0, 0, 0, 0.33) inset",
    //backgroundImage: `url(${LOGO})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  wideScreen: {
    minHeight: 350, padding: '1em 0em',
    boxShadow: "0 0 960px 960px rgba(0, 0, 0, 0.33) inset",
    //backgroundImage: `url(${LOGO})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}

const HeadingHomepage = (props) => {
  //console.log('|--> HeadingHomepage render')
  const { t, theme, deviceScreenSizeType } = props;

  return (
    <Segment vertical textAlign='center'
      inverted={(theme ==='night') ? true : false}
      style={style[deviceScreenSizeType]}
    >
    <Container text >

      <Header
        as='h1'
        content={t('heading.title')}
        inverted
        style={{
          fontSize: (deviceScreenSizeType === 'mobile') ? '2em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: (deviceScreenSizeType === 'mobile') ? '2em' : '3em',
        }}
      />
      <Header
        as='h2'
        content={t('heading.slogan')}
        inverted
        style={{
          fontSize: (deviceScreenSizeType === 'mobile') ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: (deviceScreenSizeType === 'mobile') ? '0.5em' : '1.5em',
        }}
      />
      {/*<Button primary size='huge'>
        {t('homepage_heading:join')}
        <Icon name='right arrow' />
      </Button>*/}
    </Container>
  </Segment>
  );
}

function mapStateToPropsHeading (state) {
  return {
    language: state.i18next.language,
    theme: state.config.theme,
    deviceScreenSizeType: state.device.screen_size_type,
  };
}

export default hot(module)(
  connect(mapStateToPropsHeading)(
    translate('layout_homepage')(HeadingHomepage)
  )
);
