import axios from "axios";

const url = "http://localhost:5000/enquiry";
// const url = "https://crm-tool-backend.herokuapp.com/enquiry";

export const createEnquiry = (newPost) => {
  axios.post(url, newPost);
};

export const getEnquiries = () => {
  return axios.get(url);
};

export const addComment = (addCommentBody) => {
  return axios.post(url + "/addComment", addCommentBody);
};
