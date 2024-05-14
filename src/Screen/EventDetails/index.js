import React, { useState, useEffect } from 'react'
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

    // const [timeModal, setTimeModal] = useState(false);
    // const [startTimeHour, setStartTimeHour] = useState("00");
    // const [startTimeMinutes, setStartTimeMinutes] = useState("00");
    // const [startTime, setStartTime] = useState("AM");
    // const [closingTimeHour, setClosingTimeHour] = useState("00");
    // const [closingTimeMinutes, setClosingTimeMinutes] = useState("00");
    // const [closingTime, setClosingTime] = useState("AM");
    // const [focusedInput, setFocusedInput] = useState(null);
    // const [closingTimeFinal, setClosingTimeFinal] = useState("AM");
    // const [startTimeFinal, setStartTimeFinal] = useState("AM");
    // const [selectBtn, setSelectBtn] = useState(false);

    // const handleInputChange = (text, setter, maxValue) => {
    //     if (text === "" || (Number(text) >= 0 && Number(text) <= maxValue)) {
    //         setter(text);
    //     }
    // };

    // const handleFocus = (inputName) => {
    //     setFocusedInput(inputName);
    // };

    // const handleTimeToggle = (time) => {
    //     if (time === "AM" || time === "PM") {
    //         if (startTime === time) {
    //             setStartTimeFinal(time);
    //         } else {
    //             setClosingTimeFinal(time);
    //         }
    //     }
    // };

    // const [amStart, setAmStart] = useState("AM");
    // const [amClose, setAmClose] = useState("AM");

    // const toggleAmPmStart = (amPm) => {
    //     setAmStart(amPm);
    // };
    // const toggleAmPmClose = (amPm) => {
    //     setAmClose(amPm);
    // };


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

    return (
        <div className={style.container}>
            <div className={style.headingWrapper}>
                <div className={style.backBtn} onClick={() => navigate('/event')}>
                    <img className={style.backArrow} src={images.backArrow} />
                </div>
                <div className={style.heading}>
                    Event Details
                </div>

                <div className={style.btn}>
                    Edit Event
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
                                <input className={style.userIput} />
                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Date</div>
                                <div className={style.dateWrapper}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className={style.datePicker}
                                    />
                                    <img className={style.calenderImg} src={images.calendar} />
                                </div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.textField} onClick={() => setTimeModal(true)}>
                                <div className={style.inputHeading}>Time</div>
                                <div className={style.registrationDropDown}>
                                    <div className={style.registrationHeadingTwo}> {startTimeHour}:{startTimeMinutes} {amStart} -{" "}
                                        {closingTimeHour} : {closingTimeMinutes} {amClose}{" "}</div>
                                    <img
                                        className={style.dropDownIcon}
                                        src={images.clock}
                                    />
                                </div>
                            </div>
                            <div className={style.textField3}>
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
                                        <div className={style.registrationHeadingTwo}>
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
                                        <div className={style.registrationHeadingTwo}>
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
                                <input className={style.userIput} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal
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
                            <div class={style.timeTextRow}>
                                <div>Hour</div>
                                <div>Minute</div>
                            </div>
                        </div>
                    </div>
                </>
            </Modal> */}
            <Modal
                isOpen={timeModal}
                onRequestClose={() => setTimeModal(false)}
                className={style.modalTime}
            >
                <div >
                    <div>
                        <div>
                            <div className={style.inputTitle}>Opening Time</div>
                            <div class={style.timeRow}>
                                <input
                                    value={(startTimeHour)}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/^0+/, ''); // Remove leading zeros
                                        handleInputChange(value, setStartTimeHour, "hours");
                                    }}
                                    type="number"
                                    class={style.timeInput}
                                    onFocus={() => handleFocus("startHour")}
                                />
                                <div class={style.columnEqual}>:</div>
                                <input
                                    value={startTimeMinutes}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/^0+/, '');
                                        handleInputChange(value, setStartTimeMinutes, 60)
                                    }}
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
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/^0+/, '');
                                        handleInputChange(value, setClosingTimeMinutes, 60)
                                    }}
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
                </div>
            </Modal>
        </div>
    )
}
