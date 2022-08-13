import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./Slide.module.scss";
const cx = classNames.bind(styles);
function Slide() {
  return (
    <div className={cx("grid__row")}>
      <div className={cx("grid__column-75")}>
        <div className={cx("slide_item_75", styles.active_item_75)}>
          <div className={cx("image")}>
            <img className={cx("image-75")} src={images.anime} alt="anime" />
            <div className={cx("play-nav")}>
              <button className={cx("play-button")}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={cx("play-icon")}
                />
              </button>
              <div className={cx("heading")}>
                <span className={cx("play-view")}>1,760,742</span>
                <h3 className={cx("play-name")}>Kanojo</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slide_item_75")}>
          <div className={cx("image")}>
            <img className={cx("image-75")} src={images.anime} alt="anime" />
            <div className={cx("play-nav")}>
              <button className={cx("play-button")}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={cx("play-icon")}
                />
              </button>
              <div className={cx("heading")}>
                <span className={cx("play-view")}>1,760,742</span>
                <h3 className={cx("play-name")}>Kanojo</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("slide_item_75")}>
          <div className={cx("image")}>
            <img className={cx("image-75")} src={images.anime} alt="anime" />
            <div className={cx("play-nav")}>
              <button className={cx("play-button")}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={cx("play-icon")}
                />
              </button>
              <div className={cx("heading")}>
                <span className={cx("play-view")}>1,760,742</span>
                <h3 className={cx("play-name")}>Kanojo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("grid__column-4")}>
        <div className={cx("slide_item")}>
          <div className={cx("image")}>
            <img src={images.anime} alt="anime" className={cx("image-4")} />
          </div>
        </div>
        <div className={cx("slide_item")}>
          <div className={cx("image")}>
            <img src={images.anime} alt="anime" className={cx("image-4")} />
          </div>
        </div>
        <div className={cx("slide_item")}>
          <div className={cx("image")}>
            <img src={images.anime} alt="anime" className={cx("image-4")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
