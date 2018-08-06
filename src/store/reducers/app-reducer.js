import pkg from '../../../package.json';


const initialState = {
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
};

function appReducer (state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
