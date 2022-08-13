import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import MangaPage from "~/components/MangaPage";
import Nextpages from "~/components/NextPages";
import Heading from "~/Layout/components/Heading";
import styles from "./Manga.module.scss";
const cx = classNames.bind(styles);
function Manga() {
  const [manga, setManga] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mangaPage")
      .then((res) => res.json())
      .then((data) => setManga(data));
  }, []);
  return (
    <div className={cx("manga__wrapper")}>
      <div className={cx("manga__category")}>
        <div className={cx("manga-item")}>
          <div className={cx("manga-wrapper")}>
            <Heading content="TIN MỚI NHẤT" icon={faArrowRight} />
            <div className={cx("grid__row")}>
              {manga.map((info, index) => (
                <MangaPage key={index} data={info} />
              ))}
            </div>
            <Nextpages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manga;
