import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Picked } from "~/components/LayoutHome";
import styles from "./Anime.module.scss";
const cx = classNames.bind(styles);
function Anime() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/animePage")
      .then((res) => res.json())
      .then((data) => setAnime(data));
  }, []);
  return (
    <div className={cx("anime__wrapper")}>
      <div className={cx("anime__category")}>
        <ul className={cx("anime__category--list")}>
          <Link to="/anime">
            <li className={cx("anime__category--item")}>Tất cả Anime</li>
          </Link>
          <Link to="/active">
            <li className={cx("anime__category--item")}>Hành Động</li>
          </Link>
          <Link to="/fiction">
            <li className={cx("anime__category--item")}>Viễn Tưởng</li>
          </Link>
          <Link to="/romance">
            <li className={cx("anime__category--item")}>Lãng Mạnh</li>
          </Link>
          <Link to="/horror">
            <li className={cx("anime__category--item")}>Kinh Dị</li>
          </Link>
          <Link to="/martial">
            <li className={cx("anime__category--item")}>Võ Thuật</li>
          </Link>
          <Link to="/arts">
            <li className={cx("anime__category--item")}>Hài Hước</li>
          </Link>
          <Link to="/comedy">
            <li className={cx("anime__category--item")}>Trường Học</li>
          </Link>
          <Link to="/school">
            <li className={cx("anime__category--item")}>Trinh Thám</li>
          </Link>
          <Link to="/detective">
            <li className={cx("anime__category--item")}>Âm Nhạc</li>
          </Link>
          <Link to="/music">
            <li className={cx("anime__category--item")}>Chuyển Sinh</li>
          </Link>
          <Link to="/reincarnation">
            <li className={cx("anime__category--item")}>Phiêu Lưu</li>
          </Link>
          <Link to="/aadventure">
            <li className={cx("anime__category--item")}>Siêu Nhiên</li>
          </Link>
          <Link to="/supernatural">
            <li className={cx("anime__category--item")}>Đời Thường</li>
          </Link>
          <Link to="/fantasy">
            <li className={cx("anime__category--item")}>Giả Tưởng</li>
          </Link>
          <Link to="/life">
            <li className={cx("anime__category--item")}>Game</li>
          </Link>
          <Link to="/robot">
            <li className={cx("anime__category--item")}>Thể Thao</li>
          </Link>
          <Link to="/game">
            <li className={cx("anime__category--item")}>Kịch Tính</li>
          </Link>
          <Link to="/sport">
            <li className={cx("anime__category--item")}>Pháp Thuật</li>
          </Link>
        </ul>
        <div className={cx("anime-item")}>
          <div className={cx("picked-wrapper")}>
            <div className={cx("grid__row")}>
              {anime.map((info, index) => (
                <Picked key={index} data={info} />
              ))}
            </div>
          </div>
        </div>
        <div className={cx("footer")}>
          <button className={cx("footer__next-btn")}>
            <FontAwesomeIcon icon={faForwardStep} className={cx("icon-next")} />
          </button>
          <div className={cx("footer__container")}>
            <span className={cx("item__page")}>1</span>
            <span className={cx("item__page")}>2</span>
            <span className={cx("item__page")}>3</span>
            <span className={cx("item__page")}>4</span>
            <span className={cx("item__page")}>5</span>
          </div>
          <button className={cx("footer__back-btn")}>
            <FontAwesomeIcon
              icon={faBackwardStep}
              className={cx("icon-back")}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Anime;
