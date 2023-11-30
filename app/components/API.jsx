'use client'
import axios from 'axios';
const baseurl = 'https://api.thedreamhome.click';
const fetcher = (url) => axios.get(url, {withCredentials: true  }).then((res) => res.data);
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export async function login(email,password){
  try {
    const response = await axios.post(`${baseurl}/user/login`, {email,password});
    localStorage.setItem("token", response.data.elements.token);
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
  
}
export async function checkuser(email){
  try {

    const response = await axios.get(`${baseurl}/user/checkuser/${email}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getListProperty(pageNumber){
  const url = `${baseurl}/property/getlistproperty?pageNumber=${pageNumber}`;
try {
  const response = await axios.get(url);
  return response.data;
} catch (error) {
  console.log(error);
  return null;
}
}
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
}
export async function createProperty(name,shortDescription, detailDescription,price,provinceCode,districtCode, wardCode,address,bedroom,bathroom,constructionYear,parkingSlot,propertyCategory,category,area,imageUrls){
  try{ 
    const response = await axios.post(`${baseurl}/property/createproperty`, {
      
      name,
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

    },);
    return response.data;
  }catch(error){
    console.log(error);
    return null;
  }
}

