import Home from "~/pages/Home";
import Anime from "~/pages/Anime";
import UpLoad from "~/pages/UpLoad";
import Policy from "~/pages/Policy";
import { HeaderOnly } from "~/components/Layout";
import Movie from "~/pages/Movie";
import News from "~/pages/News";
import Comic from "~/pages/Comic";
import Rank from "~/pages/Rank";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie",
    component: Movie,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/comic",
    component: Comic,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/upload",
    component: UpLoad,
    layout: HeaderOnly,
  },
  {
    path: "/anime",
    component: Anime,
  },
  {
    path: "/policy",
    component: Policy,
    layout: null,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
