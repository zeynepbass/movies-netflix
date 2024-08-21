import axios from "axios"
const API=axios.create({baseURL:"http://localhost:9363"})


export const fetchMemory=async ()=> await API.get("/post/panel");
export const fetchUsers=async ()=> await API.get("/user/users");
export const fetchDelete=async (id)=> await API.delete(`/post/panel/${id}`);
export const fetchDetay=async (id)=> await API.get(`/post/detay/${id}`);
export const fetchPost=async (post)=> await API.post("/post/panel",post);
export const fetchUpdate=async (Updatepost,id)=> await API.put(`/post/panel/${id}`,Updatepost);
export const fetchDuzenle=async (data,id)=> await API.put(`/post/duzenle/${id}`,data);
export const fetchAdmin=async (form)=> await API.post("/user/admin",form);
export const fetchSignin=async (form)=> await API.post("/user/signin",form);
export const fetchUserDuzGetır=async (email)=> await API.get(`/user/duzenle/${email}`);
export const fetchUserDuzenle=async (email,post)=> await API.put(`/user/duzenle/${email}`,post);
export const fetchRegister=async (formData)=> await API.post("/user/uye-ol",formData);