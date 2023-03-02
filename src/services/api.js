import axios from "axios";

axios.defaults.baseURL = "https://cd2-grafo-integrator-ms.herokuapp.com";

export async function getAllProducts() {
  const response = await axios.get('/domazzi/find_all_products');
  console.log(response.data)
  return response.data.data;
}