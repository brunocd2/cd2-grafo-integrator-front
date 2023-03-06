import axios from "axios";

axios.defaults.baseURL = "http://cd2-grafo-integrator-ms.herokuapp.com";

export async function getAllProducts() {
  const response = await axios.get('/domazzi/find_all_products');
  return response.data.data;
}

export async function getProductsByCategory(category) {
  const response = await axios.get(`/domazzi/find_products_by_category?categoria=${category}`);
  return response.data.data;
}

export async function getProductsByPartner(partner) {
  
  const response = await axios.get(`/domazzi/find_products_by_partner?partner=${partner}`);
  return response.data.data;
}

export async function login(userInfos) {
  console.log(userInfos);
  const response = await axios.post('/login', userInfos);
  console.log(response.data);
}

export async function forgotPassword(email) {
  const response = await axios.post('/forgot', {email});
  console.log(response.data);
}

export async function firstAccess(email, newPassword) {
  // const response = await axios.post('/update_first_access', {email, newPassword});
  const response = await axios.post('/update_first_acess', {email, newPassword});
  console.log(response.data);
}