import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset/index'


export default function Setting() {
    const [isSelected, setIsSelect] = useState(false)
    const [search, setSearch] = useState('')
    const [adminName, setAdminName] = useState("")
    const [email, setEmail] = useState('')

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
                <div className={style.searchWrapper}>
                    <div className={style.searh}>
                        <img className={style.searchIcon} src={images.searchIcon} />
                        <input className={style.searchInput} type='text' placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className={style.noticationBtn}>
                        <img className={style.notificationIcon} src={images.notificationIcon} />
                        Notifications
                    </div>
                </div>
                <div className={style.heading}>
                    Settings
                </div>
                <img className={style.coverImg} src={images.settingCoverImg} />
                <div className={style.headingWrapper}>
                    <div className={style.cafeName}>
                        Havana Cafe
                    </div>
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
                        <div className={style.settingOption}>
                            <div className={style.optionName}>
                                <img className={style.optionIcon} src={images.editIconGreen} />
                                Edit Profile
                            </div>
                            <div>
                                <img className={style.arrow} src={images.leftArrow} />
                            </div>
                        </div>
                        <div className={style.settingOption}>
                            <div className={style.optionName}>
                                <img className={style.optionIcon} src={images.editIconGreen} />
                                Edit Outlet
                            </div>
                            <div >
                                <img className={style.arrow} src={images.leftArrow} />
                            </div>
                        </div>
                        <div className={style.settingOption}>
                            <div className={style.optionName}>
                                <img className={style.optionIcon} src={images.notificationIcon} />
                                Notifications
                            </div>
                            <div>
                                <img className={style.arrow} src={images.leftArrow} />
                            </div>
                        </div>
                        <div className={style.settingOption}>
                            <div className={style.optionName}>
                                <img className={style.optionIconTwo} src={images.security} />
                                Security
                            </div>
                            <div >
                                <img className={style.arrow} src={images.leftArrow} />
                            </div>
                        </div>
                        <div className={style.settingOption}>
                            <div className={style.optionName}>
                                <img className={style.optionIcon} src={images.logout} />
                                Logout
                            </div>
                        </div>
                    </div>
                    <div className={style.settingRight}>
                        <div className={style.editprofileWrapper}>
                            <div className={style.editprofile}>
                                <div className={style.editHeading}>
                                    <img className={style.editIcon} src={images.editIconGreen} />
                                    Edit Profile
                                </div>
                                <div className={style.btn}>
                                    Save
                                </div>
                            </div>
                        </div>
                        <div className={style.InputFeild}>
                            <div className={style.editinputWrapper}>
                                <div className={style.lable}>Admin Name</div><input onChange={(e) => setAdminName(e.target.value)} className={style.editInput} type='text' />
                            </div>
                            <div className={style.editinputWrapper}>
                                <div className={style.lable} >Email</div><input onChange={(e) => setEmail(e.target.value)} className={style.editInput} type='text' />
                            </div>
                        </div>
                        <div className={style.div}>
                        <div className={style.inputdiv} >
                            <div className={style.lable} >
                                phone number
                            </div>
                        </div>
                        <div className={style.inputdiv}>
                            <div className={style.lable} >
                                location
                            </div>
                        </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}