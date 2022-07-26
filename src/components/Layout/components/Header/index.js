import classNames from "classnames/bind";
import Search from "../Search";
import styles from "./Header.module.scss";
import logo from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleUser,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img
          className={cx("logo")}
          src={logo.logo}
          alt="Phimmoi | Phimmoi.net – Xem phim hay không quảng cáo"
        />
        <div className={cx("nav")}>
          <ul className={cx("nav__list")}>
            <li className={cx(styles.nav__item)}>
              <a href="https://phimmoilon.com/" className={cx("active")}>
                Anime
              </a>
            </li>
            <li className={cx("nav__item")}>
              <a href="https://phimmoilon.com/">Movie</a>
            </li>
            <li className={cx("nav__item")}>
              <a href="https://phimmoilon.com/">Tin Tức</a>
            </li>
            <li className={cx("nav__item")}>
              <a href="https://phimmoilon.com/">Truyện</a>
            </li>
            <li className={cx("nav__item")}>
              <a href="https://phimmoilon.com/">BXH</a>
            </li>
          </ul>
        </div>
        <div>
          <Search />
        </div>
        <div className={cx("header__user")}>
          <button className={cx("user")}>
            <FontAwesomeIcon icon={faCircleUser} className={cx("user-icon")} />
          </button>
          <button className={cx("sun__dak")}>
            <FontAwesomeIcon icon={faSun} className={cx("sun__dak-icon")} />
          </button>
          <button className={cx("policy")}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={cx("policy-icon")}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
