const dev = {
    card_tricka_api_url: 'http://localhost:5000'
}

const prod = {
    card_tricka_api_url: 'https://sheltered-plateau-48126.herokuapp.com'
}

const config = process.env.REACT_APP_STAGE == 'dev' ? dev : prod;

export default {
    ...config
}; 