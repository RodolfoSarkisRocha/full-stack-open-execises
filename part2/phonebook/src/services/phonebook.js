import Axios from "axios";
const baseUrl = "http://localhost:3001/persons";

export const getAll = () => {
  const request = Axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const create = (payload) => {
  const request = Axios.post(baseUrl, payload);
  return request.then((response) => response.data);
};

export const deletePerson = (id) => {
  const request = Axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export const edit = (id, payload) => {
  const request = Axios.put(`${baseUrl}/${id}`, payload);
  return request.then((response) => response.data);
};
