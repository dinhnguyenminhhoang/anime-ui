import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Picked } from "~/components/LayoutHome";
import Nextpages from "~/components/NextPages";
import Heading from "~/Layout/components/Heading";
import styles from "./Rank.module.scss";
const cx = classNames.bind(styles);
function Rank() {
  const [rank, setRank] = useState([]);
  const [time, setTime] = useState("BXH HÔM NAY");
  useEffect(() => {
    fetch("http://localhost:3000/animePage")
      .then((res) => res.json())
      .then((data) => setRank(data));
  }, []);
  return (
    <div className={cx("rank__wrapper")}>
      <div className={cx("rank__category")}>
        <div className={cx("rank__heading")}>
          <Heading content={time} icon={faArrowRight} />
          <div className={cx("rank__time")}>
            <Link to="/rank_day" onClick={() => setTime("BXH HÔM NAY")}>
              <span className={cx("rank__time-item")}>NGÀY</span>
            </Link>
            <Link to="/rank_week" onClick={() => setTime("BXH TUẦN")}>
              <span className={cx("rank__time-item")}>TUẦN</span>
            </Link>
            <Link to="/rank_month" onClick={() => setTime("BXH THÁNG")}>
              <span className={cx("rank__time-item")}>THÁNG</span>
            </Link>
            <Link to="/rank_year" onClick={() => setTime("BXH NĂM")}>
              <span className={cx("rank__time-item")}>NĂM</span>
            </Link>
            <Link to="/rank_all" onClick={() => setTime("BXH TẤT CẢ")}>
              <span className={cx("rank__time-item")}>TẤT CẢ</span>
            </Link>
          </div>
        </div>
        <div className={cx("rank-item")}>
          <div className={cx("picked-wrapper")}>
            <div className={cx("grid__row")}>
              {rank.map((info, index) => (
                <Picked key={index} data={info} />
              ))}
            </div>
          </div>
        </div>
        {time !== "BXH HÔM NAY" && <Nextpages />}
      </div>
    </div>
  );
}

export default Rank;
