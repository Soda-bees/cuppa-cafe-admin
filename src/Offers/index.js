import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset/index'
import Modal from 'react-modal'


export default function Offer() {
    const [isSelected, setIsSelect] = useState(false)
    const [search, setSearch] = useState('')
    const [offerCard, setOfferCard] = useState([
        {
            images: images.offerCardImg
        },
        {
            images: images.offerCardImg
        },
        {
            images: images.offerCardImg
        },
        {
            images: images.offerCardImg
        },
        {
            images: images.offerCardImg
        },
        {
            images: images.offerCardImg
        },

    ])
    const [dropDown, setDropDown] = useState(false)
    const handleDropdownToggle = (index) => {
        setDropDown(dropDown === index ? false : index);
    };

    const [btn, setbtn] = useState("cureent")
    const [isOfferModalVisible, setIsOfferModalVisible] = useState(false)

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
                    <div o className={style.headingWrapper}>
                        <div onClick={() => setbtn("current")} className={btn === "current" ? style.heading : style.btn}  >
                            Current Offers
                        </div>
                        <div onClick={() => setbtn("past")} className={btn === "past" ? style.btn : style.heading}>Past Offers</div>
                    </div>

                    <div onClick={() => setIsOfferModalVisible(!isOfferModalVisible)} className={style.btn}>
                        Create Offer
                    </div>
                </div>
                <div className={style.row}>
                    {offerCard.map((item, index) => (
                        <div key={index} className={style.itemCard}>
                            <img className={style.offerCardImg} src={item.images} />
                            <div className={style.cardHeading}>
                                <div className={style.itenName}>Free Coffee Just For You</div>
                                <div>
                                    08/17/2023
                                </div>
                            </div>
                            <div className={style.OfferInfo}>
                                <ul>
                                    <li>Free Coffee on Manhattan Outlet</li>
                                    <li>Offer Valid Till 08/17/2023</li>
                                    <li>Terms and Conditions Apply</li>
                                </ul>
                                <div onClick={() => handleDropdownToggle(index)} className={style.dotMenu}>
                                    {dropDown === index ? <div className={style.dropdown}>
                                        <div className={style.edit}>
                                            <img className={style.editIcon} src={images.editIcon} />
                                            Edit
                                        </div>
                                        <div className={style.line}></div>
                                        <div className={style.remove}>
                                            <img className={style.removeIcon} src={images.removeIcon} />
                                            Remove
                                        </div>
                                    </div> : <img className={style.blackDots} src={images.blackDots} />
                                    }
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isOfferModalVisible} onRequestClose={() => setIsOfferModalVisible(false)} className={style.modal}>
                <div className={style.modalContainer}>
                    <div className={style.ModalheadingWrapper}>
                        <div>
                            <img onClick={() =>
                                setIsOfferModalVisible(false)
                            } src={images.cross} className={style.cross} />
                        </div>
                        <div className={style.heading}>
                            Add Category
                        </div>

                        <div onClick={() =>
                            setIsOfferModalVisible(false)
                        } className={style.btn}>
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
                        <div class={style.textFieldWrapper}>
                            <div className={style.textfield}>
                                <div className={style.inputHeading}>Offer Title</div>
                            </div>
                            <div className={style.textfield}>
                                <div className={style.inputHeading}>Valid Till</div>
                            </div>
                        </div>
                        <div className={style.offerInfoWrapper}>
                            <div className={style.infoWrapper}>
                                <div className={style.description}>
                                    <div className={style.inputHeading}>Description</div>
                                </div>
                                <div className={style.promo}>
                                    <div className={style.inputHeading}>Exclusive Promo</div>
                                </div>
                            </div>
                            <div className={style.infoWrapper}>
                                <div className={style.discount}>
                                    <div className={style.inputHeading}>Discount</div>
                                    <div className={style.inputWrapper} >
                                        <input type='text' className={style.textInput} />
                                        <input type='text' className={style.textInput} />
                                        <div className={style.circle}><div className={style.greenLine}></div></div>
                                    </div>
                                    <div className={style.inputWrapper} >
                                        <input type='text' className={style.textInput} />
                                        <input type='text' className={style.textInput} />
                                        <div className={style.circle}><div className={style.greenLine}></div></div>
                                    </div>
                                    <div className={style.inputWrapper} >
                                        <input type='text' className={style.textInput} />
                                        <input type='text' className={style.textInput} />
                                        <div className={style.circle}><div className={style.greenLine}></div></div>
                                    </div>
                                </div>
                                <div className={style.modalBtnWrapper}>
                                    <div className={style.modalBtn}>
                                        <img src={images.plusIcon} />
                                        Add product
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.btnCentre}>
                    <div className={style.offerCard}>
                        <div className={style.offerCardHeading}>
                            <img className={style.offersIcon} src={images.offersIcon} />
                            Coffee Offer
                        </div>
                        <div>
                            <img className={style.modalBtnImg} src={images.btnImg} />
                        </div>
                    </div>
                    </div>
                  
                </div>
            </Modal>
        </div>
    )
}
