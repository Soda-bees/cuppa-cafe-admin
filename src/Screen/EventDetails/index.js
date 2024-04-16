import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";



export default function EventDetails() {
    const [description, setDescription] = useState('')
    const [eventDropDown, seteventDropDown] = useState(false)
    const [registration, setRegistration] = useState("select")
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
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
                        <div className={style.btn}>
                            Upcoming
                        </div>
                    </div>
                    <div className={style.EventDetailsInfo}>
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Event Name</div>
                                <input className={style.userIput} placeholder='ABC Event Name' />
                            </div>
                            <div className={style.textField}>
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
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Time</div>
                                <div className={style.registrationDropDown}>
                                    <div className={style.registrationHeading}>10:00 AM - 01:00 AM</div>
                                    <img
                                        className={style.dropDownIcon}
                                        src={images.clock}
                                    />
                                </div>
                            </div>
                            <div className={style.textField}>
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
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Registration</div>
                                <div className={style.registrationDropDown}>
                                    <div className={style.registrationHeading}>No</div>
                                    <img
                                        className={style.dropDownIcon}
                                        src={images.downArrow}
                                    />
                                </div>

                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Description</div>
                                <input className={style.userIput} placeholder='Lowkey Book Read' onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
