'use strict';

import crypto from 'crypto-js';
import config from '../utils/constants';

console.log(config);

const md5 = (data) => {
    return crypto.MD5(data).toString();
};

const createSignature = (credentials) => {
    const credsWithCapital = {};

    for (let t in credentials) {
        const r = t.charAt(0).toUpperCase() + t.slice(1, t.length);
        credsWithCapital[r] = encodeURIComponent(credentials[t])
    }

    const sortedKeys = Object.keys(credsWithCapital).sort();

    const signedCreds = sortedKeys.map((k) => {
        return credsWithCapital[k];
    });

    signedCreds.push('abcd');

    return md5(signedCreds.join(''));
};


export const login = async (username, password) => {
    console.debug('LOGIN', `Trying to login with username=[${username}]`);

    const formData = new FormData();

    formData.append('email', username);
    formData.append('password', password);
    formData.append('loginType', 'Email');
    formData.append('UserId', '');
    formData.append('Signature', createSignature({
        email: username,
        password,
        loginType: 'Email',
        UserId: null
    }));


    try {
        const result = await fetch(config.loginURL, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // },
            body: formData,
        });

        return result;
    } catch (error) {
        console.error(error);

        return null;
    }
};


