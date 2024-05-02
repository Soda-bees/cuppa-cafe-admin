import { React, useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import Modal from "react-modal";
import Pagination from "../../Component/Pagination";
import { useNavigate } from "react-router-dom";


export default function Rewards() {
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState(false);
  const [rewardCard, setRewardCard] = useState([
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
    {
      images: images.rewardCardImg,
    },
  ]);

  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false);

  const navigate = useNavigate();

  const [selectImg, setSelectImg] = useState(false)
  const [selectImgTwo, setSelectImgTwo] = useState(false)
  const [openNextModal, setOpenNextModal] = useState(false)
  const [modalComplete, setModalComplete] = useState(false)


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
          <div className={style.rewardHeading}>
            Rewards Overview
          </div>
          <div
            onClick={() => setIsOfferModalVisible(!isOfferModalVisible)}
            className={style.btn}
          >
            Create Reward
          </div>
        </div>
        <div className={style.offerHeadingWrapper}>
          <div onClick={() => setBtn(!btn)}>
            <div className={btn ? style.word : style.greenBtn}>
              Active
            </div>
          </div>
          <div onClick={() => setBtn(!btn)}>
            <div className={btn ? style.greenBtn : style.word}>
              All
            </div>
          </div>
        </div>
        <div className={style.row}>
          {currentProducts.map((item, index) => (
            <div key={index} className={style.rewardCard} onClick={() => navigate("/rewardsDetails")}>
              <div className={style.rewardHeadingWrapper}>
                <div className={style.rewardCardHeading}>Buy 5 Get 1 Free</div>
                <div className={style.reawadPara}>Order 5 Coffees & Get 1 Free</div>
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
              <img className={style.cross} src={images.cross} />
            </div>
            <div className={style.modalHeading}>
              Create A Reward
            </div>
            <div
              className={style.modalBtn}
              onClick={() => setOpenNextModal(!openNextModal)}
            >Next
            </div>
          </div>
          <div className={style.dropDownWrappper}>
            <div className={style.dropDownleft}>
              <div className={style.headingWrapper}>
                <div className={style.dropDownHeading}>How many stamps to collect reward?</div>
              </div>

              <div className={style.dropDownOpen}>
                <div className={style.dropDownSelect} onClick={() => setSelectImg(!selectImg)} >
                  <div className={style.dropDownPara}>Enter number of stamps</div>
                  <div >
                    <img className={style.dropDownIcon} src={selectImg ? images.arrowUp : images.downArrow} />
                  </div>
                </div>
                {selectImg &&
                  <div className={style.dropDown}>
                    <div className={style.dropDownOption}>5</div>
                    <div className={style.dropDownOption}>10</div>
                    <div className={style.dropDownOption}>15</div>
                    <div className={style.dropDownOption}>20</div>
                  </div>
                }

              </div>
            </div>
            <div className={style.dropDownRight}>
              <div className={style.headingWrapper}>
                <div className={style.dropDownHeading}>What reward would you like to offer?</div>
              </div>
              <div className={style.dropDownOpen}>
                <div className={style.dropDownSelect} onClick={() => setSelectImgTwo(!selectImgTwo)} >
                  <div className={style.dropDownPara}>Choose reward</div>
                  <div >
                    <img className={style.dropDownIcon} src={selectImgTwo ? images.arrowUp : images.downArrow} />
                  </div>
                </div>
                {selectImgTwo &&
                  <div className={style.dropDown}>
                    <div className={style.dropDownOption}>Tea / Coffee</div>
                    <div className={style.dropDownOption}>Latte</div>
                    <div className={style.dropDownOption}>Donut / Muffin</div>
                    <div className={style.dropDownOption}>Bagel</div>
                  </div>
                }

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
        <img className={style.crossTwo} src={images.cross} />
        <div className={style.ReiewContainer}>
          <div className={style.reviewHeading}>
            Review
          </div>
          <div className={style.orderInfoWrapper}>
            <div className={style.orderInfo} >
              <div className={style.orderHeading}>Number of stamps to collect</div>
              <div className={style.orderQuantity}>20</div>
            </div>
            <div className={style.orderInfo}>
              <div className={style.orderHeading} >Reward</div>
              <div className={style.orderQuantity}>1 Latte</div>
            </div>
          </div>
          <div className={style.logoutBtnWrapper}>
            <div className={style.logoutBtn} onClick={() => {
              setModalComplete(!modalComplete)
              setOpenNextModal(!openNextModal)
              setIsOfferModalVisible(!isOfferModalVisible)
            }} >
              Create
            </div>
            <div className={style.cancelBtn}>
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
        <img onClick={() => setModalComplete(!modalComplete)} className={style.crossTwo} src={images.cross} />
        <div className={style.completeContainer}>
          <div className={style.completeHeading}>
            Congratulations!
          </div>
          <div className={style.completeImgWrapper}>
            <img className={style.completeImg} src={images.completeImg} />
          </div>
          <div className={style.completeParaWrapper}>
            <div className={style.completePara}>New Reward Created Successfully!</div>
          </div>

          <div className={style.completebtnWrapper}>
            <div className={style.completebtn}>
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
  )
}
