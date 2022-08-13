import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import NewsPage from "~/components/NewsPage";
import Nextpages from "~/components/NextPages";
import Heading from "~/Layout/components/Heading";
import styles from "./News.module.scss";
const cx = classNames.bind(styles);
function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className={cx("news__wrapper")}>
      <div className={cx("news__category")}>
        <div className={cx("news-item")}>
          <div className={cx("news-wrapper")}>
            <Heading content="TIN MỚI NHẤT" icon={faArrowRight} />
            <div className={cx("grid__row")}>
              {news.map((info, index) => (
                <NewsPage key={index} data={info} />
              ))}
            </div>
            <Nextpages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
