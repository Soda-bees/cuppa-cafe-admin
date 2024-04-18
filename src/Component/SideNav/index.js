import React from "react";
import style from "./style.module.css";
import images from "../../asset";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideNav() {
  const location = useLocation();

  const activePath = location.pathname;
  const navigate = useNavigate();

  return (
    <div className={style.sideBar}>
      <div className={style.menubar}>
        <div className={style.logo}>
          <img src={images.menulogo} />
        </div>
        <div className={style.menuList}>
          <img className={style.menuImg} src={images.dashBoardIcon} />
          <div className={style.word}>Dashboard</div>
        </div>
        <div className={style.menuList} onClick={() => navigate("/menu")}>
          <img
            className={style.menuImg}
            src={
              activePath === "/menu" ? images.menuGreenIcon : images.menuIcon
            }
          />
          <div
            className={activePath === "/menu" ? style.greenWord : style.word}
          >
            Menu
          </div>
        </div>

        <div onClick={() => navigate("/offer")} className={style.menuList}>
          <img
            className={style.menuImg}
            src={
              activePath === "/offer" ? images.offerGreen : images.offersIcon
            }
          />
          <div
            className={activePath === "/offer" ? style.greenWord : style.word}
          >
            Offers
          </div>
        </div>
        <div onClick={() => navigate("/event")} className={style.menuList}>
          <img
            className={style.menuImg}
            src={
              activePath === "/event" ? images.eventGreen : images.eventsIcon
            }
          />
          <div
            className={activePath === "/event" ? style.greenWord : style.word}
          >
            Events
          </div>
        </div>
        <div onClick={() => navigate("/rewards")} className={style.menuList}>
          <img className={style.menuImg} src={activePath === "/rewards" ? images.rewardGreen : images.rewardsIcon} />
          <div  className={activePath === "/rewards" ? style.greenWord : style.word}>Rewards</div>
        </div>
        <div onClick={() => navigate("/setting")} className={style.menuList}>
          <img
            className={style.menuImg}
            src={
              activePath === "setting"
                ? images.settingGreen
                : images.settingsIcon
            }
          />
          <div
            className={activePath === "/setting" ? style.greenWord : style.word}
          >
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}
