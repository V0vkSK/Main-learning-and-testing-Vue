import axios from "../utils/axios";

export const getBooks = () => {
  return axios.get("/books");
};

export const getBooksById = (id) => {
  return axios.get(`/books/${id}`);
};
export const getAuthors = () => {
  return axios.get("/authors");
};

export const getAuthorById = (id) => {
  return axios.get(`/authors/${id}`);
};
