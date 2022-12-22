import { axiosInstance } from './config';


export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
}

export const getResultList = (query) => {
  return axiosInstance.get(`/search/keywords=${query}`)
}

export const getShopListRequest = (category) => {
  return axiosInstance.get(`/table/list/${parseInt(category)}`);
}

export const getMoreShopListRequest = (category, offset) => {
  return axiosInstance.get(`/shop/list?cat=${parseInt(category)}&offset=${offset}`)
}

import axios from 'axios';
let instance = axios.create({
  baseURL: "http://127.0.0.1:3000/api"
})
export const checkForLoginByFace = (dataurl) => {
  return  instance.post("/check", {
    data: dataurl,
  })
}
export const uploadFacePhoto = (formData) => {
  return instance.request({
    url: "/register/", 
    data: formData,
    method: "post"
  })
}
