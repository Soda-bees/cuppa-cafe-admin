import React, { useState } from "react";
import style from "./style.module.css";
import images from "../../asset";
import StarRatings from "react-star-ratings";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(null);
  const [todayOrder, setTodayOrder] = useState("1000");
  const [cancelledOrder, setCancelOrder] = useState("5");
  const [menu, setMenu] = useState("6");
  const [totalCustomer, setTotalCustomer] = useState("2,486");
  const [totalProfit, setTotalProfit] = useState("$15,239.58");
  const [growth, setGrowth] = useState("$192.20");
  // const [orderDate, setOrderData] = useState("10/24 , 2024");
  // const [quantity, setQuantity] = useState("1");
  // const [coffeePrice, setCoffeePrice] = useState("$3.45");
  const [totalAveragesRating, setTotalAveragesRating] = useState("4.8");
  const [totalRatings, setTotalRatings] = useState("1000")

  const [card, setCard] = useState([
    {
      images: images.fullcappuccino,
      name: "Cappuccino",
      orderDate: "Oct 24 , 2024",
      quantity:"1",
      price:"$3.45"
    },
    {
      images: images.fullcappuccino,
      name: "Cappuccino",
      orderDate: "Oct 24 , 2024",
      quantity:"1",
      price:"$3.45"
    },
    {
      images: images.fullcappuccino,
      name: "Cappuccino",
      orderDate: "Oct 24 , 2024",
      quantity:"1",
      price:"$3.45"
    },
    {
      images: images.fullcappuccino,
      name: "Cappuccino",
      orderDate: "Oct 24 , 2024",
      quantity:"1",
      price:"$3.45"
    },
  ]);

  const [commitCard, setCommitCard] = useState([
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 4,
      review: "The coffee was really good and milky",
    },
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 5,
      review: "The coffee was really good and milky",
    },
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 4.5,
      review: "The coffee was really good and milky",
    },
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 4,
      review: "The coffee was really good and milky",
    },
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 5,
      review: "The coffee was really good and milky",
    },
    {
      image: images.profMarkPic,
      name:"Mark",
      date: "Yesterday",
      rating: 4.5,
      review: "The coffee was really good and milky",
    },
  ]);

  const toggleDropDown = (index) => {
    setDropDown((prevIndex) => (prevIndex === index ? null : index));
  };

  const updateOrderStatus = (index, orderStatus) => {
    const updatedCard = [...card];
    updatedCard[index].orderStatus = orderStatus;
    setCard(updatedCard);
  };
  
  

  const [reply, setReply] = useState(null);
  const togglereply = (index) => {
    setReply((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    { name: "Mon", pv: 2400, amt: 2400 },
    { name: "Tue", pv: 1398, amt: 2210 },
    { name: "Wed", pv: 9800, amt: 2290 },
    { name: "Thu", pv: 7800, amt: 2290 },
    { name: "Fri", pv: 8800, amt: 2290 },
    { name: "Sat", pv: 4800, amt: 2290 },
    { name: "Sun", pv: 6800, amt: 2290 },
  ];

  const progressBarData = [
    { star:5, completed: 64, maxCompleted: 100 },
    { star:4, completed: 24, maxCompleted: 100 },
    { star:3, completed: 10, maxCompleted: 100 },
    { star:2, completed: 2, maxCompleted: 100 },
    { star:1, completed: 0, maxCompleted: 100 }
  ];

  return (
    <div className={`${style.container} biggerlaptop:pl-[18%] pl-[20%]`}>
      <div className={style.menuTwo}>
        <div
          className={`${style.searchWrapper}  flex items-center justify-between`}
        >
          <div className=" w-full flex items-center  md:h-12 h-10  border rounded-xl border-borderColor pl-4 gap-2">
            <img className="cursor-pointer h-5 w-5" src={images.searchIcon} />
            <input
              className={`${style.searchInput} sm:text-md text-sm  w-full flex items-center bg-bgColor`}
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={`${style.noticationWrapper}  lg:w-40 sm:w-40 w-40`}>
            <div
              className={`${style.noticationBtn}  cursor-pointer active:opacity-50 md:h-12 h-10`}
            >
              <img
                className={`${style.notificationIcon} h-4 w-4`}
                src={images.notificationIcon}
              />
              <div className={`${style.noticationText}  text-sm `}>
                Notifications
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.menu} `}>
        <div
          className={`${style.dashBoardWrapper} w-[96%]  flex   justify-between`}
        >
          <div className={`${style.dashBoardLeft} w-[90%]`}>
            <div className={`${style.cardWrapper} w-full flex`}>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div>
                    <img
                      className={`${style.Icon}biggerlaptop:w-10 biggerlaptop:h-10 h-8 w-8`}
                      src={images.coffeeIcon}
                    />
                  </div>
                  <div
                    className={`${style.quantity} biggerlaptop:text-2xl md:text-xl font-semibold sm:text-lg text-lg `}
                  >
                    {todayOrder}
                  </div>
                </div>
                <div className={style.orderHeading}>Orders Today</div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div>
                    <img
                      className={`${style.IconTwo} biggerlaptop:w-14 biggerlaptop:h-10 w-12 h-8`}
                      src={images.coffeeCrossIcon}
                    />
                  </div>
                  <div
                    className={`${style.quantity} biggerlaptop:text-2xl md:text-xl font-semibold sm:text-lg text-lg `}
                  >
                    {cancelledOrder}
                  </div>
                </div>
                <div className={style.orderHeading}>Cancelled Orders</div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div>
                    <img
                      className={`${style.Icon} biggerlaptop:w-10 biggerlaptop:h-10 h-8 w-8`}
                      src={images.menuGreenIcon}
                    />
                  </div>
                  <div
                    className={`${style.quantity} biggerlaptop:text-2xl md:text-xl font-semibold sm:text-sm text-lg `}
                    ofMarkPic
                  >
                    {menu}
                  </div>
                </div>
                <div className={style.orderHeading}>Total Menus</div>
              </div>
              <div className={style.dashBoardCard}>
                <div className={style.cardInfo}>
                  <div>
                    <img
                      className={`${style.Icon} biggerlaptop:w-10 biggerlaptop:h-10 h-8 w-8`}
                      src={images.customerIcon}
                    />
                  </div>
                  <div
                    className={`${style.quantity} biggerlaptop:text-2xl md:text-xl font-semibold sm:text-sm text-lg `}
                    ofMarkPic
                  >
                    {totalCustomer}
                  </div>
                </div>
                <div className={style.orderHeading}>Total Customer</div>
              </div>
            </div>
            <div className={style.graphWrapper}>
              <div className={style.graphHeadingWrapper}>
                <div className={`${style.graphHeading} md:text-2xl text-md `}>
                  Business Summary
                </div>
                <div className={style.graphImgWrapper}>
                  <img
                    className={style.graphSettingIcon}
                    src={images.graphSetting}
                  />
                </div>
              </div>
              <div
                className={`${style.graph} border border-borderColor rounded-xl`}
              >
                <div className={style.saleWrapper}>
                  <div
                    className={`${style.saleHeading} md:text-xl  text-md font-bold`}
                  >
                    Sales
                  </div>
                  <div className={`${style.growthWrapper}  flex justify-end`}>
                    <div className={style.totalPrice}>{totalProfit}</div>
                    <div className={style.grothPrice}>
                      +{growth}{" "}
                      <img
                        className={style.growthArrow}
                        src={images.growthArrow}
                      />
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={data}>
                    <Tooltip />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#4CAD00"
                      strokeWidth={5}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={`${style.heading} md:text-2xl text-md `}>
              Recent Orders
            </div>
            <div
              className={`${style.recentOrderWrapper} text-white font-semibold md:text-lg text-xs`}
            >
              <div className={style.itemHeadingList}>
                <div className={style.listWrapper}>
                  <div className={`${style.itemHeading} pl-4`}>Item</div>
                </div>
                <div
                  className={`${style.HeadingList}  flex items-center gap-2`}
                >
                  <div className={style.itemHeading}>Date&Time</div>
                  <div className={style.itemHeading}>Qty.</div>
                  <div className={style.itemHeading}>Price</div>
                  <div className={`${style.itemHeading} `}>Status</div>
                </div>
              </div>
            </div>
            {card.map((item, index) => (
              <div className={style.OrderWrapper}>
                <div className={style.itemHeadingList}>
                  <div className={`${style.listWrapper} m-2`}>
                    <div
                      className={`${style.itemName} flex items-center gap-2 md:text-lg  text-xs font-semibold`}
                    >
                      <img
                        className={`${style.itemImg} rounded-2xl h-20 w-20 `}
                        src={item.images}
                      />
                      {item.name}
                    </div>
                  </div>
                  <div
                    className={`${style.listItemWrapper} md:text-lg text-xs  flex items-start  `}
                  >
                    <div className={style.listItem}>{item.orderDate}</div>
                    <div className={style.listItemTwo}>{item.quantity}</div>
                    <div className={style.listItemThree}>{item.price}</div>
                    <div
                      onClick={() => toggleDropDown(index)}
                      className={style.listItemFour}
                    >
                      {item.orderStatus ? item.orderStatus : "pending"}
                      <img
                        className={style.blackArrow}
                        src={
                          dropDown === index
                            ? images.blackArrowUp
                            : images.blackArrowDown
                        }
                      />
                      {dropDown === index && (
                        <div className={style.dropDown}>
                          <div className={style.dropDownOption}
                          onClick={() => {
                            updateOrderStatus(index, "Ready")
                          }}>
                            Ready
                          </div>

                          <div className={style.dropDownOption}
                          onClick={() => {
                            updateOrderStatus(index, "Picked")
                          }}>
                            Picked
                          </div>

                          <div className={style.dropDownOption}
                          onClick={() => {
                            updateOrderStatus(index, "Cancelled")
                          }}>
                            Cancelled
                          </div>
                        </div>
                      )}
                      {/* {dropDown === index && (
                        <div className={style.dropDown}>
                          <div className={style.dropDownOption}>Ready</div>
                          <div className={style.dropDownOption}>Picked</div>
                          <div className={style.dropDownOption}>Cancelled</div>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${style.dashBoardRight}  biggerlaptop:w-[38%] `}>
            <div
              className={`${style.ratingHeading} md:text-2xl text-md font-bold`}
            >
              Rating & Reviews
            </div>
            <div
              className={`${style.ratingwrapper}  border border-borderColor`}
            >
              <div className={style.ratingReviewCard}>
                <div className={`${style.headingRating} font-semibold text-md`}>
                  Rating
                </div>
                <div className={style.ratingReviewCardWrapper}>
                  <div className={`${style.ratingLeft} gap-2 h-20 mt-6`}>
                    <div className={style.ratingAverage}>
                      {totalAveragesRating}
                    </div>
                    <div className={`${style.ratingStar} `}>
                      <StarRatings
                        rating={4.8}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="#FCC767"
                      />
                    </div>
                    <div className={style.ratingTotalNumber}>
                      All ratings ({totalRatings})
                    </div>
                  </div>
                  <div className={style.ratingRight}>
                    {progressBarData.map((progress, index) => (
                      <div className={style.ProgressBarWrapper} key={index}>
                      <div className={style.starNumbar}>{progress.star}</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={progress.completed}
                          maxCompleted={progress.maxCompleted}
                          bgColor="#FCC767"
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
                      <div className={style.totalAverage}>{Math.floor((progress.completed / progress.maxCompleted) * 100)}%</div>
                    </div>
                    ))

                    }
                    {/* <div className={style.ProgressBarWrapper}>
                      <div className={style.starNumbar}>5</div>
                      <div>
                        <img className={style.starImg} src={images.star} />
                      </div>
                      <div className={style.ProgressBar}>
                        <ProgressBar
                          completed={60}
                          maxCompleted={100}
                          bgColor="#FCC767"
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
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
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
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
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
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
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
                      <div classNam={style.totalAverage}>30%</div>
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
                          height="3px"
                          width="100%"
                          isLabelVisible={false}
                        />
                      </div>
                      <div className={style.totalAverage}>20%</div>
                    </div>
                     */}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.ratingCardWrapper}>
              {commitCard.map((item, index) => (
                <div key={index} className={style.ratingCard}>
                  <div className={style.ratingCardInner}>
                    <div className={style.ratingCardInfoWrapper}>
                      <img
                        className={`${style.ratingImg} rounded-full h-12 w-12 `}
                        src={item.image}
                      />
                      <div className={style.RatingInfo}>
                        <div className={`${style.customerName} text-sm`}>
                          {item.name}
                        </div>
                        <div
                          className={`${style.ratings} text-sm flex items-center gap-1`}
                        >
                          <StarRatings
                            rating={item.rating}
                            starDimension="12px"
                            starSpacing="0.5px"
                            starRatedColor="#FCC767"
                          />
                          <div className="">.</div>
                          <div>{item.date}</div>
                        </div>
                        <div className={`${style.commit} text-sm`}>
                          {item.review}
                        </div>
                      </div>
                    </div>
                    <div className={style.replyBackWrapper}>
                      <img
                        onClick={() => togglereply(index)}
                        className={style.replyBack}
                        src={images.replyback}
                      />
                    </div>
                  </div>
                  {reply === index && (
                    <div
                      className={`${style.inputWraaper}
                    bg-gradient-to-tr from-gradColorLeft to-gradColorRight rounded-xl flex items-center px-4 h-9 ml-6`}
                    >
                      <input
                        className={`${style.replyInput} 
                     focus:outline-none bg-transparent rounded-lg h-7 w-full  text-white text-sm`}
                      />
                      <img
                        className={`${style.whitearrow} cursor-pointer h-5 w-5 `}
                        src={images.whiteLeftArrow}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
