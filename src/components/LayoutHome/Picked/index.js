import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./Picked.module.scss";

const cx = classNames.bind(styles);
function Picked({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <div className={cx("picked-item")}>
        <div className={cx("picked-wrapper--img")}>
          <img
            className={cx("picked-img")}
            src={data.data.thumbnail}
            alt="hi"
          />
        </div>
        <div className={cx("picked-container")}>
          <span className={cx("picked__heading")}>{data.data.name}</span>
          <span className={cx("picked__views")}>{data.data.views}lượt xem</span>
        </div>
        <div className={cx("picked__wrapper-ab")}>
          <button className={cx("picked-button")}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className={cx("picked-icon")}
            />
          </button>
          <span className={cx("picked-trap")}>{data.data.time}</span>
        </div>
      </div>
    </div>
  );
}

export default Picked;
