import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import {
  All,
  Cartoon,
  Collection,
  Manga,
  Picked,
  Ranking,
  Slide,
  TrapNew,
  NewsAnime,
  Movie,
} from "~/components/LayoutHome";
import styles from "./Home.module.scss";
import Heading from "~/Layout/components/Heading";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import film from "~/utils/film";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Home() {
  const [traps, setTrap] = useState([]);
  const [movie, setMovie] = useState([]);
  const [news, setNews] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  const [manga, setManga] = useState([]);
  const [picked, setPicked] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/film")
      .then((res) => res.json())
      .then((data) => setTrap(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/movie")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/manga")
      .then((res) => res.json())
      .then((data) => setManga(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/ranking")
      .then((res) => res.json())
      .then((data) => setRanking(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/cartoon")
      .then((res) => res.json())
      .then((data) => setCartoon(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/picked")
      .then((res) => res.json())
      .then((data) => setPicked(data));
  }, []);
  return (
    <>
      <Slide />
      <div className={cx("new-wrapper")}>
        <Heading content="Tập mới nhất" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {traps.map((trap) => (
            <TrapNew key={trap.id} data={trap} />
          ))}
        </div>
      </div>
      <div className={cx("new-wrapper")}>
        <Heading content="TIN ANIME" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {news.map((info) => (
            <NewsAnime key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("cartoon-wrapper")}>
        <Heading content="Phim hoạt hình" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {cartoon.map((info) => (
            <Cartoon key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("manga-wrapper")}>
        <Heading content="Truyện tranh" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {manga.map((info) => (
            <Manga key={info.id} data={info} />
          ))}
        </div>
      </div>
      <Collection />
      <div className={cx("movie-wrapper")}>
        <Heading content="ANIME MOVIE" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {movie.map((info) => (
            <Movie key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("picked-wrapper")}>
        <Heading content="HÔM NAY XEM GÌ" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {picked.map((info) => (
            <Picked key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("ranking-wrapper")}>
        <Heading content="BẢNG XẾP HẠNG" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {ranking.map((info) => (
            <Ranking key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("all-wrapper")}>
        <Heading content="TẤT CẢ ANIME" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {traps.map((info) => (
            <All key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("home-more")}>
        <Link to="/anime">
          <span className={cx("home-more_content")}>Xem thêm</span>
        </Link>
      </div>
    </>
  );
}

export default Home;
