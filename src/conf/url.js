export const conf = {
  apiEndpoint:
    process.env.REACT_APP_API_DOMAIN ||
    'https://pungilandia2020-api.appspot.com',
  plpUrl: process.env.REACT_APP_API_PLP_BASEURL || '/api/v1/search/',
  pdpUrl: process.env.REACT_APP_API_PDP_BASEURL || '/api/v1/item/',
  responsiveImageService: `https://qp2dljrm.twic.pics`
};
