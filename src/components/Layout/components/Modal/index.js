import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faClose,
  faL,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Modal.module.scss";
const cx = classNames.bind(styles);
function Modal({ className = false }) {
  const [apper, setApper] = useState(className);
  return (
    <div
      className={cx(styles.modal, {
        [styles.apper]: apper,
      })}
    >
      <div className={cx("modal__overlay")}></div>
      <div className={cx("modal__body")}>
        <div className={cx("modal__inner")}>
          <div className={cx("auth__form")}>
            <div className={cx("auth__form--header")}>
              <button
                className={cx("close-btn")}
                onClick={() => {
                  setApper(false);
                  className = false;
                }}
              >
                <FontAwesomeIcon icon={faClose} className={cx("icon-close")} />
              </button>
              <span className={cx("wellcome")}>Chào khách!</span>
              <div className={cx("options")}>
                <span className={cx("login")}>Đăng Nhập</span>
                <span className={cx("register")}>Đăng kí</span>
              </div>
            </div>
            <button className={cx("user-btn")}>
              <FontAwesomeIcon
                icon={faCircleUser}
                className={cx("icon-user")}
              />
            </button>
          </div>
          <div className={cx("form__input")}>
            <div className={cx("input_noty")}>
              <span className={cx("name__login")}>Tên đăng nhập</span>
              <span className={cx("rule-input")}>từ 6 đến 24 kí tự</span>
            </div>
            <div className={cx("input-wrapper")}>
              <input
                spellCheck={false}
                placeholder="Tên..."
                className={cx("input-form")}
              />
              <button className={cx("input--btn")}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className={cx("icon-input")}
                />
              </button>
            </div>
            <div className={cx(styles.input_noty, styles.password_input)}>
              <span className={cx("name__login")}>Mật Khẩu</span>
              <span className={cx("rule-input")}>từ 6 đến 30 kí tự</span>
            </div>
            <div className={cx("input-wrapper")}>
              <input
                spellCheck={false}
                className={cx("input-form")}
                type="password"
                placeholder="pass..."
              />
              <button className={cx("input--btn")}>
                <FontAwesomeIcon icon={faLock} className={cx("icon-input")} />
              </button>
            </div>
          </div>
          <div className={cx("form__wrapper")}>
            <div className={cx("note-form")}>
              <input type="checkbox" className={cx("input-check")} />
              <span className={cx("memory-input")}>Ghi nhớ</span>
            </div>
            <a className={cx("forget__password")} href="https://vuighe.net/">
              Quên mật Khẩu
            </a>
          </div>
          <button className={cx("login-btn")}>
            <span className={cx("login-title")}>Đăng Nhập</span>
          </button>
          <div className={cx("socal-form")}>
            <div className={cx("socal-wrapper")}>
              <button className={cx("socal-btn")}>
                <span className={cx("title-face")}>Đăng Nhập Với Facebook</span>
              </button>
              <button className={cx("face-btn")}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={cx("icon-socal")}
                />
              </button>
            </div>
            <div className={cx("socal-wrapper")}>
              <button className={cx("socal-btn")}>
                <span className={cx("google-title")}>Đăng Nhập với google</span>
              </button>
              <button className={cx("google-btn")}>
                <FontAwesomeIcon icon={faGoogle} className={cx("icon-socal")} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
