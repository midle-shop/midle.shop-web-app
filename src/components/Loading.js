import React from 'react';
import { Dimmer, Loader, Button } from 'semantic-ui-react';

//https://github.com/jamiebuilds/react-loadable#loading-error-states
//https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return (
        <div>
          Taking a long time... <Button onClick={ props.retry }>Retry</Button>
        </div>
      );
    } else if (props.pastDelay) {
      return (
        <Dimmer active>
          <Loader size='big'>Loading...</Loader>
        </Dimmer>
      );
    } else {
      return (
        <Dimmer active>
          <Loader size='big'>Loading...</Loader>
        </Dimmer>
      );
    }
  } else if (props.error) {
    return (
      <div>
        Error! <Button onClick={ props.retry }>Retry</Button>
      </div>
    );
  } else {
    return null;
  }
}
