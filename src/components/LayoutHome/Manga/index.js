import classNames from "classnames/bind";
import styles from "./Manga.module.scss";
const cx = classNames.bind(styles);
function Manga({ ...data }) {
  return (
    <div className={cx("grid__column-6 ")}>
      <a href={data.data.url}>
        <div className={cx("manga-item")}>
          <div className={cx("manga-wrapper--img")}>
            <img
              className={cx("manga-img")}
              src={data.data.thumbnail}
              alt="hi"
            />
          </div>
          <div className={cx("manga-container")}>
            <span className={cx("manga__heading")}>{data.data.title}</span>
          </div>
          <div className={cx("chapter")}>
            <span className={cx("chapter_noty")}>
              {data.data.chapter_name} chap
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Manga;
