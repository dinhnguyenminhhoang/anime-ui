import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./All.module.scss";
const cx = classNames.bind(styles);
function All({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <div className={cx("all-item")}>
        <div className={cx("all-wrapper--img")}>
          <img className={cx("all-img")} src={data.data.thumbnail} alt="hi" />
        </div>
        <div className={cx("all-container")}>
          <span className={cx("all__heading")}>{data.data.name}</span>
          <span className={cx("all__views")}>{data.data.views} lượt xem</span>
        </div>
        <div className={cx("all__wrapper-ab")}>
          <button className={cx("all-button")}>
            <FontAwesomeIcon icon={faCirclePlay} className={cx("all-icon")} />
          </button>
          <span className={cx("all-trap")}>{data.data.time}</span>
        </div>
        <div className={cx("all-publish")}>
          <span className={cx("all-publish__content")}>SẮP CHIẾU</span>
        </div>
      </div>
    </div>
  );
}

export default All;
