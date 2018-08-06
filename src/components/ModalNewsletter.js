import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import mlURL from 'multi-languages-url';
import { Modal, Form, Checkbox, Input, Message } from 'semantic-ui-react';
import { modalNewsletterClose } from '../store/actions/modalNewsletter';

import apiNewsletter from '../api/newsletter';

class ModalNewsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      agree: false,
      formError: false,
      formWarning: false,
      formSuccess: false,
      timezone_offset_minutes: (new Date().getTimezoneOffset())*(-1),
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearingState = this.clearingState.bind(this);
  }

  handleClose = () => {
    this.clearingState();
    this.props.handleClose();
  }

  handleChange = (e, data) => {
    if (data.type === 'checkbox') {
      this.setState({[data.name]: data.checked});
    } else {
      this.setState({[data.name]: data.value});
    }
  }

  handleSubmit = (e)=> {
    const request = {
      email: this.state.email,
      agree: this.state.agree,
      timezone_offset_minutes: this.state.timezone_offset_minutes,
      language: this.props.language,
      pathname: this.props.pathname,
      did: this.props.did,
    };

    const API = new apiNewsletter();
    API.requestToConnect(request)
      .then((response) => {
        if (response.error) {
          this.setState({formError: true});
        } else if (response.result) {
          this.setState({formSuccess: true});
        } else {
          this.setState({formWarning: true});
        }

        setTimeout(() => {
          this.handleClose();
        }, 3000);

      }).catch((error) => {
        this.setState({formError: true});
        setTimeout(() => {
          this.handleClose();
        }, 2000);
      });
  }
  clearingState = () => {
    // Clear On Submit
    this.setState({
      email: "",
      agree: false,
      formError: false,
      formWarning: false,
      formSuccess: false,
    });
  }

  render() {
    //console.log('|--> ModalNewsletter render')
    const { t, languages, pathname, modalOpened } = this.props;
    const ml = new mlURL({languages: languages, pathname: pathname});

    return (
      <Modal id='modal-newsletter'
        open={modalOpened}
        onClose={this.handleClose}
        dimmer='blurring'
        size='small'
        closeIcon
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Modal.Header>{t('title')}</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <p>{t('header')}</p>
            <Form
              error={this.state.formError}
              warning={this.state.formWarning}
              success={this.state.formSuccess}
              onSubmit={this.handleSubmit}
            >
              <Form.Input type='email' name='email' id='email'
                required
                tabIndex='1' focus
                label={`${t('email')}:`}
                placeholder={t('emailPlaceholder')}
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Field>
                <Checkbox type='checkbox' name='agree' id='agree'
                  required
                  tabIndex='2'
                  onChange={this.handleChange}
                  checked={this.state.agree}
                /> {
                  t('agreeLabel.part1')
                } <a href={ml.url('/legal/terms')} target='_blank'> {t('agreeLabel.part2')}</a>
              </Form.Field>

              <Message error
                header={t('error.header')}
                content={t('error.content')}
              />
              <Message warning
                header={t('warning.header')}
                content={t('warning.content')}
              />
              <Message success
                header={t('success.header')}
                content={t('success.content')}
              />

              <Form.Button type='submit' name='submit' id='submit'
                tabIndex='0' secondary disabled={!this.state.agree}
                label={t('submitLabel')}
                content={t('submit')}
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}


function mapStateToProps (state) {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    modalOpened: state.modalNewsletter.opened,
    did: state.device.did,
  };
}
function mapDispatchToProps (dispatch) {
  return {
    handleClose: () => {
      dispatch(modalNewsletterClose());
    },
  }
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(
    translate('modal_newsletter')(ModalNewsletter)
  )
);
