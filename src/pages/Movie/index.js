import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Nextpages from "~/components/NextPages";
import styles from "./Movie.module.scss";
import { Movie } from "~/components/LayoutHome";
const cx = classNames.bind(styles);
function Moviepage() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/moviePage")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <div className={cx("movie__wrapper")}>
      <div className={cx("movie__category")}>
        <div className={cx("movie-item")}>
          <div className={cx("picked-wrapper")}>
            <div className={cx("grid__row")}>
              {movie.map((info, index) => (
                <Movie key={index} data={info} />
              ))}
            </div>
          </div>
        </div>
        <Nextpages />
      </div>
    </div>
  );
}

export default Moviepage;
