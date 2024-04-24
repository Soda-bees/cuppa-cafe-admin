import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset';
import StarRatings from 'react-star-ratings';
import ProgressBar from "@ramonak/react-progress-bar";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(null);
  const [todayOrder, setTodayOrder] = useState('1000');
  const [cancelledOrder, setCancelOrder] = useState('5');
  const [menu, setMenu] = useState('6');
  const [totalCustomer, setTotalCustomer] = useState('2,486');
  const [totalProfit, setTotalProfit] = useState('$15,239.58');
  const [growth, setGrowth] = useState('$192.20');
  const [orderDate, setOrderData] = useState('Oct 24 , 2024');
  const [quantity, setQuantity] = useState('1');
  const [coffeePrice, setCoffeePrice] = useState('$3.45');
  const [totalAveragesRating, setTotalAveragesRating] = useState('4.8');



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

  const [commitCard, setCommitCard] = useState([
    {
      image: images.ratingImg
    },
    {
      image: images.ratingImg
    },
    {
      image: images.ratingImg
    },
    {
      image: images.ratingImg
    },
    {
      image: images.ratingImg
    },
    {
      image: images.ratingImg
    },

  ])

  const toggleDropDown = (index) => {
    setDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const [reply, setReply] = useState(null)
  const togglereply = (index) => {
    setReply((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    { name: 'Mon',  pv: 2400, amt: 2400 },
    { name: 'Tue',  pv: 1398, amt: 2210 },
    { name: 'Wed',  pv: 9800, amt: 2290 },
    { name: 'Thu',  pv: 7800, amt: 2290 },
    { name: 'Fri',  pv: 8800, amt: 2290 },
    { name: 'Sat',  pv: 4800, amt: 2290 },
    { name: 'Sun',  pv: 6800, amt: 2290 },
  ];



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
                  <div className={style.quantity}>{todayOrder}</div>
                </div>
                <div className={style.orderHeading}>
                  Orders Today
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.IconTwo} src={images.coffeeCrossIcon} /></div>
                  <div className={style.quantity}>{cancelledOrder}</div>
                </div>
                <div className={style.orderHeading}>
                  Cancelled Orders
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.Icon} src={images.menuGreenIcon} /></div>
                  <div className={style.quantity}>{menu}</div>
                </div>
                <div className={style.orderHeading}>
                  Total Menus
                </div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div><img className={style.Icon} src={images.customerIcon} /></div>
                  <div className={style.quantity}>{totalCustomer}</div>
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
              <div className={style.graph}>
                <div className={style.saleWrapper}>
                  <div className={style.saleHeading}>Sales</div>
                  <div className={style.growthWrapper}>
                    <div className={style.totalPrice}>{totalProfit}</div>
                    <div className={style.grothPrice}>+{growth} <img className={style.growthArrow} src={images.growthArrow}/></div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                <LineChart  data={data}>
                <Tooltip />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" />
                  <Line type="monotone"
                    dataKey="pv"
                    stroke="#4CAD00" 
                    strokeWidth={5}/>
                </LineChart>
                </ResponsiveContainer>
              </div>
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
                    <div className={style.listItem}>{orderDate}</div>
                    <div className={style.listItemTwo}>{quantity}</div>
                    <div className={style.listItemThree}>{coffeePrice}</div>
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
            <div className={style.ratingwrapper}>
              <div className={style.ratingReviewCard}>
                <div className={style.headingRating}>Rating</div>
                <div className={style.ratingReviewCardWrapper}>
                  <div className={style.ratingLeft}>
                    <div className={style.ratingAverage}>{totalAveragesRating}</div>
                    <div className={style.ratingStar}>
                      <StarRatings
                        rating={3}
                        starDimension="25px"
                        starSpacing="1px"
                        starRatedColor="#FCC767"

                      />
                    </div>
                    <div className={style.ratingTotalNumber}>All ratings (1000+)</div>
                  </div>
                  <div className={style.ratingRight}>
                    <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>5</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={60}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="5px"
                          width='100%'
                          isLabelVisible={false}
                        /></div>
                      <div className={style.totalAverage}>60%</div>
                    </div>
                    <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>4</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={50}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="5px"
                          width='100%'
                          isLabelVisible={false}
                        /></div>
                      <div className={style.totalAverage}>50%</div>
                    </div>
                    <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>3</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={40}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="5px"
                          width='100%'
                          isLabelVisible={false}
                        /></div>
                      <div className={style.totalAverage}>40%</div>
                    </div>
                    <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>2</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={30}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="5px"
                          width='100%'
                          isLabelVisible={false}
                        /></div>
                      <div className={style.totalAverage}>30%</div>
                    </div>
                    <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>1</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={20}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="5px"
                          width='100%'
                          isLabelVisible={false}
                        /></div>
                      <div className={style.totalAverage}>20%</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className={style.ratingCardWrapper}>
              {commitCard.map((item, index) => (
                <div key={index} className={style.ratingCard}>
                  <div className={style.ratingCardInner}>
                    <div className={style.ratingCardInfoWrapper}>
                      <div className={style.ratingImgWrapper}><img className={style.ratingImg} src={item.image} /></div>
                      <div className={style.RatingInfo}>
                        <div className={style.customerName}>Mark</div>
                        <div className={style.ratings}> <StarRatings
                          rating={4}
                          starDimension="20px"
                          starSpacing="0.5px"
                          starRatedColor="#FCC767"

                        /> . Yesterday</div>
                        <div className={style.commit}>The coffee was really good and milky</div>
                      </div>
                    </div>
                    <div className={style.replyBackWrapper}><img onClick={() => togglereply(index)} className={style.replyBack} src={images.replyback} /></div>
                  </div>
                  {reply === index &&
                    <div className={style.inputWraaper}><input className={style.replyInput} /><img className={style.whitearrow} src={images.whiteLeftArrow} /></div>
                  }
                </div>

              ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
