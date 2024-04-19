import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset';

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(null);
  const [card, setCard] = useState([
    {
      images: images.cappuccino,
      name: "cappuccino",
    },
    {
      images: images.cappuccino,
      name: "cappuccino",
    },
    {
      images: images.cappuccino,
      name: "cappuccino",
    },
    {
      images: images.cappuccino,
      name: "cappuccino",
    },
  ]);


  const toggleDropDown = (index) => {
    setDropDown((prevIndex) => (prevIndex === index ? null : index));
  };
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
        <div className={style.dashBoardWrapper}>
          <div className={style.dashBoardLeft}>
            <div className={style.cardWrapper}>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.Icon} src={images.coffeeIcon} /></div>
                  <div className={style.quantity}>1000</div>
                </div>
                <div className={style.orderHeading}>
                  Orders Today
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.IconTwo} src={images.coffeeCrossIcon} /></div>
                  <div className={style.quantity}>5</div>
                </div>
                <div className={style.orderHeading}>
                  Cancelled Orders
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.Icon} src={images.menuGreenIcon} /></div>
                  <div className={style.quantity}>6</div>
                </div>
                <div className={style.orderHeading}>
                  Total Menus
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.Icon} src={images.customerIcon} /></div>
                  <div className={style.quantity}>2,486</div>
                </div>
                <div className={style.orderHeading}>
                  Total Customer
                </div>
              </div>
            </div>
            <div className={style.graphWrapper}>
              <div className={style.graphHeadingWrapper}>
                <div className={style.graphHeading}>
                  Business Summary
                </div>
                <div className={style.graphImgWrapper}>
                  <img className={style.graphSettingIcon} src={images.graphSetting} />
                </div>
              </div>
              <div className={style.graph}></div>
            </div>
            <div className={style.heading}>
              Recent Orders
            </div>
            <div className={style.recentOrderWrapper}>
              <div className={style.itemHeadingList}>
                <div className={style.listWrapper}>
                  <div className={style.itemHeading}>Item</div>
                </div>
                <div className={style.HeadingList}>
                  <div className={style.itemHeading}>Date & Time</div>
                  <div className={style.itemHeading}>Qty.</div>
                  <div className={style.itemHeading}>Price</div>
                  <div className={style.itemHeading}>Status</div>
                </div>
              </div>
            </div>

            {card.map((item, index) => (
              <div className={style.OrderWrapper}>
                <div className={style.itemHeadingList}>
                  <div className={style.listWrapper}>
                    <div className={style.itemName}>
                      <img className={style.itemImg} src={item.images} />
                     {item.name}
                    </div>
                  </div>
                  <div className={style.listItemWrapper}>
                    <div className={style.listItem}>Oct 24 , 2024</div>
                    <div className={style.listItemTwo}>1</div>
                    <div className={style.listItemThree}>$3.45</div>
                    <div onClick={() => toggleDropDown(index)} className={style.listItemFour} >Pending
                      <img className={style.blackArrow} src={dropDown === index ? images.blackArrowUp : images.blackArrowDown} />
                      {dropDown === index &&
                       (<div className={style.dropDown}>
                        <div className={style.dropDownOption}>Ready</div>
                        <div className={style.dropDownOption}>Picked</div>
                        <div className={style.dropDownOption}>Cancelled</div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.dashBoardRight}>
            <div className={style.ratingHeading}>
            Rating & Reviews
            </div>
            <div className={style.ratingCardWrapper}>
              <div className={style.ratingCard}>
              <div className={style.ratingCardInner}>
                <div className={style.ratingCardInfoWrapper}>
                  <div className={style.ratingImgWrapper}><img className={style.ratingImg} src={images.ratingImg}/></div>
                  <div className={style.RatingInfo}>
                  <div className={style.customerName}>Mark</div>
                  <div className={style.ratings}> . Yesterday</div>
                  <div className={style.commit}>The coffee was really good and milky</div>
                </div>
                </div>
               <div className={style.replyBackWrapper}><img className={style.replyBack} src={images.replyback}/></div>
              </div>
               <div className={style.inputWraaper}><input className={style.replyInput}/></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
