import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Visibility } from 'semantic-ui-react';
import Loadable from 'react-loadable';


const InfoTopComputer = Loadable({
  loader: () => import('../InfoTop/InfoTopComputer'),
  loading: () => null,
});
const MenuTopComputer = Loadable({
  loader: () => import('../MenuTop/MenuTopComputer'),
  loading: () => null,
});

//{this.props.heading ? <this.props.heading /> : null}
class HeaderComputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };

    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
  }

  hideFixedMenu () {
    this.setState({ fixed: false });
  }
  showFixedMenu () {
    this.setState({ fixed: true });
  }
  /*
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.fixed !== nextState.fixed) return true;
    else if (this.props.theme !== nextProps.fixed) return true;
    return false;
  }
  */

  render() {
    //console.log('|--> HeaderComputer render')

    return (
      <Visibility as='header' id='header'
        once={false} onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <InfoTopComputer />
        <MenuTopComputer fixed={this.state.fixed}  />
      </Visibility>
    );
  }
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    theme: state.config.theme,
    location: state.router.location,
  };
}

export default hot(module)(
  connect(mapStateToProps)(HeaderComputer)
);
