import Home from "~/pages/Home";
import SeriesMovies from "~/pages/SeriesMovies";
import Anime from "~/pages/Anime";
import UpLoad from "~/pages/UpLoad";
import OddMovie from "~/pages/OddMovie";
import { HeaderOnly } from "~/components/Layout";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/phimle",
    component: OddMovie,
  },
  {
    path: "/phimbo",
    component: SeriesMovies,
  },
  {
    path: "/upload",
    component: UpLoad,
    layout: HeaderOnly,
  },
  {
    path: "/anime",
    component: Anime,
    layout: null,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
