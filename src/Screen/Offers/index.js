import React, { useState } from "react";
import style from "./style.module.css";
import images from "../../asset/index";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Pagination from "../../Component/Pagination";
import { useNavigate } from "react-router-dom";

export default function Offer() {
  const [isSelected, setIsSelect] = useState(false);
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState(false);
  const [offerCard, setOfferCard] = useState([
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
    {
      images: images.offerCardImg,
    },
  ]);
  const [dropDown, setDropDown] = useState(false);
  const handleDropdownToggle = (index) => {
    setDropDown(dropDown === index ? false : index);
  };
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false);

  const navigate = useNavigate();


  const [filterTodo, setFilterTodo] = useState([
    { name: "Name 1", price: "Price 1" },
    { name: "Name 2", price: "Price 2" },
    { name: "Name 3", price: "Price 3" }
  ]);

  const addFilterTodo = () => {
    // Create a new todo object and add it to the todos array
    const newFilterTodo = {
      name: "",
      price: "",
    };
    setFilterTodo([...filterTodo, newFilterTodo]);
  };

  const handleFilterTodoChange = (index, field, value) => {
    const updatedFilterTodos = [...filterTodo];
    updatedFilterTodos[index] = {
      ...updatedFilterTodos[index],
      [field]: value,
    };
    setFilterTodo(updatedFilterTodos);
  };

  const deleteFilterTodo = (index) => {
    const updatedFilterTodos = [...[...filterTodo]];
    updatedFilterTodos.splice(index, 1);
    setFilterTodo(updatedFilterTodos);
  };



  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [discountOfferName, setDiscountOfferName] = useState("");
  const [discountOfferPrice, setDiscountOfferPrice] = useState("");
  const [eventDropDown, seteventDropDown] = useState(false);
  const [registration, setRegistration] = useState("select");
  const [selectBtn, setSelectBtn] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = offerCard.slice(
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
      <div className={style.menu}>
        <div className={style.btnWrapper}>
          <div className={style.offerHeadingWrapper}>
            <div onClick={() => setBtn(!btn)}>
              <div className={btn ? style.word : style.greenBtn}>
                Current Offers
              </div>
            </div>
            <div onClick={() => setBtn(!btn)}>
              <div className={btn ? style.greenBtn : style.word}>
                Past Offers
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOfferModalVisible(!isOfferModalVisible)}
            className={style.btn}
          >
            Create Offer
          </div>
        </div>
        <div className={style.row}>
          {currentProducts.map((item, index) => (
            <div key={index} className={style.itemCard}
              onClick={() => navigate('/createoffer')}
              //  onClick={() => navigate('/createoffer', { state: { item } })}
            >
              <img className={style.offerCardImg} src={item.images} />
              <div className={style.cardHeading}>
                <div className={style.itenName}>Free Coffee Just For You</div>
                <div >08/17/2023</div>
              </div>
              <div className={style.OfferInfo}>
                <ul>
                  <li>Free Coffee on Manhattan Outlet</li>
                  <li>Offer Valid Till 08/17/2023</li>
                  <li>Terms and Conditions Apply</li>
                </ul>
                <div
                  onClick={() => handleDropdownToggle(index)}
                  className={style.dotMenu}
                >
                  {dropDown === index ? (
                    <div className={style.dropdown}>
                      <div className={style.edit}>
                        <img className={style.editIcon} src={images.editIcon} />
                        Edit
                      </div>
                      <div className={style.line}></div>
                      <div className={style.remove}>
                        <img
                          className={style.removeIcon}
                          src={images.removeIcon}
                        />
                        Remove
                      </div>
                    </div>
                  ) : (
                    <img className={style.blackDots} src={images.blackDots} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isOfferModalVisible}
        onRequestClose={() => setIsOfferModalVisible(false)}
        className={style.modalOffer}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHeadingWrapper}>
            <div>
              <img
                onClick={() => setIsOfferModalVisible(false)}
                src={images.cross}
                className={style.cross}
              />
            </div>
            <div className={style.modalHeading}>Create Offer</div>

            <div
              onClick={() => setIsOfferModalVisible(false)}
              className={style.btn}
            >
              Add
            </div>
          </div>
          <div className={style.imageUploadWrapper}>
            <div className={style.InputImg}>
              <label for="img" className={style.uploadImage}>
                <img
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : images.uploadImgIcon
                  }
                  className={selectedImage ? style.seletedImg : style.icon}
                  alt="Upload Image"
                />
                <input
                  id="img"
                  className={style.inputImg}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleImageChange}
                />
                {/* <img className={style.uploadImgIcon} src={images.uploadImgIcon} />
                                            <input className={style.inputImg} id="img" type='file' accept="image/png,image/jpeg" /> */}
              </label>
              <div className={style.uploadImgtext}>
                <img className={style.uploadImg} src={images.uploadImg} />
                Upload Images
              </div>
            </div>
          </div>
          <div className={style.addOffer}>
            <div class={style.textFieldWrapper}>
              <div className={style.textfield}>
                <div className={style.inputHeading}>Offer Title</div>
                <input
                  className={style.userInput}
                  onChange={(e) => setOfferTitle(e.target.value)}
                />
              </div>
              <div className={style.textfield}>
                <div className={style.inputHeading}>Valid Till</div>
                <div className={style.dataWrapper}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className={style.datePicker}
                  />
                  <img className={style.calenderImg} src={images.calendar} />
                </div>
              </div>
            </div>
            <div className={style.offerInfoWrapper}>
              <div className={style.infoWrapper}>
                <div className={style.description}>
                  <div className={style.inputHeading}>Description</div>
                  <textarea
                    rows="10"
                    cols="20"
                    onChange={(e) => setOfferDescription(e.target.value)}
                    className={style.userInputTwo}
                  ></textarea>
                </div>
                <div className={style.promo}>
                  <div className={style.inputHeading}>Exclusive Promo</div>
                  {eventDropDown ? (
                    <div className={style.dropDownTwo}>
                      <div
                        className={style.registrationHeading}
                        onClick={() => {
                          seteventDropDown(!eventDropDown);
                          setRegistration("Yes");
                        }}
                      >
                        Yes
                      </div>
                      <div
                        className={style.registrationHeading}
                        onClick={() => {
                          seteventDropDown(!eventDropDown);
                          setRegistration("No");
                        }}
                      >
                        No
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => seteventDropDown(!eventDropDown)}
                      className={style.registrationDropDown}
                    >
                      <div className={style.registrationHeading}>
                        {registration}
                      </div>
                      <img
                        className={style.dropDownIcon}
                        src={images.downArrow}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={style.infoWrapper}>
                <div className={style.discount}>
                  <div className={style.inputHeading}>Discount</div>
                  {filterTodo.map((index, todo) => (
                    <div key={index} className={style.inputWrapper}>
                      <input
                        type="text"
                        onChange={(e) =>
                          handleFilterTodoChange(index, "name", e.target.value)
                        }
                        value={todo.name}
                        className={style.textInput}
                      />
                      <input
                        type="text"
                        onChange={(e) =>
                          handleFilterTodoChange(index, "price", e.target.value)
                        }
                        value={todo.price}
                        className={style.textInput}
                      />
                      <div
                        onClick={() => deleteFilterTodo(index)}
                        className={style.circle}
                      >
                        <div className={style.greenLine}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={style.offerModalBtn}>
                  <div className={style.modalBtnWrapper}>
                    <div onClick={addFilterTodo} className={style.modalBtn}>
                      <img className={style.plusIcon} src={images.plusIcon} />
                      Add product
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.btnCentre}>
            <div className={style.modalOfferCard}>
              <div className={style.offerCardHeading}>
                <img className={style.offersIcon} src={images.offersIcon} />
                Coffee Offer
              </div>
              {selectBtn ? (
                <div
                  className={style.ovalBtn}
                  onClick={() => setSelectBtn(!selectBtn)}
                >
                  <div className={style.whiteBtn}></div>
                </div>
              ) : (
                <div
                  className={style.notSelectedBtn}
                  onClick={() => setSelectBtn(!selectBtn)}
                >
                  <div className={style.notSelectedgreen}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(offerCard.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
