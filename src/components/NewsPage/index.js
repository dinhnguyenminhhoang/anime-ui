import classNames from "classnames/bind";
import styles from "./NewsPage.module.scss";
const cx = classNames.bind(styles);
function NewsPage({ ...data }) {
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
          <div className={cx("news-publish")}>
            <span className={cx("news-publish__content")}>Tin Anime</span>
          </div>
          <span className={cx("news__description")}>{data.data.title}</span>
        </div>
      </a>
    </div>
  );
}

export default NewsPage;
