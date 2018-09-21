'use strict';

const config = {
    development: {
        loginURL: 'https://alpha.playbuzz.com/user/home/login',
        gradient: ['rgb(0,156,255)', 'rgb(120,107,255)', 'rgb(146,96,255)', 'rgb(203,73,255)']
    },
    production: {
        loginURL: 'https://playbuzz.com/user/home/login',
        gradient: ['rgb(0,156,255)', 'rgb(120,107,255)', 'rgb(146,96,255)', 'rgb(203,73,255)']
    }
};

const currentConfig = __DEV__ ? config.development : config.production;

console.log('CURRENT', __DEV__, currentConfig);

export default currentConfig;
