import axios from "axios";

export const getRepoDetails = async (repo) => {
  const request = await axios.get(
    `https://api.github.com/repos/Abi0l9/${repo}/commits/main`
  );
  console.log(request);
  return request;
};
