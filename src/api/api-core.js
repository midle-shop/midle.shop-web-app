import pckg from '../../package.json';


const DefaultOptions = {
  apiRoot: "/api/jsonrpc",
  request: {
    cache: "no-cache",
    headers: {
      "user-agent": `API client (${pckg.name} | ${pckg.version} | ${pckg.description})`,
      "content-type": "application/json",
      "Content-Length": "0",
    },
    method: "POST",
    mode: "cors",
    body: null
  }
}



export default class ApiClient {
  constructor(options) {
    this.options = Object.assign({}, DefaultOptions, options);
  }

  callApi (method, params=undefined) {
    let { options } = this;
    let body = {
      jsonrpc: "2.0",
      method: method,
      params: params,
      id: new Date().getTime(),
    };

    body = JSON.stringify(body);
    options.request.headers["Content-Length"] = body.length.toString();

    const requestData = Object.assign({}, options.request, { body: body });

    return fetch(options.apiRoot, requestData)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return json;
    }).catch((e)=> {
      //Internal Server Error
      const error = {
        name: e.name,
        message: e.message,
      }
      console.error(error);
      return { error: {code: -32000, message: "Server error", data: error }};
    });
  }


}
