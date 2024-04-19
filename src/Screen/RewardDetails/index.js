import { React, useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import Modal from "react-modal";
import Pagination from "../../Component/Pagination";
import { useNavigate } from "react-router-dom";


export default function RewardDetail() {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [dropDownOption, setDropDownOption] = useState("Reward Item");
  const [orderQuanity, setOrderQuantuty] = useState("");

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
              <div><input className={style.orderInput} onChange={(e)=> setOrderQuantuty(e.target.value)} placeholder='No. of Orders' /></div>
              <div className={style.dropdownWrapper}>
                <div className={style.dropdown} onClick={()=> setDropDown(!dropDown)}>
                  {dropDownOption}
                  <img className={style.blackArrow} src={dropDown ? images.blackArrowUp :images.blackArrowDown}/>
                </div>
               {dropDown &&
               <div className={style.dropDownSelect}>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Cappuccino")}  >Cappuccino</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Flat White")} >Flat White</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Caramel Latte")} >Caramel Latte</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Hazelnut Latte")} >Hazelnut Latte</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Black Americano")} >Black Americano</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Mocha")} >Mocha</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Macchiato")} >Macchiato</div>
               <div className={style.dropDownOption} onClick={()=> setDropDownOption("Espresso")} >Espresso</div>
             </div>
               }
                
              </div>
            </div>
          </div>

          <div className={style.rewardtermWrapper}>
            <div className={style.termWrapper}>
              <div className={style.rewardsName}>
                Terms & Conditions
              </div>
              <div className={style.termPara}>
                Place an order from cuppa application
                Exclude pickup orders
                Minimum order of 2 items & above
              </div>
            </div>
            <div className={style.termWrapper}>
              <div className={style.rewardsName}>
                How to Complete
              </div>
              <div  className={style.termPara} >
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
