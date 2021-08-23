const appConfig = {
    auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
    auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID || ''
};

export default appConfig

// if we use these variables directly, ts will complain that they are probably empty
// centralizes our environment variables so we don't have them all over our code