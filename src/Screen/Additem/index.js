import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import images from "../../asset/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/authTokenSlice";
import { addMenu } from "../../services/config/API";

export default function AddItem() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [sizes, setSizes] = useState([{ size: "", price: "", serving: "" }]);

  const [specifications, setSpecifications] = useState([
    {
      filterName: "",
      options: [{ optionName: "", extraCharges: "" }],
      multiple: false,
      optional: false,
    },
  ]);
  const navigate = useNavigate();
  const authToken = useSelector(selectAuthToken);

  const addSizes = () => {
    setSizes([...sizes, { size: "", price: "", serving: "" }]);
  };

  const handleSizesChange = (index, field, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index] = { ...updatedSizes[index], [field]: value };
    setSizes(updatedSizes);
  };

  const deleteSizes = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSpecification = (index, field, value) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index] = {
      ...updatedSpecifications[index],
      [field]: value,
    };
    setSpecifications(updatedSpecifications);
  };

  const addOptions = (specificIndex) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[specificIndex].options.push({
      optionName: "",
      extraCharges: "",
    });
    setSpecifications(updatedSpecifications);
  };

  const handleOptionChange = (specificIndex, optionIndex, field, value) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[specificIndex].options[optionIndex] = {
      ...updatedSpecifications[specificIndex].options[optionIndex],
      [field]: value,
    };
    setSpecifications(updatedSpecifications);
  };

  const handleDeleteOption = (specificIndex, optionIndex) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[specificIndex].options.splice(optionIndex, 1);
    setSpecifications(updatedSpecifications);
  };

  const handleAddItem = async () => {
    try {
      console.log(
        selectedImage,
        itemName,
        itemDescription,
        sizes,
        specifications
      );

      const body = {
        image: selectedImage,
        name: itemName,
        description: itemDescription,
        sizes,
        specifications,
      };

      const response = await axios.post(
        "http://192.168.100.30:8080/outlet/addMenu",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("Item addded successfully: ", response.data.message);
      navigate("/menu");
    } catch (error) {
      console.log("Failed to add item: ", error.message);
    }
  };

  
  return (
    <div className={style.container}>
      <div className={style.headingWrapper}>
        <div
          className={style.backBtn}
          onClick={() => {
            navigate("/menu");
          }}
        >
          <img className={style.backArrow} src={images.backArrow} />
        </div>
        <div className={style.heading}>Add Item</div>
        <div
          className={style.btn}
          onClick={handleAddItem}
          // onClick={() => {
          //   navigate("/menu");
          // }}
        >
          Save
        </div>
      </div>
      <div className={style.addItem}>
        <div className={style.addItemLeft}>
          <div className={style.addItemDetails}>
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
              </label>
              <div className={style.uploadImgtext}>
                <img className={style.uploadImg} src={images.uploadImg} />
                Upload Images
              </div>
            </div>
            <div className={style.textFeild}>
              <div className={style.inputWrapper}>
                <div className={style.inputHeading}>Item Name</div>
                <input
                  className={style.textInput}
                  type="text"
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className={style.inputWrapper}>
                <div className={style.inputHeading}>Description</div>
                <textarea
                  cols={"10"}
                  rows={"5"}
                  className={style.textInputTwo}
                  onChange={(e) => setItemDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className={style.rowHeadingWrapper}>
            <div className={style.headingWrapperTwo}>
              <div className={style.infoheading}>Size</div>
              <div className={style.infoheading}>Price</div>
              <div className={style.infoheading}>Serves</div>
            </div>
          </div>

          {sizes.map((todo, index) => (
            <div className={style.row} key={index}>
              <div onClick={() => deleteSizes(index)} className={style.circle}>
                <div className={style.greenLine}></div>
              </div>

              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleSizesChange(index, "size", e.target.value)
                }
                value={todo.size}
              />

              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleSizesChange(index, "price", e.target.value)
                }
                value={todo.price}
              />

              <input
                className={style.textInputThree}
                type="text"
                onChange={(e) =>
                  handleSizesChange(index, "serves", e.target.value)
                }
                value={todo.serves}
              />
            </div>
          ))}
          <div className={style.btnWrapper}>
            <div className={style.btnTwo} onClick={addSizes}>
              <img className={style.plusIcon} src={images.plusIcon} />
              Add interval
            </div>
          </div>
        </div>
        <div className={style.addItemRight}>
          <div className={style.specHeading}>
            Add Specifications
            <img className={style.rightArrow} src={images.rightArrow} />
          </div>

          <div className={style.filteritem}>
            <div className={style.filter}>
              <div className={style.filterName}>Filter Name</div>
              {specifications.map((specification, specificIndex) => (
                <div key={specificIndex}>
                  <input
                    className={style.input}
                    type="text"
                    onChange={(e) =>
                      handleSpecification(
                        specificIndex,
                        "filterName",
                        e.target.value
                      )
                    }
                    value={specification.filterName}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className={style.filterOption}>Filter Options</div>
              <div className={style.rowHeadingWrapper}>
                <div className={style.headingWrapperThree}>
                  <div className={style.infoheadingTwo}>Name</div>
                  <div className={style.infoheadingTwo}>Extra Charges</div>
                </div>
              </div>
              {specifications.map((specification, specificIndex) => (
                <div key={specificIndex}>
                  {specification.options.map((option, optionIndex) => (
                    <div className={style.row} key={optionIndex}>
                      <div
                        onClick={() =>
                          handleDeleteOption(specificIndex, optionIndex)
                        }
                        className={style.circle}
                      >
                        <div className={style.greenLine}></div>
                      </div>

                      <input
                        className={style.textInputFour}
                        type="text"
                        onChange={(e) =>
                          handleOptionChange(
                            specificIndex,
                            optionIndex,
                            "optionName",
                            e.target.value
                          )
                        }
                        value={option.optionName}
                      />

                      <input
                        className={style.textInputFour}
                        type="text"
                        onChange={(e) =>
                          handleOptionChange(
                            specificIndex,
                            optionIndex,
                            "extraCharges",
                            e.target.value
                          )
                        }
                        value={option.extraCharges}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {specifications.map((specification, specificIndex) => (
              <div className={style.btnWrapperTwo} key={specificIndex}>
                <div
                  className={style.btnThree}
                  onClick={() => addOptions(specificIndex)}
                >
                  <img className={style.plusIcon} src={images.plusIcon} />
                  Add option
                </div>
              </div>
            ))}

            {specifications.map((specification, specificIndex) => (
              <div key={specificIndex}>
                <div className={style.required}>
                  Make it required
                  {specifications[specificIndex].multiple ? (
                    <div
                      className={style.ovalBtn}
                      onClick={() =>
                        handleSpecification(specificIndex, "multiple", false)
                      }
                    >
                      <div className={style.whiteBtn}></div>
                    </div>
                  ) : (
                    <div
                      className={style.notSelectedBtn}
                      onClick={() =>
                        handleSpecification(specificIndex, "multiple", true)
                      }
                    >
                      <div className={style.notSelectedgreen}></div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className={style.actionWrapper}>
              <div className={style.actionHeading}>Action</div>
              <div className={style.chooseWrapper}>
                {specifications.map((specification, specificIndex) => (
                  <React.Fragment key={specificIndex}>
                    <div
                      onClick={() =>
                        handleSpecification(
                          specificIndex,
                          "optional",
                          !specifications[specificIndex].optional
                        )
                      }
                      className={
                        specifications[specificIndex].optional
                          ? style.chooseMany
                          : style.chooseOne
                      }
                    >
                      Choose One
                    </div>
                    <div
                      onClick={() =>
                        handleSpecification(
                          specificIndex,
                          "optional",
                          !specifications[specificIndex].optional
                        )
                      }
                      className={
                        specifications[specificIndex].optional
                          ? style.chooseOne
                          : style.chooseMany
                      }
                    >
                      Choose Many
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={style.btnWrapperFour}>
              <div className={style.btn}>Add filter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
