import { React, useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import Modal from "react-modal";
import Pagination from "../../Component/Pagination";
import { useNavigate } from "react-router-dom";


export default function RewardDetail() {
  const [search, setSearch] = useState("");

  return (
    <div className={style.container}>
      <div className={style.searchWrapper}>
        <div className={style.searh}>
          <img className={style.searchIcon} src={images.searchIcon} />
          <input
            className={style.searchInput}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={style.noticationBtn}>
          <img
            className={style.notificationIcon}
            src={images.notificationIcon}
          />
          Notifications
        </div>
      </div>
      <div className={style.menu}>
        <div className={style.btnWrapper}>
          <div className={style.rewardHeading}>
            Reward Details
          </div>
          <div

            className={style.btn}
          >
            Create Reward
          </div>
        </div>
        <div className={style.rewardDetailWrapper}>
          <div className={style.rewardNameWrapper}>
            <div className={style.rewardsName}>
              Reward Name
            </div>
            <div className={style.rewardsNameInfo}>
              Buy 5 Get 1 Free
            </div>
          </div>

          <div className={style.rewardsWrapper}>
            <div className={style.rewardsName}>
              Reward
            </div>
            <div className={style.orderDetailWrapper} >
              <div><input className={style.orderInput} placeholder='No. of Orders' /></div>
              <div className={style.dropdownWrapper}>
                <div className={style.dropdown}>
                  Reward Item
                </div>
                  <img src={images.downArrow}/>
              </div>
            </div>
          </div>

          <div className={style.rewardNameWrapper}>
            <div>
              <div className={style.rewardsName}>
                Terms & Conditions
              </div>
              <div >
                Place an order from cuppa application
                Exclude pickup orders
                Minimum order of 2 items & above
              </div>
            </div>
            <div>
              <div className={style.rewardsName}>
                How to Complete
              </div>
              <div >
                Place an order from cuppa
                On every 5th order get 1 coffee FREE
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
