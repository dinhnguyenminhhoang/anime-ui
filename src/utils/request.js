import axios from "axios";
const request = axios.create({
  baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});
export const get = async (path, option = {}) => {
  const responsse = await request.get(path, option);
  return responsse.data;
};
export default request;
