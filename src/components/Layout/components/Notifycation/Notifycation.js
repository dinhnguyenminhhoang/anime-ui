import className from "classnames/bind";
import styles from "./Notifycation.module.scss";
const cx = className.bind(styles);
function Notifycation({ children }) {
  return (
    <div className={cx("notify")}>
     <div className={cx("wrapper-img")}>
        <img
          src="https://s199.imacdn.com/vg/2015/05/dragon-ball-movie-1-13-large-1432284987.jpg"
          alt="dragonboy"
          className={cx("notify-image")}
        />
     </div>
      <div className={cx("notyfy__info")}>
        <a href="https://phimmoilon.com/">
          <h3 className={cx("info__name")}>Dragon Ball Z Movie + OVA</h3>
        </a>
        <p className={cx("info__view")}>785,876 lượt xem</p>
        <span className={cx("episodes")}>12/12 Tập</span>
      </div>
    </div>
  );
}

export default Notifycation;
