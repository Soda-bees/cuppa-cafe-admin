import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset/index'
import Modal from 'react-modal'


export default function Events() {
    const [isSelected, setIsSelect] = useState(false)
    const [search, setSearch] = useState('')
    const [eventCard, setEventCard] = useState([
        {
            images: images.eventCardImg
        },
        {
            images: images.eventCardImg2
        },
        {
            images: images.eventCardImg
        },
        {
            images: images.eventCardImg2
        },
        {
            images: images.eventCardImg
        },
        {
            images: images.eventCardImg2
        },
        {
            images: images.eventCardImg
        },
        {
            images: images.eventCardImg2
        },

    ])
    const [dropDown, setDropDown] = useState(false)
    const handleDropdownToggle = (index) => {
        setDropDown(dropDown === index ? false : index);
    };

    const [btn, setbtn] = useState("upComing")
    const [isEventModalVisible, setIsEventModalVisible] = useState(false)
    return (
        <div className={style.container}>
            <div className={style.menubar}>
                <div className={style.logo}>
                    <img src={images.menulogo} />
                </div>
                <div className={style.menuList} >
                    <img className={style.menuImg} src={images.dashBoardIcon} />
                    Dashboard
                </div>
                <div onClick={() => setIsSelect(!isSelected)} className={isSelected ? style.menuList : style.menuListTwo}>
                    <img className={style.menuImg} src={isSelected ? images.menuIcon : images.menuGreenIcon} />
                    Menu
                </div>
                <div className={style.menuList}>
                    <img className={style.menuImg} src={images.offersIcon} />
                    Offers
                </div>
                <div className={style.menuList}>
                    <img className={style.menuImg} src={images.eventsIcon} />
                    Events
                </div>
                <div className={style.menuList}>
                    <img className={style.menuImg} src={images.rewardsIcon} />
                    Rewards
                </div>
                <div className={style.menuList}>
                    <img className={style.menuImg} src={images.settingsIcon} />
                    Settings
                </div>
            </div>
            <div className={style.menu}>
                <div className={style.btnWrapper}>
                    <div  className={style.headingWrapper}>
                        <div onClick={() => setbtn("upComing")} className={btn === "upComing" ? style.btn : style.btnTwo}  >
                            Upcoming Events
                        </div>
                        <div onClick={() => setbtn("past")} className={btn === "past" ? style.btn : style.btnTwo}> Past Events</div>
                    </div>

                    <div onClick={() => setIsEventModalVisible(!isEventModalVisible)} className={style.btn}>
                        Create Event
                    </div>
                </div>
                <div className={style.row}>
                    {eventCard.map((item, index) => (
                        <div key={index} className={style.itemCard}>
                            <img className={style.offerCardImg} src={item.images} />
                            <div className={style.cardHeading}>
                                <div>
                                    <div className={style.itemName}>Name of Events</div>
                                    <div className={style.itemDate} >27 Jan 2023 </div>
                                </div>
                                <div className={style.btn}>
                                    Upcoming
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

            <Modal isOpen={isEventModalVisible} onRequestClose={() => setIsEventModalVisible(false)} className={style.modal}>
                <div className={style.modalContainer}>
                    <div className={style.ModalheadingWrapper}>
                        <div>
                            <img onClick={() => 
                setIsEventModalVisible(false)
            } src={images.cross} className={style.cross} />
                        </div>
                        <div className={style.heading}>
                            Add Category
                        </div>

                        <div onClick={() => 
                setIsEventModalVisible(false)
            }   className={style.btn}>
                            Save
                        </div>
                    </div>
                    <div className={style.imageUploadWrapper}>
                        <div className={style.InputImg}>
                            <label for="img" className={style.uploadImage}  >
                                <img className={style.uploadImgIcon} src={images.uploadImgIcon} />
                                <input className={style.inputImg} id="img" type='file' accept="image/png,image/jpeg" />
                            </label>
                            <div className={style.uploadImgtext}>
                                <img className={style.uploadImg} src={images.uploadImg} />
                                Upload Images
                            </div>
                        </div>
                    </div>
                    <div className={style.AddEvent}>
                    <div className={style.EventDetailsInfo}>
                        <div className={style.infoWrapper}>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Event Name</div>
                            </div>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Date</div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Time</div>
                            </div>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Event Type</div>
                            </div>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Registration</div>
                            </div>
                            <div className={style.lable}>
                                <div className={style.inputHeading}>Description</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}