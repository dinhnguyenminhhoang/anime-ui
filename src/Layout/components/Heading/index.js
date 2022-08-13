import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Heading.module.scss";
const cx = classNames.bind(styles);
function Heading({ ...children }) {
  return (
    <div className={cx("heading")}>
      <h1 className={cx("content")}>{children.content}</h1>
      <button className={cx("heading-btn")}>
        <FontAwesomeIcon
          icon={children.icon}
          className={cx("heading-btn--icon")}
        />
      </button>
    </div>
  );
}

export default Heading;
