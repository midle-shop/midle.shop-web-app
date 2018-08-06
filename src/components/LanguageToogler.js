import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Dropdown } from 'semantic-ui-react';
import { push } from 'react-router-redux';
//import { languageChange } from 'i18next-redux-languagedetector';




class LanguageToogler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLanguage: props.defaultLanguage,
      languages: props.languages,
      languagesList: props.languagesList,
      icon: (props.icon !== undefined) ? props.icon : 'dropdown',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.language !== nextProps.language) return true;
    else return false;
  }

  handleChange(e, data) {
    let newLanguage = this.state.defaultLanguage;
    if (this.state.languages.indexOf(data.value) !== -1) {
      newLanguage = data.value;
    }

    let pathnameArray = this.props.location.pathname.split('/');
    pathnameArray = pathnameArray.filter(elem => elem !== "");
    if (this.state.languages.indexOf(pathnameArray[0]) !== -1) {
      pathnameArray.shift();
    }

    if (newLanguage !== this.props.language) {
      if (newLanguage !== this.state.defaultLanguage) {
        pathnameArray.unshift(newLanguage);
      }
      let newLocation = '/' + pathnameArray.join('/') + this.props.location.search + this.props.location.hash;
      this.props.onLanguageChange(newLocation);
    }
  }

  render() {
    //console.log('|--> LanguageToogler render')

    return(
      <Dropdown
        options={this.state.languagesList}
        defaultValue={this.props.language}
        onChange={this.handleChange}
        icon={this.state.icon}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    languagesList: state.i18next.languagesList,
    defaultLanguage: state.i18next.fallbackLng,
    location: state.router.location,
  };
}
function mapDispatchToProps (dispatch) {
  return {
    onLanguageChange: (newLocation) => {
      dispatch(push(newLocation));
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    LanguageToogler
  )
);
