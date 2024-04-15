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

export default function Events() {
  const [isSelected, setIsSelect] = useState(false);
  const [search, setSearch] = useState("");
  const [eventCard, setEventCard] = useState([
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
    {
      images: images.eventCardImg,
    },
    {
      images: images.eventCardImg2,
    },
  ]);
  const [dropDown, setDropDown] = useState(false);
  const handleDropdownToggle = (index) => {
    setDropDown(dropDown === index ? false : index);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const navigate = useNavigate()

  const [btn, setBtn] = useState(false);
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [timeModal, setTimeModal] = useState(false);
  const [startTimeHour, setStartTimeHour] = useState("00");
  const [startTimeMinutes, setStartTimeMinutes] = useState("00");
  const [startTime, setStartTime] = useState("AM");
  const [closingTimeHour, setClosingTimeHour] = useState("00");
  const [closingTimeMinutes, setClosingTimeMinutes] = useState("00");
  const [closingTime, setClosingTime] = useState("AM");
  const [focusedInput, setFocusedInput] = useState(null);
  const [closingTimeFinal, setClosingTimeFinal] = useState("AM");
  const [startTimeFinal, setStartTimeFinal] = useState("AM");
  const [selectBtn, setSelectBtn] = useState(false);

  const handleInputChange = (text, setter, maxValue) => {
    if (text === "" || (Number(text) >= 0 && Number(text) <= maxValue)) {
      setter(text);
    }
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleTimeToggle = (time) => {
    if (time === "AM" || time === "PM") {
      if (startTime === time) {
        setStartTimeFinal(time);
      } else {
        setClosingTimeFinal(time);
      }
    }
  };

  const [amStart, setAmStart] = useState("AM");
  const [amClose, setAmClose] = useState("AM");

  const toggleAmPmStart = (amPm) => {
    setAmStart(amPm);
  };
  const toggleAmPmClose = (amPm) => {
    setAmClose(amPm);
  };
  const [description, setDescription] = useState("");
  const [eventDropDown, seteventDropDown] = useState(false);
  const [registration, setRegistration] = useState("select");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = eventCard.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        <div className={style.btnWrapper}>
          <div className={style.offerHeadingWrapper}>
            <div onClick={() => setBtn(!btn)}>
              <div className={btn ? style.word : style.greenBtn}>
                Upcoming Events
              </div>
            </div>
            <div onClick={() => setBtn(!btn)}>
              <div className={btn ? style.greenBtn : style.word}>
                Past Events
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsEventModalVisible(!isEventModalVisible)}
            className={style.btn}
          >
            Create Event
          </div>
        </div>
        <div className={style.row}>
          {currentProducts.map((item, index) => (
            <div key={index} className={style.eventCard} onClick={() => navigate('/eventdetails')}>
              <img className={style.offerCardImg} src={item.images} />
              <div className={style.cardHeading}>
                <div>
                  <div className={style.itemName}>Name of Events</div>
                  <div className={style.itemDate}>27 Jan 2023 </div>
                </div>
                <div className={style.btn}>Upcoming</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isEventModalVisible}
        onRequestClose={() => setIsEventModalVisible(false)}
        className={style.modalEvent}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHeadingWrapper}>
            <div>
              <img
                onClick={() => setIsEventModalVisible(false)}
                src={images.cross}
                className={style.cross}
              />
            </div>
            <div className={style.modalHeading}>Add Event</div>

            <div
              onClick={() => setIsEventModalVisible(false)}
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
          <div className={style.AddEvent}>
            <div className={style.EventDetailsInfo}>
              <div className={style.eventInfoWrapper}>
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Event Name</div>
                  <input
                    className={style.userIput}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Date</div>
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
              <div className={style.eventInfoWrapper}>
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Time</div>
                  <div
                    className={style.timeWrapper}
                    onClick={() => setTimeModal(true)}
                  >
                    <div className={style.userIput}>
                      {startTimeHour}:{startTimeMinutes} {amStart} -{" "}
                      {closingTimeHour} : {closingTimeMinutes} {amClose}{" "}
                    </div>
                    <img className={style.clockImg} src={images.clock} />
                  </div>
                </div>
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Event Type</div>
                  <div className={style.registrationDropDown}>
                    <div className={style.registrationHeading}>Exclusive</div>
                    <img
                      className={style.dropDownIcon}
                      src={images.downArrow}
                    />
                  </div>
                </div>
              </div>
              <div className={style.eventInfoWrapper}>
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Registration</div>
                  {eventDropDown ? (
                    <div className={style.dropDown}>
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
                <div className={style.eventInputHeading}>
                  <div className={style.inputHeading}>Description</div>
                  <input
                    className={style.userIput}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={timeModal}
        onRequestClose={() => setTimeModal(false)}
        className={style.modalTime}
      >
        <>
          <div>
            <div>
              <div className={style.inputTitle}>Opening Time</div>
              <div class={style.timeRow}>
                <input
                  value={startTimeHour}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setStartTimeHour, 12)
                  }
                  type="number"
                  class={style.timeInput}
                  onFocus={() => handleFocus("startHour")}
                />
                <div class={style.columnEqual}>:</div>
                <input
                  value={startTimeMinutes}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setStartTimeMinutes, 60)
                  }
                  type="number"
                  class={style.timeInput}
                  onFocus={() => handleFocus("startMinutes")}
                />
                <div className={style.btnCol}>
                  <div
                    className={
                      amStart === "AM" ? style.clickable : style.clickableTwo
                    }
                    onClick={() => {
                      toggleAmPmStart("AM");
                    }}
                  >
                    AM
                  </div>
                  <div
                    className={
                      amStart === "PM" ? style.clickable : style.clickableTwo
                    }
                    onClick={() => {
                      toggleAmPmStart("PM");
                    }}
                  >
                    PM
                  </div>
                </div>
              </div>
              <div class={style.timeTextRow}>
                <div>Hour</div>
                <div>Minute</div>
              </div>
            </div>

            <div>
              <div class={style.inputTitle}>Closing Time</div>
              <div class={style.timeRow}>
                <input
                  class={style.timeInput}
                  value={closingTimeHour}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setClosingTimeHour, 12)
                  }
                  type="number"
                  onFocus={() => handleFocus("closingHour")}
                />
                <div class={style.columnEqual}>:</div>

                <input
                  value={closingTimeMinutes}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setClosingTimeMinutes, 60)
                  }
                  type="number"
                  class={style.timeInput}
                  onFocus={() => handleFocus("closingMinutes")}
                />
                <div className={style.btnCol}>
                  <div
                    className={
                      amClose === "AM" ? style.clickable : style.clickableTwo
                    }
                    onClick={() => toggleAmPmClose("AM")}
                  >
                    AM
                  </div>
                  <div
                    className={
                      amClose === "PM" ? style.clickable : style.clickableTwo
                    }
                    onClick={() => toggleAmPmClose("PM")}
                  >
                    PM
                  </div>
                </div>
              </div>
              <div class={style.timeTextRow}>
                <div>Hour</div>
                <div>Minute</div>
              </div>
            </div>
          </div>
        </>
      </Modal>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(eventCard.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
