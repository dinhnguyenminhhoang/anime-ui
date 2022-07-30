import className from "classnames/bind";
import styles from "./Notifycation.module.scss";
const cx = className.bind(styles);
function Notifycation({ data }) {
  return (
    <div className={cx("notify")}>
      <div className={cx("wrapper-img")}>
        <img
          src={data.avatar}
          alt="dragonboy"
          className={cx("notify-image")}
        />
      </div>
      <div className={cx("notyfy__info")}>
        <a href="https://phimmoilon.com/">
          <h3 className={cx("info__name")}>{data.full_name}</h3>
        </a>
        <p className={cx("info__view")}>785,876 lượt xem</p>
        <span className={cx("episodes")}>12/12 Tập</span>
      </div>
    </div>
  );
}

export default Notifycation;
