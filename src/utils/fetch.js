import axios from 'axios';
import React, {Component} from 'react';
import {Toast} from 'antd-mobile';
import {getItem} from "./storage";

function failToast(text) {
    Toast.fail(text, 2);
}
import {
    AsyncStorage
} from 'react-native';
// 创建axios实例
const BASE_API_DEV = 'http://47.93.221.48:18080';
const BASE_API_PRO = '';
var service = axios.create({
    baseURL: BASE_API_DEV,
    timeout: 10000
});
// request拦截器
service.interceptors.request.use(async function (config) {
    const token = await getItem('token');
    if(token){
        config.headers['Authorization'] = token;
    }
    return config;
}, function (error) {
    Promise.reject(error);
});
service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    failToast(error.response.data.description)
    return Promise.reject(error);
});
export default service;