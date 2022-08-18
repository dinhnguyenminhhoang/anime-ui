import classNames from "classnames/bind";
import styles from "./SidebarWatching.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function sidebarWatching({ chidrent }) {
  return (
    <div className={cx("list")}>
      <div className={cx("item")}>
        <div className={cx("item-image")}>
          <img className={cx("image")} src={images.anime} alt="test" />
        </div>
        <div className={cx("item-noty")}>
          <p className={cx("noty-heading")}>
            Tập 1-tôi đã băt đầu muốn bảo vệ thành phố
          </p>
          <span className={cx("noty-views")}>20.762 lượt xem</span>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("item-image")}>
          <img className={cx("image")} src={images.anime} alt="test" />
        </div>
        <div className={cx("item-noty")}>
          <p className={cx("noty-heading")}>
            Tập 1-tôi đã băt đầu muốn bảo vệ thành phố
          </p>
          <span className={cx("noty-views")}>20.762 lượt xem</span>
        </div>
      </div>
    </div>
  );
}

export default sidebarWatching;
