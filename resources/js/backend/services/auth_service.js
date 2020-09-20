import {http,httpFile} from "./http_service";
import jwt from 'jsonwebtoken';

export function register(user)
{
    return http().post('register', user);
}

export function login(user)
{
    return http().post('login', user)
        .then(response => {
            if (response.status === 200) {
                setToken(response.data);
            }

            return response.data;
        });
}

function setToken(user)
{
    const token = jwt.sign({user: user}, 'shoplaravelvue');
    localStorage.setItem('shop-laravel-vue',token);
}

export function isLoggedIn()
{
    const token = localStorage.getItem('shop-laravel-vue');
    return token != null;
}

export function getUserRole()
{
    const token = localStorage.getItem('shop-laravel-vue');

    if (!token) {
        return null
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;
}

export function getAccessToken()
{
    const token = localStorage.getItem('shop-laravel-vue');

    if (!token) {
        return null
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function logout()
{
    http().get('logout');
    localStorage.removeItem('shop-laravel-vue');
}
