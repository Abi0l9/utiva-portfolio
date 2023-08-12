import axios from "axios";
const baseUrl = "https://utiva-portfolio-backend.onrender.com/mail";

export const mailer = async (content) => {
  const request = await axios.post(baseUrl, content);
  return request;
};
