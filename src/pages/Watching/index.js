import {
  faArrowRight,
  faBackward,
  faBackwardStep,
  faCirclePause,
  faExpand,
  faForward,
  faForwardStep,
  faGear,
  faPause,
  faPlay,
  faSun,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Watching.module.scss";
const cx = classNames.bind(styles);
function Watching() {
  return (
    <div className={cx("grid__row")}>
      <div className={cx("grid__column-75")}>
        <div className={cx("slide_item_75", styles.active_item_75)}>
          <div className={cx("video")}>
            <video
              className={cx("player-video")}
              autoPlay=""
              preload="auto"
              playsInline=""
              src="https://scontent.cdninstagram.com/v/t39.25447-2/10000000_456541309667614_1402021570518473535_n.mp4?_nc_cat=108&amp;vs=f06c10ec88d17be5&amp;_nc_vs=HBksFQAYJEdJQ1dtQUFlaVpiT09KOEJBRDliTUs0d18zUVRibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFENWdIbFRZNklCQU1ySnpibmVwTTU0YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmjs2%2B6q%2BqyAQVkE4oAkMzGAt2dHNfcHJldmlldxwXQJY32hysCDEYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGw%2BIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzc0MDU4OTc5MzgzOTA4MxJvZW1fdmlkZW9fYXNzZXRfaWQPNTg4NzI5MDI5Mjk0MjM4FW9lbV92aWRlb19yZXNvdXJjZV9pZBAxMjg0OTU3NTU1NjQzMjA3HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNjIyNTM2MjYyNzk0ODIzDnZ0c19yZXF1ZXN0X2lkDzIxM2VhZTQ0NzFmMTQ0MyUCHBwcFfDmFxsBVQACGwFVAAIcFQIAAAAWgLq3AwAlxAEbB4gBcwQ4NzM5AmNkCjIwMjItMDgtMTIDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNDIyLjAzOAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&amp;ccb=1-7&amp;_nc_sid=41a7d5&amp;_nc_ohc=0guywokp1YQAX_srMHb&amp;_nc_ht=scontent-frt3-1.xx&amp;edm=APRAPSkEAAAA&amp;oh=00_AT8N6JTiruP7gMpr3emc2D-m-7slVe-274DEoOmQxKpjVQ&amp;oe=62FA8937&amp;_nc_rid=219370379546450"
              poster="https://s199.imacdn.com/vg/2022/08/12/ca40489d4265516c_43c36f72bb22e293_3056516603083659118684.jpg"
              tabIndex="1"
            />
          </div>
          <div className={cx("player-control-left")}>
            <div className="player-control-bar">
              <button className={cx("player-play")}>
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-next")}>
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-flast")}>
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-pause")}>
                <FontAwesomeIcon icon={faPause} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-back")}>
                <FontAwesomeIcon icon={faBackwardStep} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-back_flast")}>
                <FontAwesomeIcon icon={faBackward} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-volume")}>
                <FontAwesomeIcon icon={faVolumeHigh} />
              </button>
            </div>
          </div>
          <div className={cx("player-control-right")}>
            <div className="player-control-bar">
              <button className={cx("player-wheate")}>
                <FontAwesomeIcon icon={faSun} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-setting")}>
                <FontAwesomeIcon icon={faGear} />
              </button>
            </div>
            <div className="player-control-bar">
              <button className={cx("player-full")}>
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watching;
