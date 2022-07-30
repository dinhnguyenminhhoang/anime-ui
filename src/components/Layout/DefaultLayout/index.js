import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Home from "~/pages/Home";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children = <Home /> }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("grid__row")}>
          <div className={cx("grid__column-4")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
export default DefaultLayout;
