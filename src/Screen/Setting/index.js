import React, { Profiler, useEffect, useState } from "react";
import style from "./style.module.css";
import images from "../../asset/index";
import { useDispatch } from "react-redux";
import { clearAuthToken } from "../../store/authTokenSlice";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import Modal from "react-modal";

export default function Setting() {
  const [isSelected, setIsSelect] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [panel, setPanel] = useState('profile')

  const handleLogout = () => {
    dispatch(clearAuthToken());
    navigate("/login");
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openLogoutModal = () => {
    setPanel('logout');
    setIsModalVisible(true);
  };



  const [selectBtn, setSelectBtn] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <div className={style.searchWrapper}>
          <div className={style.settingHeading}>Settings</div>
          <div className={style.noticationBtn}>
            <img
              className={style.notificationIcon}
              src={images.notificationIcon}
            />
            Notifications
          </div>
        </div>

        <img className={style.coverImg} src={images.settingCoverImg} />
        <div className={style.headingWrapper}>
          <div className={style.cafeName}>Havana Cafe</div>
          <div className={style.infoWrapper}>
            <div className={style.location}>
              <img className={style.locationIcon} src={images.locationIcon} />
              <span>NY, Newyork</span>
            </div>
            <div className={style.rating}>
              <img src={images.ratingIcon} className={style.starRating} />
              <span>4.8</span>
            </div>
          </div>
        </div>
        <div className={style.settingWrapper}>
          <div className={style.settingLeft}>
            <div className={style.settingOption} onClick={() => setPanel('profile')}>
              <div className={style.optionName} >
                <img className={style.optionIcon} src={images.editIconGreen} />
                Edit Profile
              </div>
              <div>
                <img className={style.arrow} src={images.arrowRight} />
              </div>
            </div>
            <div className={style.settingOption} onClick={() => setPanel("outlet")}>
              <div className={style.optionName} >
                <img className={style.optionIcon} src={images.editIconGreen} />
                Edit Outlet
              </div>
              <div>
                <img className={style.arrow} src={images.arrowRight} />
              </div>
            </div>
            <div className={style.settingOption} onClick={() => setPanel("notify")}>
              <div className={style.optionName} >
                <img
                  className={style.optionIcon}
                  src={images.notificationIcon}
                />
                Notifications
              </div>
              <div>
                <img className={style.arrow} src={images.arrowRight} />
              </div>
            </div>
            <div className={style.settingOption} onClick={() => setPanel("secuity")}>
              <div className={style.optionName}>
                <img className={style.optionIconTwo} src={images.security} />
                Security
              </div>
              <div>
                <img className={style.arrow} src={images.arrowRight} />
              </div>
            </div>
            <div className={style.settingOption} onClick={openLogoutModal} >
              <div className={style.optionName} >
                <img className={style.optionIcon} src={images.logout} />
                Logout
              </div>
            </div>
          </div>

          {panel === "profile" ? (<>    <div className={style.settingRight}>
            <div className={style.editprofileWrapper}>
              <div className={style.editprofile}>
                <div className={style.editHeading}>
                  <img className={style.editIcon} src={images.editIconGreen} />
                  Edit Profile
                </div>
                <div className={style.btn}>Save</div>
              </div>
            </div>
            <div className={style.InputFeild}>
              <div className={style.editinputWrapper}>
                <div className={style.inputHeadingTwo}>Admin Name</div>
                <input
                  onChange={(e) => setAdminName(e.target.value)}
                  className={style.editInput}
                  type="text"
                />
              </div>
              <div className={style.editinputWrapper}>
                <div className={style.inputHeadingTwo}>Email</div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={style.editInput}
                  type="text"
                />
              </div>
            </div>
            <div className={style.div}>
              <div className={style.editinputWrapper}>
                <div className={style.inputHeadingTwo}>Contact Number</div>
                <PhoneInput
                  value={value}
                  defaultCountry="US"
                  onChange={setValue}
                  className={style.custom_phone_input}
                />
              </div>
              <div className={style.inputdiv}>
                <div className={style.inputHeadingTwo}>location</div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={style.editInput}
                  type="text"
                />
              </div>
            </div>
          </div></>) :
            panel === 'outlet' ? (<>
              <div className={style.settingRight}>
                <div className={style.editprofileWrapper}>
                  <div className={style.editprofile}>
                    <div className={style.editHeading}>
                      <img className={style.editIcon} src={images.editIconGreen} />
                      Edit Outlet
                    </div>
                    <div className={style.btn}>Save</div>
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
                    </label>
                    <div className={style.uploadImgtext}>
                      <img className={style.uploadImg} src={images.uploadImg} />
                      Upload Images
                    </div>
                  </div>
                </div>
                <div className={style.InputFeild}>
                  <div className={style.editinputWrapper}>
                    <div className={style.inputHeadingTwo}>Outlet Name</div>
                    <input
                      onChange={(e) => setAdminName(e.target.value)}
                      className={style.editInput}
                      type="text"
                    />
                  </div>
                  <div className={style.editinputWrapper}>
                    <div className={style.inputHeadingTwo}>Description</div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className={style.editInput}
                      type="text"
                    />
                  </div>
                </div>
                <div className={style.div}>
                  <div className={style.editinputWrapper}>
                    <div className={style.inputHeadingTwo}>Contact Number</div>

                  </div>
                  <div className={style.inputdiv}>
                    <div className={style.inputHeadingTwo}>location</div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className={style.editInput}
                      type="text"
                    />
                  </div>
                </div>
              </div></>) :
              panel === 'notify' ? (<>   <div className={style.settingRight}>
                <div className={style.editprofileWrapper}>
                  <div className={style.editprofile}>
                    <div className={style.editHeading}>
                      <img className={style.editIcon} src={images.notificationIcon} />
                      Notifications
                    </div>
                    <div className={style.btn}>Save</div>
                  </div>

                </div>
                <div className={style.notificationBtnWrapper}>
                  <div className={style.modalOfferCard}>
                    <div className={style.offerCardHeading}>
                      General Notifications
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

                  <div className={style.modalOfferCard}>
                    <div className={style.offerCardHeading}>
                      Sound
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
                <div className={style.notificationBtnWrapper}>
                  <div className={style.modalOfferCard}>
                    <div className={style.offerCardHeading}>
                      Vibrate
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

                  <div className={style.modalOfferCard}>
                    <div className={style.offerCardHeading}>
                      App Updates
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
                <div className={style.notificationBtnWrapper}>
                  <div className={style.eventInputHeading}>
                    <div className={style.inputHeading}>Receive Notifications Via</div>
                    <div className={style.registrationDropDown}>
                      <div className={style.registrationHeading}>Push Notification & Email</div>
                      <img
                        className={style.dropDownIcon}
                        src={images.downArrow}
                      />
                    </div>
                  </div>
                  <div className={style.eventInputHeading}>
                    <div className={style.inputHeading}>Do not Receive Notifications</div>
                    <div className={style.registrationDropDown}>
                      <div className={style.registrationHeading}>Messages</div>
                      <img
                        className={style.dropDownIcon}
                        src={images.downArrow}
                      />
                    </div>
                  </div>


                </div>
              </div></>) :
                panel === "secuity" ? (<> <div className={style.settingRight}>
                  <div className={style.editprofileWrapper}>
                    <div className={style.editprofile}>
                      <div className={style.editHeading}>
                        <img className={style.editIcon} src={images.security} />
                        Security
                      </div>
                      <div className={style.btn}>Save</div>
                    </div>
                  </div>
                  <div className={style.securityWrapper}>
                    <div className={style.left}>
                      <div className={style.modalOfferCardBtn}>
                        <div className={style.offerCardHeading}>
                          Face ID
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
                      <div className={style.modalOfferCardBtn}>
                        <div className={style.offerCardHeading}>
                          Touch ID
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
                      <div className={style.passwordHeading}>Create Your New Password</div>
                      <div className={style.editinputWrapper}>
                        <div className={style.inputHeadingTwo}>Enter Current Password</div>
                        <input

                          className={style.editInput}
                          type="text"
                        />
                      </div>
                      <div className={style.editinputWrapper}>
                        <div className={style.inputHeadingTwo}>Enter New Password</div>
                        <input
                          className={style.editInput}
                          type="text"
                        />
                      </div>
                      <div className={style.editinputWrapper}>
                        <div className={style.inputHeadingTwo}>Enter Password Again</div>
                        <input
                          className={style.editInput}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={style.right}>
                      <div className={style.modalOfferCardBtn}>
                        <div className={style.offerCardHeading}>
                          Remember login details
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
                </div></>) :
                  panel === 'logout' && (<>
                    <Modal
                      isOpen={isModalVisible}
                      onRequestClose={() => setIsModalVisible(false)}
                      className={style.modal}
                    >
                      <div className={style.modalContainer}>
                        <div className={style.modalHeading}>
                          Logging Out?
                        </div>
                        <div className={style.asdasd}>
                          Thanks for stopping by. See you again soon!
                        </div>
                        <div className={style.logoutBtnWrapper}>
                        <div className={style.cancelBtn}  onClick={() => setIsModalVisible(false)}>
                          Cancel
                        </div>
                        <div className={style.logoutBtn}  onClick={handleLogout}>
                          logout
                        </div>
                        </div>
                        


                      </div>
                    </Modal>
                  </>)}
        </div>
      </div>
    </div>
  );
}
