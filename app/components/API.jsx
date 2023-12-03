'use client'
import axios from 'axios';
const baseurl = 'https://api.thedreamhome.click';
const fetcher = (url) => axios.get(url, {withCredentials: true  }).then((res) => res.data);
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export async function login(email,password){
  try {
    const response = await axios.post(`${baseurl}/user/login`, {email,password});
    localStorage.setItem("token", response.data.elements.token);
    const userInfo = await getUserInfo();
    localStorage.setItem('user info', JSON.stringify(userInfo.elements))

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
  }
};



export async function register(email,name,password){
  try{
    const response = await axios.post(`${baseurl}/user/register`, {email,name,password});
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
  
};
export async function checkuser(email){
  try {

    const response = await axios.get(`${baseurl}/user/checkuser/${email}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getUserInfo(){
  try{
    const response = await axios.get(`${baseurl}/user/getUserInfor`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function updateUserInfo(email,name,phone,role,image){
  try{
    const response = await axios.put(`${baseurl}/user/updateuserinfor`, {
      email,
      name,
      phone,
      role,
      image
    }, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function updatePassword(password){
  const url = `${baseurl}/user/updatepassword`;
  try{
    const response = await axios.put(url, {
      password
    }, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getListProperty(pageNumber){
  const url = `${baseurl}/property/getlistproperty?pageNumber=${pageNumber}`;
try {
  const response = await axios.get(url);
  return response.data;
} catch (error) {
  console.log(error);
  return null;
}
};
export async function getPropertyDetail(propertyId){
  const url = `${baseurl}/property/getdetailproperty/${propertyId}`;
  try {
    console.log('Token', localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getPropertiesbyUser(){
  const url = `${baseurl}/property/getlistpropertybyuser`;
  try {
    const response = await axios.get(url, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function createProperty(propertyName,shortDescription, detailDescription,price,provinceCode,districtCode, wardCode,address,bedroom,bathroom,constructionYear,parkingSlot,propertyCategory,category,area,imageUrls){
  try{ 
    const response = await axios.post(`${baseurl}/property/createproperty`, {
      propertyName,
      shortDescription,
      detailDescription,
      price,
      provinceCode,
      districtCode,
      wardCode,
      address,
      bedroom,
      bathroom,
      constructionYear,
      parkingSlot,
      propertyCategory,
      category,
      area,
      imageUrls

    },
    {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  }catch(error){
    console.log(error);
    return null;
  }
};
export async function getProvinces() { 
  const url = `${baseurl}/property/getprovinces`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getDistricts(provinceCode) { 
  const url = `${baseurl}/property/getdistricts/${provinceCode}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getWards(districtCode) { 
  const url = `${baseurl}/property/getwards/${districtCode}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function addBookmark(propertyId) { 
  const url = `${baseurl}/property/insertinterest`;
  try {
    const response = await axios.post(url, {
      propertyId
    }, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function removeBookmark(propertyId) { 
  const url = `${baseurl}/property/removeinterest`;
  try {
    const response = await axios.post(url, {
      propertyId
    }, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export async function getBookmarkslist(){
  const url = `${baseurl}/property/getuserinterest`;
  try {
    const response = await axios.get(url, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}