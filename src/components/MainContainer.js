import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Container, Segment } from 'semantic-ui-react';


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

const styleSegment = {
  margin: '0px', padding: '0px',
  minHeight: '100vh',
}
const size = {
  mobile: 'mini',
  tablet: 'tiny',
  computer: 'small',
}

const MainContainer = (props) => {
  //console.log('|--> MainContainer render')
  const { deviceScreenSizeType } = props;

  return (
    <Segment basic style={styleSegment} >
      { props.heading ? <props.heading /> : null }
      <Container id='main' textAlign='justified' style={style[deviceScreenSizeType]}>
        { props.breadcrumb ? <props.breadcrumb size={size[deviceScreenSizeType]}/> : null }
        { props.children }
      </Container>
      { props.footer ? <props.footer /> : null }
    </Segment>
  );
}

function mapStateToProps (state) {
  return {
    deviceScreenSizeType: state.device.screen_size_type,
    //theme: state.config.theme,
  };
}

export default hot(module)(
  connect(mapStateToProps)(MainContainer)
);
