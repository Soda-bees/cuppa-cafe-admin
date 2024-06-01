import { React, useState } from "react";
import style from "./style.module.css";
import images from "../../asset";
import Modal from "react-modal";
import Pagination from "../../Component/Pagination";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/authTokenSlice";
import axios from "axios";

export default function Rewards() {
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState(false);
  const [rewardCard, setRewardCard] = useState([
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
  ]);

  const [allRewardCard, setAllRewardCard] = useState([
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
    {
      images: images.rewardCardImg,
      title: "Buy 5 Get 1 Free",
      description: "Order 5 Coffees & Get 1 Free",
    },
  ]);

  const authToken = useSelector(selectAuthToken);

  const [numberOfStamps, setNumberOfStamps] = useState([
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ]);

  const [chooseReward, setChooseReward] = useState([
    { type: "Tea/Coffee" },
    { type: "Latte" },
    { type: "Donut/Muffin" },
    { type: "Bagel" },
  ]);
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false);

  const navigate = useNavigate();

  const [selectImg, setSelectImg] = useState(false);
  const [selectImgTwo, setSelectImgTwo] = useState(false);
  const [openNextModal, setOpenNextModal] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [selectedNumberOfStamps, setSelectedNumberOfStamps] = useState(null);
  const [selectedRewardType, setSelectedRewardType] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = rewardCard.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectNumberOfStamps = (number) => {
    setSelectedNumberOfStamps(number);
  };

  const handleSelectRewardType = (type) => {
    setSelectedRewardType(type);
  };

  const handleCreateReward = async () => {
    try {
      console.log(selectedNumberOfStamps, selectedRewardType);

      const body = {
        numberOfOrders: selectedNumberOfStamps,
        rewardItem: selectedRewardType,
      };

      const response = await axios.post(
        "http://192.168.100.30:8080/outlet/createOutletReward",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("Reward created successfully: ", response.data.message);
      setModalComplete(!modalComplete);
      setOpenNextModal(!openNextModal);
      setIsOfferModalVisible(!isOfferModalVisible);
    } catch (error) {
      console.log("Failed to create reward: ", error.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={`${style.menuTwo}`}>
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
          <div className={`${style.noticationWrapper}  lg:w-40   sm:w-40 w-40`}>
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
      <div className={style.menu}>
        <div className={style.btnWrapper}>
          <div className={style.rewardHeading}>Rewards Overview</div>
          <div
            onClick={() => setIsOfferModalVisible(!isOfferModalVisible)}
            className={style.btn}
          >
            Create Reward
          </div>
        </div>
        <div className={style.offerHeadingWrapper}>
          <div onClick={() => setBtn(false)}>
            <div className={btn ? style.word : style.greenBtn}>Active</div>
          </div>
          <div onClick={() => setBtn(true)}>
            <div className={btn ? style.greenBtn : style.word}>All</div>
          </div>
        </div>
        <div className={style.row}>
          {btn
            ? allRewardCard.map((item, index) => (
                <div
                  key={index}
                  className={style.rewardCard}
                  onClick={() => navigate("/rewardsDetails")}
                >
                  <div className={style.rewardHeadingWrapper}>
                    <div className={style.rewardCardHeading}>{item.title}</div>
                    <div className={style.reawadPara}>{item.description}</div>
                  </div>
                  <div className={style.rewardImgWrapper}>
                    <img className={style.rewardImg} src={item.images} />
                  </div>
                </div>
              ))
            : currentProducts.map((item, index) => (
                <div
                  key={index}
                  className={style.rewardCard}
                  onClick={() => navigate("/rewardsDetails")}
                >
                  <div className={style.rewardHeadingWrapper}>
                    <div className={style.rewardCardHeading}>{item.title}</div>
                    <div className={style.reawadPara}>{item.description}</div>
                  </div>
                  <div className={style.rewardImgWrapper}>
                    <img className={style.rewardImg} src={item.images} />
                  </div>
                </div>
              ))}
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className={style.rewardCard}
              onClick={() => navigate("/rewardsDetails")}
            >
              <div className={style.rewardHeadingWrapper}>
                <div className={style.rewardCardHeading}>{item.title}</div>
                <div className={style.reawadPara}>{item.description}</div>
              </div>
              <div className={style.rewardImgWrapper}>
                <img className={style.rewardImg} src={item.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isOfferModalVisible}
        onRequestClose={() => setIsOfferModalVisible(false)}
        className={style.modalReward}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHeadingWrapper}>
            <div>
              <img
                className={style.cross}
                src={images.cross}
                onClick={() => setIsOfferModalVisible(false)}
              />
            </div>
            <div className={style.modalHeading}>Create A Reward</div>
            <div
              className={style.modalBtn}
              onClick={() => setOpenNextModal(!openNextModal)}
            >
              Next
            </div>
          </div>
          <div className={style.dropDownWrappper}>
            <div className={style.dropDownleft}>
              <div className={style.headingWrapper}>
                <div className={style.dropDownHeading}>
                  How many stamps to collect reward?
                </div>
              </div>

              <div className={style.dropDownOpen}>
                <div
                  className={style.dropDownSelect}
                  onClick={() => setSelectImg(!selectImg)}
                >
                  <div className={style.dropDownPara}>
                    Enter number of stamps
                  </div>
                  <div>
                    <img
                      className={style.dropDownIcon}
                      src={selectImg ? images.arrowUp : images.downArrow}
                    />
                  </div>
                </div>

                {selectImg && (
                  <div className={style.dropDown}>
                    {numberOfStamps.map((item, index) => (
                      <div
                        key={index}
                        className={style.dropDownOption}
                        onClick={() => handleSelectNumberOfStamps(item.number)}
                      >
                        {item.number}
                      </div>
                    ))}
                    {/* <div className={style.dropDownOption}>5</div>
                    <div className={style.dropDownOption}>10</div>
                    <div className={style.dropDownOption}>15</div>
                    <div className={style.dropDownOption}>20</div> */}
                  </div>
                )}
              </div>
            </div>
            <div className={style.dropDownRight}>
              <div className={style.headingWrapper}>
                <div className={style.dropDownHeading}>
                  What reward would you like to offer?
                </div>
              </div>
              <div className={style.dropDownOpen}>
                <div
                  className={style.dropDownSelect}
                  onClick={() => setSelectImgTwo(!selectImgTwo)}
                >
                  <div className={style.dropDownPara}>Choose reward</div>
                  <div>
                    <img
                      className={style.dropDownIcon}
                      src={selectImgTwo ? images.arrowUp : images.downArrow}
                    />
                  </div>
                </div>
                {selectImgTwo && (
                  <div className={style.dropDown}>
                    {chooseReward.map((item, index) => (
                      <div
                        key={index}
                        className={style.dropDownOption}
                        onClick={() => handleSelectRewardType(item.type)}
                      >
                        {item.type}
                      </div>
                    ))}
                    {/* <div className={style.dropDownOption}>Latte</div>
                    <div className={style.dropDownOption}>Donut / Muffin</div>
                    <div className={style.dropDownOption}>Bagel</div> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={openNextModal}
        onRequestClose={() => setOpenNextModal(false)}
        className={style.reviewModal}
      >
        <img
          className={style.crossTwo}
          src={images.cross}
          onClick={() => setOpenNextModal(false)}
        />
        <div className={style.ReiewContainer}>
          <div className={style.reviewHeading}>Review</div>
          <div className={style.orderInfoWrapper}>
            <div className={style.orderInfo}>
              <div className={style.orderHeading}>
                Number of stamps to collect
              </div>
              <div className={style.orderQuantity}>
                {selectedNumberOfStamps}
              </div>
            </div>
            <div className={style.orderInfo}>
              <div className={style.orderHeading}>Reward</div>
              <div className={style.orderQuantity}>1 {selectedRewardType}</div>
            </div>
          </div>
          <div className={style.logoutBtnWrapper}>
            <div
              className={style.logoutBtn}
              onClick={handleCreateReward}
              // onClick={() => {
              //   setModalComplete(!modalComplete);
              //   setOpenNextModal(!openNextModal);
              //   setIsOfferModalVisible(!isOfferModalVisible);
              // }}
            >
              Create
            </div>
            <div
              className={style.cancelBtn}
              onClick={() => setOpenNextModal(false)}
            >
              Edit
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalComplete}
        onRequestClose={() => setModalComplete(false)}
        className={style.completeModal}
      >
        <img
          onClick={() => setModalComplete(!modalComplete)}
          className={style.crossTwo}
          src={images.cross}
        />
        <div className={style.completeContainer}>
          <div className={style.completeHeading}>Congratulations!</div>
          <div className={style.completeImgWrapper}>
            <img className={style.completeImg} src={images.completeImg} />
          </div>
          <div className={style.completeParaWrapper}>
            <div className={style.completePara}>
              New Reward Created Successfully!
            </div>
          </div>

          <div className={style.completebtnWrapper}>
            <div
              className={style.completebtn}
              onClick={() => setModalComplete(!modalComplete)}
            >
              Rewards
              <div className={style.arrow}>
                <img className={style.arrowImg} src={images.singInArrow} />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(rewardCard.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
