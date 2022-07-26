import classNames from "classnames/bind";
import styles from "./NewsAnime.module.scss";
const cx = classNames.bind(styles);
function NewsAnime({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <a href={data.data.url} className={cx("link_wrapper")}>
        <div className={cx("news-item")}>
          <div className={cx("news-wrapper--img")}>
            <img
              className={cx("news-img")}
              src={data.data.thumbnail}
              alt="hi"
            />
          </div>
          <div className={cx("news-container")}>
            <p className={cx("news-content")}>{data.data.title}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsAnime;
