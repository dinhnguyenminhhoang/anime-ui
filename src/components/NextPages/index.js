import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./NextPages.module.scss";
const cx = classNames.bind(styles);
function Nextpages() {
  return (
    <div className={cx("footer")}>
      <button className={cx("footer__back-btn")}>
        <FontAwesomeIcon icon={faBackwardStep} className={cx("icon-back")} />
      </button>
      <div className={cx("footer__container")}>
        <span className={cx("item__page")}>1</span>
        <span className={cx("item__page")}>2</span>
        <span className={cx("item__page")}>3</span>
        <span className={cx("item__page")}>4</span>
        <span className={cx("item__page")}>5</span>
      </div>
      <button className={cx("footer__next-btn")}>
        <FontAwesomeIcon icon={faForwardStep} className={cx("icon-next")} />
      </button>
    </div>
  );
}

export default Nextpages;
