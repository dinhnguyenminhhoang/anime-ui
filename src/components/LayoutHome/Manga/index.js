import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "~/Layout/components/Heading";
import classNames from "classnames/bind";
import styles from "./Manga.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Manga({ ...data }) {
  return (
    <div className={cx("grid__column-6 ")}>
      <div className={cx("manga-item")}>
        <div className={cx("manga-wrapper--img")}>
          <img className={cx("manga-img")} src={data.data.thumbnail} alt="hi" />
        </div>
        <div className={cx("manga-container")}>
          <span className={cx("manga__heading")}>{data.data.title}</span>
        </div>
        <div className={cx("chapter")}>
          <span className={cx("chapter_noty")}>
            {data.data.chapter_name} chap
          </span>
        </div>
      </div>
    </div>
  );
}

export default Manga;
