import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset'



export default function EventDetails() {
    const [description, setDescription] = useState('')
    const [eventDropDown, seteventDropDown] = useState(false)
    const [registration, setRegistration] = useState("select")
    return (
        <div className={style.container}>
            <div className={style.headingWrapper}>
                <div className={style.backBtn}>
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
                                <input className={style.userIput}/>
                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Date</div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Time</div>
                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Event Type</div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Registration</div>
                              
                                
                            </div>
                            <div className={style.textField}>
                                <div className={style.inputHeading}>Description</div>
                                <input className={style.userIput} onChange={(e)=> setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
