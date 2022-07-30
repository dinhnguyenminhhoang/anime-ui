import classNames from "classnames/bind";
import {
  All,
  Cartoon,
  Collection,
  Manga,
  Picked,
  Ranking,
  Slide,
  TrapNew,
} from "~/components/LayoutHome";
import Movie from "../Movie";
import News from "../News";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("home__wrapper")}>
      <div className={cx("home__container")}>
        <div className={cx("home__slide")}>
          <Slide />
        </div>
        <div className={cx("home__trap-new")}>
          <TrapNew />
        </div>
        <div className={cx("home__news")}>
          <News />
        </div>
        <div className={cx("home__cartoon")}>
          <Cartoon />
        </div>
        <div className={cx("home__manga")}>
          <Manga />
        </div>
        <div className={cx("home__collection")}>
          <Collection />
        </div>
        <div className={cx("home__movie")}>
          <Movie />
        </div>
        <div className={cx("home__picked")}>
          <Picked />
        </div>
        <div className={cx("home__ranking")}>
          <Ranking />
        </div>
        <div className={cx("home__all")}>
          <All />
        </div>
      </div>
    </div>
  );
}

export default Home;
