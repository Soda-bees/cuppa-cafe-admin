import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import Modal from "react-modal";



export default function EventDetails() {
    const [description, setDescription] = useState('')
    const [eventDropDown, seteventDropDown] = useState(false)
    const [registration, setRegistration] = useState("select")
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

    const [eventTypeDD, setEventTypeDD] = useState(false)
    const [eventType, setEventType] = useState('Open')

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
    const [isEditable, setIsEditable] = useState(false)

    const toggleEditEventDetailMode = () => {
        setIsEditable(!isEditable)
    }

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



    return (
        <div className={style.container}>
            <div className={style.headingWrapper}>
                <div className={style.backBtn} onClick={() => navigate('/event')}>
                    <img className={style.backArrow} src={images.backArrow} />
                </div>
                <div className={style.heading}>
                    Event Details
                </div>

                <div className={style.btn} onClick={toggleEditEventDetailMode}>
                    {isEditable ? "Save Event" : "Edit Event"}
                </div>
            </div>
            <div className={style.eventDeatailWrapper}>
                <div className={style.eventDeatailLeft}>
                    <img className={style.EvnetDetailImg} src={images.eventCardImg2} />
                </div>
                <div className={style.eventDeatailRight}>
                    <div className={style.btnWrapper}>
                        <div className={style.tag}>
                            Upcoming
                        </div>
                    </div>
                    <div className={style.EventDetailsInfo}>
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Event Name</div>
                                <input className={style.userIput} disabled={!isEditable}/>
                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Date</div>
                                <div className={style.dataWrapper}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className={style.datePicker}
                                        disabled={!isEditable}
                                    />
                                    <img className={style.calenderImg} src={images.calendar} />
                                </div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.textField} onClick={() => isEditable && setTimeModal(true)}>
                                <div className={style.inputHeading}>Time</div>
                                <div className={style.registrationDropDown}>
                                    <div className={style.registrationHeading}> {startTimeHour}:{startTimeMinutes} {amStart} -{" "}
                                        {closingTimeHour} : {closingTimeMinutes} {amClose}{" "}</div>
                                    <img
                                        className={style.dropDownIcon}
                                        src={images.clock}
                                    />
                                </div>
                            </div>
                            <div className={style.textField3}>
                                <div className={style.inputHeading}>Event Type</div>
                                {eventTypeDD && isEditable ? (
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
                                        onClick={() => isEditable && setEventTypeDD(!eventTypeDD)}
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
                        <div className={style.infoWrapper}>
                            <div className={style.textField2}>
                                <div className={style.inputHeading}>Registration</div>
                                {eventDropDown && isEditable ? (
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
                                        onClick={() => isEditable && seteventDropDown(!eventDropDown)}
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
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Description</div>
                                <input className={style.userIput}onChange={(e) => setDescription(e.target.value)}  disabled={!isEditable}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={timeModal}
                onRequestClose={() => setTimeModal(false)}
                className={style.modalTime}
            >
                <>
                    <div className={style.modalContainer}>
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
        </div>
    )
}
