import classNames from "classnames/bind";
import styles from "./Movie.module.scss";
const cx = classNames.bind(styles);
function Movie({ ...data }) {
  return (
    <div className={cx("grid__column-6 ")}>
      <div className={cx("movie-item")}>
        <div className={cx("movie-wrapper--img")}>
          <img className={cx("movie-img")} src={data.data.thumbnail} alt="hi" />
        </div>
        <div className={cx("movie-container")}>
          <span className={cx("movie__name")}>{data.data.name}</span>
          <span className={cx("movie__view")}>{data.data.views} lượt xem</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
