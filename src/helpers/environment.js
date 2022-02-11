let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3333';
        break;

    case 'krk-nutrition-client.herokuapp.com':
        APIURL = 'https://krk-nutrition-tracker.herokuapp.com';
        break;
}

export default APIURL;
