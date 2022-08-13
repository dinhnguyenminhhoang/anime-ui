import Home from "~/pages/Home";
import Anime from "~/pages/Anime";
import UpLoad from "~/pages/UpLoad";
import Policy from "~/pages/Policy";
import { HeaderOnly } from "~/Layout";
import News from "~/pages/News";
import Manga from "~/pages/Manga";
import Rank from "~/pages/Rank";
import Download from "~/pages/Download";
import Watching from "~/pages/Watching";
import Moviepage from "~/pages/Movie";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie",
    component: Moviepage,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/manga",
    component: Manga,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/rank_all",
    component: Rank,
  },
  {
    path: "/rank_year",
    component: Rank,
  },
  {
    path: "/rank_month",
    component: Rank,
  },
  {
    path: "/rank_week",
    component: Rank,
  },
  {
    path: "/rank_day",
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
    path: "/active",
    component: Anime,
  },
  {
    path: "/fiction",
    component: Anime,
  },
  {
    path: "/romance",
    component: Anime,
  },
  {
    path: "/horror",
    component: Anime,
  },
  {
    path: "/martial",
    component: Anime,
  },
  {
    path: "/arts",
    component: Anime,
  },
  {
    path: "/comedy",
    component: Anime,
  },
  {
    path: "/school",
    component: Anime,
  },
  {
    path: "/detective",
    component: Anime,
  },
  {
    path: "/music",
    component: Anime,
  },
  {
    path: "/reincarnation",
    component: Anime,
  },
  {
    path: "/adventure",
    component: Anime,
  },
  {
    path: "/supernatural",
    component: Anime,
  },
  {
    path: "/fantasy",
    component: Anime,
  },
  {
    path: "/life",
    component: Anime,
  },
  {
    path: "/robot",
    component: Anime,
  },
  {
    path: "/game",
    component: Anime,
  },
  {
    path: "/sport",
    component: Anime,
  },
  {
    path: "/dramaMagic",
    component: Anime,
  },
  {
    path: "/policy",
    component: Policy,
  },
  {
    path: "/download",
    component: Download,
  },
  {
    path: `/watching`,
    component: Watching,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
