import React, { useState } from "react";
import style from "./style.module.css";
import Modal from "react-modal";
import images from "../../asset";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Component/Pagination";

export default function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDropdownToggle = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  const navigate = useNavigate();

  // import { useDispatch } from 'react-redux';
  // const dispatch = useDispatch()
  // dispatch(clearAuthToken())

  const [dropDown, setDropDown] = useState(null);

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const [selectBtn, setSelectBtn] = useState(false);

  const [categoryName, setCategoryName] = useState("");

  const [cardData, setCardData] = useState([
    {
      image: images.coffeeImg,
      name: "Coffees",
    },
    {
      image: images.cookiesImg,
      name: "Cookies",
    },
    {
      image: images.sandwichesImg,
      name: "Sandwiches",
    },
    {
      image: images.frappersImg,
      name: "Frappers",
    },
    {
      image: images.desertsImg,
      name: "Deserts",
    },
    {
      image: images.startersImg,
      name: "Starters",
    },
  ]);

  const [itemCard, setItemCard] = useState([
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.cappuccino,
    },
    {
      images: images.coffeeImg,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = itemCard.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      <div className={`${style.menu} pr-2 md:pr-16`}>
        <div className={style.headingWrappper}>
          <div className={`${style.heading} md:text-2xl text-md`}>
            <img className={`${style.headingIcon} w-5 md:w-8`} src={images.categoriesIcon} />
            Categories
          </div>
          <div
            className={`${style.btn}  text-sm md:text-xl`}
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            <img className={`${style.plusIcon} w-3 md:w-4`} src={images.plusIcon} />
            Add Categories
          </div>
        </div>
        <div className={`${style.categoryRow} flex-wrap grid-flow-col`}>
          {cardData.map((Item, index) => (
            <div key={index} className={`${style.categoriesCard}`}>
              <img className={`${style.categoriesCardImg} w-full`} src={Item.image} />
              <div className={style.cardCover}>
                <div
                  onClick={() => handleDropdownToggle(index)}
                  className={style.dotMenu}
                >
                  {dropDown === index ? (
                    <div className={style.dropdown}>
                      <div
                        onClick={() => setIsEditModalVisible(true)}
                        className={style.edit}
                      >
                        <img className={style.editIcon} src={images.editIcon} />
                        <div>Edit</div>
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
                    <img
                      className={style.itemsCenter}
                      src={images.dotMenuIcon}
                    />
                  )}
                </div>
                <div className={style.itemsCenter}>
                  <div className={style.categoriesName}>{Item.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.headingWrappper}>
          <div className={`${style.heading}  md:text-2xl text-md`}>
            <img className={`${style.headingIcon} w-5 md:w-8`} src={images.coffeeItemIcon} />
            Coffees Items
          </div>
          <div  className={`${style.btn}  text-sm md:text-xl`} onClick={() => navigate("/AddItem")}>
            <img className={`${style.plusIcon} w-3 md:w-4`} src={images.plusIcon} />
            Add Items
          </div>
        </div>
        <div className={style.row}>
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className={style.itemCard}
              onClick={() => navigate("/itemdetails", { state: { item } })}
            >
              <img className={style.itemCardImg} src={item.images} />
              <div>
                <div className={style.itemName}>cappuccino</div>
                <div className={style.price}>
                  $3.35
                  <img className={style.blackDots} src={images.blackDots} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        className={style.modal}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHeadingWrapper}>
            <div>
              <img
                onClick={() => {
                  setIsModalVisible(false);
                }}
                src={images.cross}
                className={style.cross}
              />
            </div>
            <div className={style.modalHeading}>Add Category</div>

            <div className={style.modalBtn}>Save</div>
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
          <div className={style.addCategoryWrapper}>
            <div className={style.addCategory}>
              <div className={style.addCategoryHeading}>Category Name</div>
              <input
                className={style.input}
                type="text"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
          </div>
          <div className={style.addCategoryBtn}>
            <div className={style.ovalBtnWrapper}>
              <div className={style.activeHeading}>Active on Menu</div>
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
      <Modal
        isOpen={isEditModalVisible}
        onRequestClose={() => {
          setIsEditModalVisible(false);
        }}
        className={style.modal}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHeadingWrapper}>
            <div>
              <img
                onClick={() => {
                  setIsEditModalVisible(false);
                }}
                src={images.cross}
                className={style.cross}
              />
            </div>
            <div className={style.modalHeading}>Edit Category</div>

            <div
              onClick={() => {
                setIsEditModalVisible(false);
              }}
              className={style.modalBtn}
            >
              Save
            </div>
          </div>
          <div className={style.imageUploadWrapper}>
            <div className={style.InputImg}>
              <label for="img" className={style.uploadImage}>
                <img
                  className={style.uploadImgIcon}
                  src={images.uploadImgIcon}
                />
                <input
                  className={style.inputImg}
                  id="img"
                  type="file"
                  accept="image/png,image/jpeg"
                />
              </label>
              <div className={style.uploadImgtext}>
                <img className={style.uploadImg} src={images.uploadImg} />
                Upload Images
              </div>
            </div>
          </div>
          <div className={style.addCategoryWrapper}>
            <div className={style.addCategory}>
              <div className={style.addCategoryHeading}>Category Name</div>
              <input className={style.input} type="text" />
            </div>
          </div>
          <div className={style.addCategoryBtn}>
            <div className={style.ovalBtnWrapper}>
              <div className={style.activeHeading}>Active on Menu</div>
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
        totalPages={Math.ceil(itemCard.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
