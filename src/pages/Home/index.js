import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("home__wrapper")}>
      <div className={cx("home__container")}>
        <div className={cx("home__trap-new")}>1</div>
        <div className={cx("home__news")}>2</div>
        <div className={cx("home__carroon")}>3</div>
        <div className={cx("home__manga")}>4</div>
        <div className={cx("home__collection")}>5</div>
        <div className={cx("home__movie")}>6</div>
        <div className={cx("home__picked")}>7</div>
        <div className={cx("home__ranking")}>8</div>
        <div className={cx("home__all")}>9</div>
      </div>
    </div>
  );
}

export default Home;
