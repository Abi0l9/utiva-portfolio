import axios from "axios";
const baseUrl = "http://localhost:8000/mail";

export const mailer = async (content) => {
  const request = await axios.post(baseUrl, content);
  return request;
};
