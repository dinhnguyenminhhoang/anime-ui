import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./TrapNew.module.scss";
const cx = classNames.bind(styles);
function TrapNew({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <div className={cx("trap-item")}>
        <button className={cx("trap-button")}>
          <FontAwesomeIcon icon={faCirclePlay} className={cx("trap-icon")} />
        </button>
        <div className={cx("trap-wrapper--img")}>
          <img className={cx("trap-img")} src={data.data.thumbnail} alt="hi" />
        </div>
        <div className={cx("trap-container")}>
          <span className={cx("trap__heading")}>{data.data.name}</span>
          <div className={cx("trap-title")}>
            <span className={cx("trap__descriptions")}>{data.data.time}</span>
            <span className={cx("trap__views")}>{data.data.views} lượt xem</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrapNew;
