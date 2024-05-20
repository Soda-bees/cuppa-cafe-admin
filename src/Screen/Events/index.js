import React, { useEffect, useState } from "react";
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
import axios from "axios";
export default function Events() {
  const [isSelected, setIsSelect] = useState(false);
  const [search, setSearch] = useState("");
  const [eventTypeDD, setEventTypeDD] = useState(false)
  const [eventType, setEventType] = useState('Open')


  const [eventCard, setEventCard] = useState([
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
  ]);

  const [pastEventCard, setPastEventCard] = useState([
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg,
      title: "Name of Events",
      date: "27 Jan 2023"
    },
    {
      images: images.eventCardImg2,
      title: "Name of Events",
      date: "27 Jan 2023"
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

  const [startTimeHour, setStartTimeHour] = useState('');
  const [startTimeMinutes, setStartTimeMinutes] = useState('');
  const [amStart, setAmStart] = useState('');
  const [closingTimeHour, setClosingTimeHour] = useState('');
  const [closingTimeMinutes, setClosingTimeMinutes] = useState('');
  const [amClose, setAmClose] = useState('');

  // Function to convert time to 12-hour format
  function convertTo12HourFormat(time) {
    // Parse the time string to extract hours and minutes
    const [hours, minutes] = time.split(':').map(Number);

    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    let twelveHour = hours % 12;
    twelveHour = twelveHour === 0 ? 12 : twelveHour;

    // Format minutes with leading zero if needed
    const formattedMinutes = String(minutes).padStart(2, '0');

    // Return the formatted time
    return `${twelveHour}:${formattedMinutes} ${period}`;
  }

  useEffect(() => {
    // Update state variables with current time in 12-hour format
    const currentTime12Hour = convertTo12HourFormat(`${startDate.getHours()}:${startDate.getMinutes()}`);
    const [hour, minutes, amPm] = currentTime12Hour.split(/:|\s/);
    setStartTimeHour(hour);
    setStartTimeMinutes(minutes);
    setAmStart(amPm);


    setClosingTimeHour(+hour + 1)
    setClosingTimeMinutes(minutes)
    setAmClose(amPm)

  }, []);


  const [timeModal, setTimeModal] = useState(false);
  // const [startTimeHour, setStartTimeHour] = useState(startDate.getHours());
  // const [startTimeMinutes, setStartTimeMinutes] = useState(startDate.getMinutes());
  const [startTime, setStartTime] = useState("AM");
  const [closingTime, setClosingTime] = useState("AM");
  const [focusedInput, setFocusedInput] = useState(null);
  const [closingTimeFinal, setClosingTimeFinal] = useState("AM");
  const [startTimeFinal, setStartTimeFinal] = useState("AM");
  const [selectBtn, setSelectBtn] = useState(false);


  const handleInputChange = (text, setter, type) => {
    if (text === "" || (Number(text) >= 0)) {
      if (type === "hours") {
        if (+text > 12) {
          setter(0)
          if (amStart === 'AM') setAmStart('PM')
          else setAmStart('AM')
        }
        else {
          setter(text);
        }
      }
      else {
        if (+text > 59) {
          setter(0)
          if (+startTimeHour + 1 > 11) {
            setStartTimeHour(0)
            if (amStart === 'AM') setAmStart('PM')
            else setAmStart('AM')
          }
          else {
            setStartTimeHour(+startTimeHour + 1);
          }
        }
        else {
          setter(text);
        }
      }
    }
  };
  const handleInputChangeTwo = (text, setter, type) => {
    if (text === "" || (Number(text) >= 0)) {
      if (type === "hours") {
        if (+text > 12) {
          setter(0)
          if (amClose === 'AM') setAmClose('PM')
          else setAmClose('AM')
        }
        else {
          setter(text);
        }
      }
      else {
        if (+text > 59) {
          setter(0)
          if (+startTimeHour + 1 > 11) {
            setStartTimeHour(0)
            if (amStart === 'AM') setAmStart('PM')
            else setAmStart('AM')
          }
          else {
            setStartTimeHour(+startTimeHour + 1);
          }
        }
        else {
          setter(text);
        }
      }
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

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = eventCard.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [createEventTime, setCreateEventTime] = useState ({
    startTimeHour:0,
    startTimeMinutes:0,
    amStart: 'AM',
    closingTimeHour:0,
    closingTimeMinutes:0,
    amClose:'AM'
  })
  
  const handleCreateEventTime = (updatedTime) => {
    setCreateEventTime(prevTime => ({...prevTime, ...updatedTime}))
  }

  const handleAdminCreateEvent = async () => {
    try {
      console.log(selectedImage,eventName,startDate,createEventTime,eventType,description);
      const response = await axios.post("http://192.168.100.30:8080/outlet/createEvent", {
        coverPhoto: selectedImage,
        title:eventName,
        date:startDate,
        timing:createEventTime,
        exclusive:eventType,
        // registration,
        description
      })
      console.log("Event created successfully: ",response.data)
      setIsEventModalVisible(false)
    } catch (error) {
      console.error("Event not created: ", error)
    }
  }


  
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
            <div onClick={() => setBtn(false)}>
              <div className={btn ? style.word : style.greenBtn}>
                Upcoming Events
              </div>
            </div>
            <div onClick={() => setBtn(true)}>
              <div className={btn ? style.greenBtn : style.word}>
                Past Events
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsEventModalVisible(!isEventModalVisible)}
            className={style.btn}>
            Create Event
          </div>
        </div>
        <div className={style.row}>
          {btn ? (
            pastEventCard.map((item,index) => (
              <div key={index} className={style.eventCard} 
              // onClick={() => navigate('/eventdetails')}
              >
              <img className={style.offerCardImg} src={item.images} />
              <div className={style.cardHeading}>
                <div>
                  <div className={style.eventName}>{item.title}</div>
                  <div className={style.eventDate}>{item.date}</div>
                </div>
              </div>
            </div>
            ))
            
          ):(
            currentProducts.map((item,index) => (
              <div key={index} className={style.eventCard} onClick={() => navigate('/eventdetails')}>
              <img className={style.offerCardImg} src={item.images} />
              <div className={style.cardHeading}>
                <div>
                  <div className={style.eventName}>{item.title}</div>
                  <div className={style.eventDate}>{item.date}</div>
                </div>
                <div className={style.cardBtnWrapper}>
                  <div className={style.cardBtn}>Upcoming</div>
                </div>
              </div>
            </div>
            ))
          )
          }
          {/* {currentProducts.map((item, index) => (
            <div key={index} className={style.eventCard} onClick={() => navigate('/eventdetails')}>
              <img className={style.offerCardImg} src={item.images} />
              <div className={style.cardHeading}>
                <div>
                  <div className={style.eventName}>{item.title}</div>
                  <div className={style.eventDate}>{item.date}</div>
                </div>
                <div className={style.cardBtnWrapper}>
                  <div className={style.cardBtn}>Upcoming</div>
                </div>
              </div>
            </div>
          ))} */}
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
                onClick={() => {
                  setIsEventModalVisible(false)
                }}
                src={images.cross}
                className={style.cross}
              />
            </div>
            <div className={style.modalHeading}>Add Event</div>

            <div
            onClick={()=> 
              // handleAdminCreateEvent()
              setIsEventModalVisible(false)
            }
              // onClick={() => setIsEventModalVisible(false)}
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
                <div className={style.eventInputHeading3}>
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
                    <div className={style.timefield}>
                      {startTimeHour}:{startTimeMinutes} {amStart} - {" "}
                      {closingTimeHour} : {closingTimeMinutes} {amClose}{" "}
                    </div>
                    <img className={style.clockImg} src={images.clock} />
                  </div>
                </div>
                <div className={style.eventInputHeading2}>
                  <div className={style.inputHeading}>Event Type</div>
                  {eventTypeDD ? (
                    <div className={style.dropDown}>
                      <div
                        className={style.registrationHeading}
                        onClick={() => {
                          setEventTypeDD(!eventTypeDD);
                          setEventType('Open')
                        }}
                      >
                        Open
                      </div>
                      <div
                        className={style.registrationHeading}
                        onClick={() => {
                          setEventTypeDD(!eventTypeDD);
                          setEventType('Exclusive')
                        }}
                      >
                        Exclusive
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => setEventTypeDD(!eventTypeDD)}
                      className={style.registrationDropDown}
                    >
                      <div className={style.registrationHeading}>
                        {eventType}
                      </div>
                      <img
                        className={style.dropDownIcon}
                        src={images.downArrow}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={style.eventInfoWrapper}>
                <div className={style.eventInputHeading4}>
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
                  value={(createEventTime.startTimeHour)}
                  onChange={(e) => handleCreateEventTime({startTimeHour: e.target.value})}
                  // onChange={(e) => {
                  //   const value = e.target.value.replace(/^0+/, ''); // Remove leading zeros
                  //   handleInputChange(value, setStartTimeHour, "hours");
                  // }}
                  type="number"
                  class={style.timeInput}
                  onFocus={() => handleFocus("startHour")}
                />
                <div class={style.columnEqual}>:</div>
                <input
                  value={createEventTime.startTimeMinutes}
                  onChange={(e) => handleCreateEventTime({startTimeMinutes: e.target.value})}
                  // onChange={(e) =>
                  //   handleInputChange(e.target.value, setStartTimeMinutes, 60)
                  // }
                  type="number"
                  class={style.timeInput}
                  onFocus={() => handleFocus("startMinutes")}
                />
                <div className={style.btnCol}>
                  <div
                  className={createEventTime.amStart === "AM" ? style.clickable : style.clickableTwo}
                  onClick={() => handleCreateEventTime({amStart: "AM"})}
                    // className={
                    //   amStart === "AM" ? style.clickable : style.clickableTwo
                    // }
                    // onClick={() => {
                    //   toggleAmPmStart("AM");
                    // }}
                  >
                    AM
                  </div>
                  <div
                  className={createEventTime.amStart === "PM" ? style.clickable : style.clickableTwo}
                  onClick={() => handleCreateEventTime({amStart: "PM"})}
                    // className={
                    //   amStart === "PM" ? style.clickable : style.clickableTwo
                    // }
                    // onClick={() => {
                    //   toggleAmPmStart("PM");
                    // }}
                  >
                    PM
                  </div>
                </div>
              </div>
              <div class={style.timeTextWrapper}>
                <div class={style.timeTextRow}>
                  <div>Hour</div>
                  <div>Minute</div>
                </div>
              </div>
            </div>

            <div>
              <div class={style.inputTitle}>Closing Time</div>
              <div class={style.timeRow}>
                <input
                  class={style.timeInput}
                  value={closingTimeHour}
                  onChange={(e) => {
                    const value = e.target.value.replace(/^0+/, ''); // Remove leading zeros
                    handleInputChangeTwo(value, setClosingTimeHour, "hours");
                  }}
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
              <div class={style.timeTextWrapper}>
                <div class={style.timeTextRow}>
                  <div>Hour</div>
                  <div>Minute</div>
                </div>
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
