import classNames from "classnames/bind";
import styles from "./Ranking.module.scss";

const cx = classNames.bind(styles);
function Ranking({ ...data }) {
  return (
    <div className={cx("grid__column-6 ")}>
      <div className={cx("ranking-item")}>
        <div className={cx("ranking-wrapper--img")}>
          <img
            className={cx("ranking-img")}
            src={data.data.thumbnail}
            alt="hi"
          />
        </div>
        <div className={cx("ranking-container")}>
          <span className={cx("ranking__heading")}>{data.data.name}</span>
        </div>
        <div className={cx("chapter")}>
          <span className={cx("chapter_noty")}>{data.data.time}</span>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
