import classNames from "classnames/bind";
import styles from "./MangaPage.module.scss";
const cx = classNames.bind(styles);
function MangaPage({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <a href={data.data.url}>
        <div className={cx("manga-item")}>
          <div className={cx("manga__wrapper")}>
            <div className={cx("manga-wrapper--img")}>
              <img
                className={cx("manga-img")}
                src={data.data.thumbnail}
                alt="hi"
              />
            </div>
            <div className={cx("manga-noty")}>
              <div className={cx("mana-noty__details")}>
                <span className={cx("manga__name")}>{data.data.title}</span>
                <span className={cx("manga__description")}>
                  {data.data.description}
                </span>
              </div>
            </div>
          </div>
          <div className={cx("manga-publish")}>
            <span className={cx("manga-publish__content")}>
              {data.data.chapter_name} chap
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MangaPage;
