'use client'
import useSWR from "swr";
import axios from 'axios';
const baseurl = 'https://api.thedreamhome.click';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function login(email,password){
  const response = await axios.post(`${baseurl}/user/login`, {email,password});
  return response.data;

}

export async function register(email,name,password){
  const response = await axios.post(`${baseurl}/user/register`, {email,name,password});
  return response.data;
}
export async function checkuser(email){
  const response = await axios.get(`${baseurl}/user/checkuser/${email}`);
  return response.data;
}
