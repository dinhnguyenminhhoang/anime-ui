import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Download.module.scss";
const cx = classNames.bind(styles);
function Download() {
  return (
    <div className={cx("page__wrapper")}>
      <div className={cx("download__wrapper")}>
        <div className={cx("download")}>
          <h1 className={cx("heading")}>DOWNLOAD APP</h1>
          <p className={cx("description")}>Danh sách các ứng dụng của VuiGhe</p>
          <p className={cx("description")}>ỨNG DỤNG TRÊN MOBILE</p>
          <ul className={cx("description-list")}>
            <li className={cx("description-data")}>iOS app: đang phát triển</li>
            <li className={cx("description-data")}>
              Android app: đang phát triển
            </li>
          </ul>
          <p className={cx("description")}>ỨNG DỤNG TRÊN DESKTOP</p>
          <ul className={cx("description-list")}>
            <li className={cx("description-data")}>
              MacOS chip M1:
              <span className={cx("highlight")}>VuiGhe-1.0.0-arm64.dmg</span>
            </li>
            <li className={cx("description-data")}>
              MacOS chip Intel:
              <span className={cx("highlight")}>VuiGhe-1.0.0-x64.dmg</span>
            </li>
            <li className={cx("description-data")}>
              Windows:
              <span className={cx("highlight")}>
                VuiGhe-Setup-1.0.0-x64.exe
              </span>
            </li>
            <li className={cx("description-data")}>
              Linux:
              <span className={cx("highlight")}> VuiGhe-1.0.0.AppImage</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("chage-pages")}>
        <Link to="/download" className={cx("page__downloading")}>
          Download App
        </Link>
        <Link to="/policy" className={cx("page__policy")}>
          Chính Sách Riêng Tư
        </Link>
      </div>
    </div>
  );
}

export default Download;
