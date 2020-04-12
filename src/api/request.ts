/*
 * @Author: your name
 * @Date: 2020-04-10 15:06:15
 * @LastEditTime: 2020-04-12 22:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/api/request.js
 */

import {get, post} from './config';

export const getBannerRequest = () => {
    return get({
        url: '/banner'
    });
}

export const getRecommendListRequest = () => {
    return get({
        url: '/personalized'
    });
}
