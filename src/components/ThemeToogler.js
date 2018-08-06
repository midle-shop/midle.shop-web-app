import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Dropdown } from 'semantic-ui-react';
import { configThemeChanged } from '../store/actions/config';
import configDefault from '../constants/config-default';




const ThemeToogler = (props) => {
  //console.log('|--> ThemeToogler render')

  const handleChange = (e, data) => {
    props.handleConfigThemeChanged(data.value);
  }

  const { t } = props;
  let options = JSON.parse(JSON.stringify(configDefault.themes_list));
  options.forEach(function(item, index) {
    options[index].text = t(item.text);
  });

  return(
    <Dropdown
      options={options}
      defaultValue={props.theme}
      onChange={handleChange}
      icon={(props.icon !== undefined) ? props.icon : 'dropdown'}
    />
  );
}

function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    theme: state.config.theme,
  };
}
function mapDispatchToProps (dispatch) {
  return {
    handleConfigThemeChanged: (newLocation) => {
      dispatch(configThemeChanged(newLocation));
    },
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('main')(ThemeToogler)
  )
);
