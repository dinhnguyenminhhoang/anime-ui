import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState, useRef, useEffect } from "react";
import { useDebounce } from "~/hooks";
import Tippy from "@tippyjs/react/headless";
import * as searchServices from "~/apiServices/searchServices";
import Notifycation from "../Notifycation/Notifycation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faLess } from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);
function Search({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState([]);
  const [showResults, setShowReults] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounce = useDebounce(searchValue, 500);
  const handleChangeInput = (e) => {
    setSearchValue(e.target.value);
  };
  const handlClose = () => {
    setSearchValue("");
    setSearch([]);
    inputRef.current.focus();
  };
  const handleHideRsults = () => {
    setShowReults(false);
  };
  useEffect(() => {
    if (!debounce.trim()) {
      setSearch([]);
      return;
    }
    const feachApi = async () => {
      setLoading(true);
      const results = await searchServices.search(debounce);
      setSearch(results);
      setLoading(false);
    };
    feachApi();
  }, [debounce]);
  return (
    <div className={cx("popper__wrapper")}>
      <Tippy
        onClickOutside={handleHideRsults}
        visible={search.length > 0 && showResults}
        interactive
        placement="bottom"
        render={(attrs) => (
          <div className={cx("search__results")} tabIndex="-1" {...attrs}>
            {/* <span className={cx("search__empty")}>
              Nhập tên anime để tìm kiếm
            </span> */}
            {search.map((result) => (
              <Notifycation key={result.id} data={result} />
            ))}
          </div>
        )}
      >
        <input
          spellCheck={false}
          onChange={handleChangeInput}
          onFocus={() => setShowReults(true)}
          className={cx("popper__input")}
          placeholder="Tìm Kiếm Anime"
          value={searchValue}
          ref={inputRef}
        />
      </Tippy>
      <button className={cx("search-btn")}>
        <div className={cx("vertical-bar")}></div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={cx("icon__search")}
        />
      </button>
      {!!searchValue && !loading && (
        <button className={cx("btn-loading")} onClick={handlClose}>
          <FontAwesomeIcon icon={faXmarkCircle} className={cx("icon-close")} />
        </button>
      )}
      {loading && (
        <button className={cx("btn-loading")}>
          <FontAwesomeIcon icon={faSpinner} className={cx("icon-loading")} />
        </button>
      )}
    </div>
  );
}

export default Search;
