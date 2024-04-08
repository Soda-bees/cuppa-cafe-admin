import React, { useState } from "react";
import style from "./style.module.css";
import Modal from "react-modal";
import images from "../../asset";

export default function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDropdownToggle = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  const [dropDown, setDropDown] = useState(null);

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [search, setSearch] = useState('')


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
  ]);

  return (
    // <div className={style.container}>
    //   <div className={style.childContainer}>
    //     Hello
    //   </div>
    // </div>
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
        <div className={style.headingWrappper}>
          <div className={style.heading}>
            <img className={style.headingIcon} src={images.categoriesIcon} />
            Categories
          </div>
          <div
            className={style.btn}
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            <img className={style.plusIcon} src={images.plusIcon} />
            Add Categories
          </div>
        </div>
        <div className={style.categoryRow}>
          {cardData.map((Item, index) => (
            <div key={index} className={style.categoriesCard}>
              <img className={style.categoriesCardImg} src={Item.image} />
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
                    <img src={images.dotMenuIcon} />
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
          <div className={style.heading}>
            <img className={style.headingIcon} src={images.coffeeItemIcon} />
            Coffees Items
          </div>
          <div className={style.btn}>
            <img className={style.plusIcon} src={images.plusIcon} />
            Add Items
          </div>
        </div>
        <div className={style.row}>
          {itemCard.map((item, index) => (
            <div key={index} className={style.itemCard}>
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
    </div>
  );
}
