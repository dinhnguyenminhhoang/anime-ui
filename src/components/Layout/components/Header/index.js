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
import { useState } from "react";
import Modal from "../Modal";
const cx = classNames.bind(styles);
function Header() {
  const newspaperSpinning = [
    { filter: "contrast(0)" },
    { filter: "contrast(1)" },
  ];

  const newspaperTiming = {
    duration: 1000,
    iterations: 1,
  };
  const r = document.querySelector(":root");
  const [dark, setDark] = useState(true);
  const [modal, setmodal] = useState(false);
  const handlerWeather = () => {
    if (dark) {
      r.animate(newspaperSpinning, newspaperTiming);
      r.style.setProperty("--primary", "var(--white)");
      r.style.setProperty("--border-header", "var(--border-header-sun)");
      r.style.setProperty("--font-color", "var( --color-primary-sun)");
      r.style.setProperty(
        "--background-icon-header",
        "var( --background-icon-header-sun)"
      );
      r.style.setProperty("--weather", "var(--weather-sun)");
      setDark(!dark);
    } else {
      r.animate(newspaperSpinning, newspaperTiming);
      setDark(true);
      r.style.setProperty("--primary", "var(--dark)");
      r.style.setProperty("--border-header", "var(--border-header-dark)");
      r.style.setProperty("--font-color", "var( --color-primary-dark)");
      r.style.setProperty(
        "--background-icon-header",
        "var( --background-icon-header-dark)"
      );
      r.style.setProperty("--weather", "var(--weather-dark)");
    }
  };
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
          <button
            className={cx("user")}
            onClick={() => {
              setmodal(true);
            }}
          >
            <FontAwesomeIcon icon={faCircleUser} className={cx("user-icon")} />
          </button>
          <button className={cx(styles.sun__dak)} onClick={handlerWeather}>
            <FontAwesomeIcon icon={faSun} className={cx("sun__dak-icon")} />
          </button>
          <button className={cx("policy")} onClick={() => {}}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={cx("policy-icon")}
            />
          </button>
        </div>
      </div>
      <Modal className={modal} />
    </header>
  );
}

export default Header;
