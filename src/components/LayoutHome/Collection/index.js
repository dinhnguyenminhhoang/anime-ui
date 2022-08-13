import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "~/Layout/components/Heading";
import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Collection() {
  return (
    <div className={cx("collection-wrapper")}>
      <Heading content="BỘ SƯU TẬP" icon={faArrowRight} />
      <div className={cx("grid__row")}>
        <div className={cx("grid__column-4 ")}>
          <div className={cx("collection-item")}>
            <div className={cx("collection-wrapper--img")}>
              <img
                className={cx("collection-img")}
                src={images.autumn}
                alt="hi"
              />
            </div>
          </div>
        </div>
        <div className={cx("grid__column-4 ")}>
          <div className={cx("collection-item")}>
            <div className={cx("collection-wrapper--img")}>
              <img className={cx("collection-img")} src={images.sun} alt="hi" />
            </div>
          </div>
        </div>{" "}
        <div className={cx("grid__column-4 ")}>
          <div className={cx("collection-item")}>
            <div className={cx("collection-wrapper--img")}>
              <img
                className={cx("collection-img")}
                src={images.spring}
                alt="hi"
              />
            </div>
          </div>
        </div>{" "}
        <div className={cx("grid__column-4 ")}>
          <div className={cx("collection-item")}>
            <div className={cx("collection-wrapper--img")}>
              <img
                className={cx("collection-img")}
                src={images.cool}
                alt="hi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
