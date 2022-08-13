import axios from "axios";
const film = axios.create({
  baseURL: `https://vuighe.net/json/film.json`,
});
export const get = async (path, option = {}) => {
  const responsse = await film.get(path, option);
  return responsse.data;
};
export default film;
