import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Cartoon.module.scss";
const cx = classNames.bind(styles);
function Cartoon({ ...data }) {
  return (
    <div className={cx("grid__column-4")}>
      <a href={data.data.url}>
        <div className={cx("cartoon-item")}>
          <div className={cx("cartoon-wrapper--img")}>
            <img
              className={cx("cartoon-img")}
              src={data.data.poster}
              alt="hi"
            />
          </div>
          <div className={cx("cartoon-container")}>
            <span className={cx("cartoon__heading")}>{data.data.name}</span>
            <span className={cx("cartoon__views")}>
              {data.data.views} lượt xem
            </span>
          </div>
          <button className={cx("cartoon-button")}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className={cx("cartoon-icon")}
            />
          </button>
        </div>
      </a>
    </div>
  );
}

export default Cartoon;
