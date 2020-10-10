import axios from "axios";
const client = axios.create({
  baseURL: process.env.API_URL.replace(/^"(.*)"$/, '$1')
});

async function get (url) {
  try {
    const response = await client.get(url);

    if (response.status === 200) {
        return response.data
    }
  }
  catch (error) {
    throw error
  }
}
async function post (url, data, config = {}) {
  try {
    const response = await client.post(url, data, config);

    if (response.status === 200) {
      return response.data
    }
  }
  catch (error) {
    throw error
  }
}

async function put (url, data) {
  try {
    const response = await client.put(`${url}/${data}`);

    if (response.status === 200) {
      return response.data
    }
  }
  catch (error) {
    throw error
  }
}

export const httpClient = {
  get,
  post,
  put
}
