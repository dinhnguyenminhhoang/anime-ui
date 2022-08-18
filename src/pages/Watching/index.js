import {
  faArrowRight,
  faBackward,
  faBackwardStep,
  faBell,
  faExpand,
  faForward,
  faForwardStep,
  faGear,
  faHeart,
  faPause,
  faPlay,
  faShareNodes,
  faSun,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import videos from "~/assets/videos";
import SidebarWatching from "~/components/SidebarWatching";
import styles from "./Watching.module.scss";
import { Cartoon, Manga, Picked } from "~/components/LayoutHome";
import Heading from "~/Layout/components/Heading";
const cx = classNames.bind(styles);
function Watching() {
  const [manga, setManga] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  const [picked, setPicked] = useState([]);
  const [play, setPlay] = useState(false);
  const videoRef = useRef();
  const playRef = useRef();
  useEffect(() => {
    fetch("http://localhost:3000/cartoon")
      .then((res) => res.json())
      .then((data) => setCartoon(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/manga")
      .then((res) => res.json())
      .then((data) => setManga(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/picked")
      .then((res) => res.json())
      .then((data) => setPicked(data));
  }, []);
  const handlerPlay = () => {
    if (play === false) {
      videoRef.current.play();
      setPlay(true);
    }
  };
  const handlerPause = () => {
    if (play === true) {
      videoRef.current.pause();
      setPlay(false);
    }
  };
  const handlerFlast = () => {
    if (videoRef.current.currentTime < videoRef.current.duration) {
      videoRef.current.currentTime += 10;
    } else {
      handlerPlay();
    }
    console.log(videoRef.current.currentTime);
    console.log(videoRef.current.duration);
  };
  const handlerBackFlast = () => {
    if (videoRef.current.currentTime > 0) {
      videoRef.current.currentTime -= 10;
    } else {
      handlerPlay();
    }
  };
  return (
    <div className={cx("grid__row")}>
      <div className={cx("grid__column-75")}>
        <div className={cx("slide_item_75")}>
          <div className={cx("video")}>
            <video
              ref={videoRef}
              className={cx("player-video")}
              controls
              preload="auto"
              playsInline=""
              src={videos.bae}
              poster="https://s199.imacdn.com/vg/2022/08/12/ca40489d4265516c_43c36f72bb22e293_3056516603083659118684.jpg"
              tabIndex="1"
            />
            <div className={cx("player-control__wrapper")}>
              <div className={cx("player-control-left")}>
                <div className="player-control-bar">
                  <button
                    className={cx("player-play")}
                    ref={playRef}
                    onClick={handlerPlay}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-pause")}>
                    <FontAwesomeIcon icon={faPause} onClick={handlerPause} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-next")}>
                    <FontAwesomeIcon icon={faForwardStep} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-flast")} onClick={handlerFlast}>
                    <FontAwesomeIcon icon={faForward} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-back")}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button
                    className={cx("player-back_flast")}
                    onClick={handlerBackFlast}
                  >
                    <FontAwesomeIcon icon={faBackward} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-volume")}>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                  </button>
                </div>
              </div>
              <div className={cx("player-control-right")}>
                <div className="player-control-bar">
                  <button className={cx("player-wheate")}>
                    <FontAwesomeIcon icon={faSun} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-setting")}>
                    <FontAwesomeIcon icon={faGear} />
                  </button>
                </div>
                <div className="player-control-bar">
                  <button className={cx("player-full")}>
                    <FontAwesomeIcon icon={faExpand} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("watch_noty")}>
          <div className={cx("noty__heading")}>
            <h2 className={cx("watch_noty-name")}>LYCORIS RECOIL TẬP 7</h2>
            <span className={cx("watch_noty-views")}>158,692 lượt xem</span>
          </div>
        </div>
        <div className={cx("watch_btn-wrapper")}>
          <div className={cx("watch_btn--left")}>
            <div className={cx("watch_btn__like")}>
              <button className={cx("watch_btn--btn")}>
                <FontAwesomeIcon
                  className={cx("watch_btn--icon")}
                  icon={faHeart}
                />
              </button>
              <div className={cx("watch_btn--content")}>
                <p className={cx("watch_btn--like")}>Liked</p>
                <p className={cx("watch_btn--number")}>779</p>
              </div>
            </div>
            <div className={cx("watch_btn__following")}>
              <button className={cx("watch_btn--btn")}>
                <FontAwesomeIcon
                  className={cx("watch_btn--icon")}
                  icon={faBell}
                />
              </button>
              <div className={cx("watch_btn--content")}>
                <p className={cx("watch_btn--following")}>followingd</p>
                <p className={cx("watch_btn--number")}>814</p>
              </div>
            </div>
          </div>
          <div className={cx("watch_btn--right")}>
            <div className={cx("watch_btn__Share")}>
              <button className={cx("watch_btn--btn")}>
                <FontAwesomeIcon
                  className={cx("watch_btn--icon")}
                  icon={faShareNodes}
                />
              </button>
              <div className={cx("watch_btn--content")}>
                <p className={cx("watch_btn--Share")}>Share</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("noty__footer")}>
          <span className={cx("noty__type")}>
            <p> Thể loại:</p> <Link to="/">Hành Động</Link>
            <Link to="/">,Hài Hước</Link>
          </span>
          <span className={cx("noty__team")}>Nhóm sub: Yurei Fansub</span>
          <span className={cx("noty__name-dif")}>
            <p> Tên khác: Quán Cà Phê Bất Ổn</p>
          </span>
          <span className={cx("noty__sum")}>Tổng số tập: 13 tập</span>
          <span className={cx("noty__collection")}>
            <p>Bộ sưu tập:</p>
            <Link to="/"> Anime Mùa Hè 2022</Link>
          </span>
          <span className={cx("noty__dscription")}>
            <p>
              Câu chuyện lấy bối cảnh ở "Lyco-Reco" một quán cà phê kiểu Nhật ở
              khu trung tâm cổ kính của Tokyo. Quán cà phê nhận đặt hàng bất cứ
              thứ gì, từ cà phê ngon đến đồ ngọt... "Bất kể bạn gọi món gì,
              chúng tôi sẽ phục vụ tận nơi...!".
            </p>
          </span>
        </div>
      </div>
      <div className={cx("sidebar__wrapper")}>
        <div className={cx("sidebar_heading")}>
          <span className={cx("sidebar_list")}>Danh sách tập</span>
          <span className={cx("sidebar_comment")}>Bình luận</span>
        </div>
        <div className={cx("sidebar_noty")}>
          <span className={cx("sidebar_episode")}>Tổng số :8 tập</span>
          <div className={cx("sidebar_episode--number")}>
            <span className={cx("sidebar_episode-content")}>Tập: </span>
            <button className={cx("sidebar_icon-btn")}>
              <span>8</span>
              <FontAwesomeIcon
                icon={faPlay}
                className={cx("sidebar__icon-play")}
              />
            </button>
          </div>
        </div>
        <SidebarWatching />
      </div>
      <div className={cx("cartoon-wrapper")}>
        <Heading content="PHIM HOẠT HÌNH" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {cartoon.map((info) => (
            <Cartoon key={info.id} data={info} />
          ))}
        </div>
      </div>
      <div className={cx("manga-wrapper")}>
        <Heading content="TRUYỆN TRANH" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {manga.map((info) => (
            <Manga key={info.id} data={info} />
          ))}
        </div>
      </div>{" "}
      <div className={cx("picked-wrapper")}>
        <Heading content="HÔM NAY XEM GÌ" icon={faArrowRight} />
        <div className={cx("grid__row")}>
          {picked.map((info) => (
            <Picked key={info.id} data={info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watching;
