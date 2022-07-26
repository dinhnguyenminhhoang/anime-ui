import classNames from "classnames//bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({ ...children }) {
  return (
    <button>
      <span className={cx("title")}>{children.content}</span>
    </button>
  );
}

export default Button;
