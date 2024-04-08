import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset'
import Modal from 'react-modal'
import { Country } from 'country-state-city';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function Menu() {
    const [isSelected, setIsSelected] = useState("menu")
    const [search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(null)
    const [value, onChange] = useState('10:00');

    const [selectedCountry, setSelectedCountry] = useState(false)
    const country = Country.getAllCountries()
    const [countryName, setcountryName] = useState("Select Country")

    const handleChange = (option) => {
        setIsSelected(option)
    }


    const [startDate, setStartDate] = useState(new Date());
    const [cardData, setCardData] = useState([
        {

            image: images.coffeeImg,
            name: "Coffees"
        },
        {

            image: images.cookiesImg,
            name: "Cookies"
        },
        {

            image: images.sandwichesImg,
            name: "Sandwiches"
        },
        {

            image: images.frappersImg,
            name: "Frappers"
        },
        {
            image: images.desertsImg,
            name: "Deserts"
        },
        {
            image: images.startersImg,
            name: "Starters"
        },
    ])

    const [itemCard, setItemCard] = useState([
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
        {
            images: images.cappuccino
        },
    ])

    const handleDropdownToggle = (index) => {
        setDropDown(dropDown === index ? null : index);
    };

    const [btn, setBtn] = useState(false)
    const [isOfferModalVisible, setIsOfferModalVisible] = useState(false)

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

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)


    const [isEventModalVisible, setIsEventModalVisible] = useState(false)
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

    // Settings 
    const [adminName, setAdminName] = useState("")
    const [email, setEmail] = useState('')
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventDropDown, seteventDropDown] = useState(false)
    const [registration, setRegistration] = useState("select")

    const [categoryName, setCategoryName] = useState('')
    const [offerTitle, setOfferTitle] = useState('')
    const [offerValid, setOfferValid] = useState('')
    const [offerDescription, setOfferDescription] = useState('')
    const [discountOfferName, setDiscountOfferName] = useState('')
    const [discountOfferPrice, setDiscountOfferPrice] = useState('')
    const [discountOfferNameTwo, setDiscountOfferNameTwo] = useState('')
    const [discountOfferPriceTwo, setDiscountOfferPriceTwo] = useState('')
    const [discountOfferNameThree, setDiscountOfferNameThree] = useState('')
    const [discountOfferPriceThree, setDiscountOfferPriceThree] = useState('')

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const [timeModal, setTimeModal] = useState(false)
    const [startTimeHour, setStartTimeHour] = useState('00');
    const [startTimeMinutes, setStartTimeMinutes] = useState('00');
    const [startTime, setStartTime] = useState('AM');
    const [closingTimeHour, setClosingTimeHour] = useState('00');
    const [closingTimeMinutes, setClosingTimeMinutes] = useState('00');
    const [closingTime, setClosingTime] = useState('AM');
    const [focusedInput, setFocusedInput] = useState(null);
    const [closingTimeFinal, setClosingTimeFinal] = useState('AM');
    const [startTimeFinal, setStartTimeFinal] = useState('AM');
    const [selectBtn, setSelectBtn] = useState(false)

    const handleInputChange = (text, setter, maxValue) => {
        if (text === '' || (Number(text) >= 0 && Number(text) <= maxValue)) {
            setter(text);
        }
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleTimeToggle = (time) => {
        if (time === 'AM' || time === 'PM') {
            if (startTime === time) {
                setStartTimeFinal(time);
            } else {
                setClosingTimeFinal(time);
            }
        }
    };




    const [amStart, setAmStart] = useState("AM")
    const [amClose, setAmClose] = useState("AM")

    const toggleAmPmStart = (amPm) => {
        setAmStart(amPm)
    }
    const toggleAmPmClose = (amPm) => {
        setAmClose(amPm)
    }


    // const [selectBtn, setSelectBtn] = useState(false)
    // const [selectBtnTwo, setSelectBtnTwo] = useState(false)

    const [filterTodo, setFilterTodo] = useState([]);

    const addFilterTodo = () => {
        // Create a new todo object and add it to the todos array
        const newFilterTodo = {
            name: '',
            price: ''

        };
        setFilterTodo([...filterTodo, newFilterTodo]);
    };

    const handleFilterTodoChange = (index, field, value) => {
        const updatedFilterTodos = [...filterTodo];
        updatedFilterTodos[index] = { ...updatedFilterTodos[index], [field]: value };
        setFilterTodo(updatedFilterTodos);
    };

    const deleteFilterTodo = (index) => {
        const updatedFilterTodos = [...[...filterTodo]];
        updatedFilterTodos.splice(index, 1);
        setFilterTodo(updatedFilterTodos);
    };


    return (
        <div className={style.container}>
            <div className={style.menubar}>
                <div className={style.logo}>
                    <img src={images.menulogo} />
                </div>
                <div className={style.menuList} >
                    <img className={style.menuImg} src={images.dashBoardIcon} />
                    <div className={style.word}>Dashboard</div>
                </div>
                <div className={style.menuList} onClick={() => handleChange("menu")}>
                    <img className={style.menuImg} src={isSelected === "menu" ? images.menuGreenIcon : images.menuIcon} />
                    <div className={isSelected === "menu" ? style.greenWord : style.word}>Menu</div>
                </div>

                <div onClick={() => handleChange("offer")} className={style.menuList}>
                    <img className={style.menuImg} src={isSelected === "offer" ? images.offerGreen : images.offersIcon} />
                    <div className={isSelected === "offer" ? style.greenWord : style.word}>Offers</div>
                </div>
                <div onClick={() => handleChange("event")} className={style.menuList}>
                    <img className={style.menuImg} src={isSelected === "event" ? images.eventGreen : images.eventsIcon} />
                    <div className={isSelected === "event" ? style.greenWord : style.word}>Events</div>
                </div>
                <div className={style.menuList}>
                    <img className={style.menuImg} src={images.rewardsIcon} />
                    <div className={style.word}>Rewards</div>
                </div>
                <div onClick={() => handleChange("setting")} className={style.menuList}>
                    <img className={style.menuImg} src={isSelected === "setting" ? images.settingGreen : images.settingsIcon} />
                    <div className={isSelected === "setting" ? style.greenWord : style.word}>Settings</div>
                </div>
            </div>
            <div className={style.menuWrapper} >
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
                {isSelected === "menu" &&
                    <>
                        <div className={style.menu}>
                            <div className={style.headingWrappper}>
                                <div className={style.heading}>
                                    <img className={style.headingIcon} src={images.categoriesIcon} />
                                    Categories
                                </div>
                                <div className={style.btn} onClick={() => setIsModalVisible(!isModalVisible)}>
                                    <img className={style.plusIcon} src={images.plusIcon} />
                                    Add Categories
                                </div>
                            </div>
                            <div className={style.categoryRow}>
                                {cardData.map((Item, index) => (
                                    <div key={index} className={style.categoriesCard} >
                                        <img className={style.categoriesCardImg} src={Item.image} />
                                        <div className={style.cardCover}>
                                            <div onClick={() => handleDropdownToggle(index)} className={style.dotMenu}>
                                                {dropDown === index ? <div className={style.dropdown}>
                                                    <div onClick={() => setIsEditModalVisible(true)} className={style.edit}>
                                                        <img className={style.editIcon} src={images.editIcon} />
                                                        Edit
                                                    </div>
                                                    <div className={style.line}></div>
                                                    <div className={style.remove}>
                                                        <img className={style.removeIcon} src={images.removeIcon} />
                                                        Remove
                                                    </div>
                                                </div> : <img src={images.dotMenuIcon} />
                                                }
                                            </div>
                                            <div className={style.itemsCenter}>
                                                <div className={style.categoriesName}>{Item.name}</div>
                                            </div>
                                        </div>


                                    </div>
                                ))}
                            </div>


                            <div className={style.headingWrappper}>
                                <div className={style.heading}>
                                    <img className={style.headingIcon} src={images.coffeeItemIcon} />
                                    Coffees Items
                                </div>
                                <div className={style.btn}>
                                    <img className={style.plusIcon} src={images.plusIcon} />
                                    Add Items
                                </div>
                            </div>
                            <div className={style.row}>
                                {itemCard.map((item, index) => (
                                    <div key={index} className={style.itemCard}>
                                        <img className={style.itemCardImg} src={item.images} />
                                        <div>
                                            <div className={style.itemName}>cappuccino</div>
                                            <div className={style.price}>
                                                $3.35
                                                <img className={style.blackDots} src={images.blackDots} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Modal isOpen={isModalVisible} onRequestClose={() => setIsModalVisible(false)} className={style.modal}>
                            <div className={style.modalContainer}>
                                <div className={style.modalHeadingWrapper}>
                                    <div>
                                        <img onClick={() => { setIsModalVisible(false) }} src={images.cross} className={style.cross} />
                                    </div>
                                    <div className={style.modalHeading}>
                                        Add Category
                                    </div>

                                    <div className={style.modalBtn}>
                                        Save
                                    </div>
                                </div>
                                <div className={style.imageUploadWrapper}>
                                    <div className={style.InputImg}>
                                        <label for="img" className={style.uploadImage}  >
                                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.uploadImgIcon} className={selectedImage ? style.seletedImg : style.icon} alt="Upload Image" />
                                            <input
                                                id="img"
                                                className={style.inputImg}
                                                type='file'
                                                accept="image/png,image/jpeg"
                                                onChange={handleImageChange}
                                            />
                                            {/* <img className={style.uploadImgIcon} src={images.uploadImgIcon} />
                                            <input className={style.inputImg} id="img" type='file' accept="image/png,image/jpeg" /> */}
                                        </label>
                                        <div className={style.uploadImgtext}>
                                            <img className={style.uploadImg} src={images.uploadImg} onChange={(e) => setCategoryName(e.target.value)} />
                                            Upload Images
                                        </div>
                                    </div>
                                </div>
                                <div className={style.addCategoryWrapper}>
                                    <div className={style.addCategory}>
                                        <div className={style.addCategoryHeading}>Category Name</div>
                                        <input className={style.input} type='text' />
                                    </div>
                                </div>
                                <div className={style.addCategoryBtn}>
                                    <div className={style.ovalBtnWrapper}>
                                        <div className={style.activeHeading}>
                                            Active on Menu
                                        </div>
                                        {selectBtn ? (
                                            <div className={style.ovalBtn} onClick={() => setSelectBtn(!selectBtn)}>
                                                <div className={style.whiteBtn}></div>
                                            </div>
                                        ) : (
                                            <div className={style.notSelectedBtn} onClick={() => setSelectBtn(!selectBtn)}>
                                                <div className={style.notSelectedgreen}></div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <Modal isOpen={isEditModalVisible} onRequestClose={() => {
                            setIsEditModalVisible(false)
                        }} className={style.modal}>
                            <div className={style.modalContainer}>
                                <div className={style.modalHeadingWrapper}>
                                    <div >
                                        <img onClick={() => {
                                            setIsEditModalVisible(false)
                                        }} src={images.cross} className={style.cross} />
                                    </div>
                                    <div className={style.modalHeading}>
                                        Edit Category
                                    </div>

                                    <div onClick={() => {
                                        setIsEditModalVisible(false)
                                    }} className={style.modalBtn}>
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
                                <div className={style.addCategoryWrapper}>
                                    <div className={style.addCategory}>
                                        <div className={style.addCategoryHeading}>Category Name</div>
                                        <input className={style.input} type='text' />
                                    </div>
                                </div>
                                <div className={style.addCategoryBtn}>
                                    <div className={style.ovalBtnWrapper}>
                                        <div className={style.activeHeading}>
                                            Active on Menu
                                        </div>
                                        {selectBtn ? (
                                            <div className={style.ovalBtn} onClick={() => setSelectBtn(!selectBtn)}>
                                                <div className={style.whiteBtn}></div>
                                            </div>
                                        ) : (
                                            <div className={style.notSelectedBtn} onClick={() => setSelectBtn(!selectBtn)}>
                                                <div className={style.notSelectedgreen}></div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </>
                }
                {isSelected === "offer" &&
                    <>
                        <div className={style.menu}>
                            <div className={style.btnWrapper}>
                                <div className={style.offerHeadingWrapper}>
                                    <div onClick={() => setBtn(!btn)}>
                                        <div className={btn ? style.word : style.greenBtn} >
                                            Current  Offers
                                        </div>
                                    </div>
                                    <div onClick={() => setBtn(!btn)}  >
                                        <div className={btn ? style.greenBtn : style.word} >Past Offers</div>
                                    </div>
                                </div>
                                <div onClick={() => setIsOfferModalVisible(!isOfferModalVisible)} className={style.btn}>
                                    Create Offer
                                </div>
                            </div>
                            <div className={style.row}>
                                {offerCard.map((item, index) => (
                                    <div key={index} className={style.offerCard}>
                                        <img className={style.offerCardImg} src={item.images} />
                                        <div className={style.cardHeading}>
                                            <div className={style.offerCardName}>Free Coffee Just For You</div>
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
                                            <div onClick={() => handleDropdownToggle(index)} className={style.offerdotMenu}>
                                                {dropDown === index ? <div className={style.offerdropdown}>
                                                    <div className={style.offerEdit}>
                                                        <img className={style.offerEditIcon} src={images.editIcon} />
                                                        Edit
                                                    </div>
                                                    <div className={style.Offerline}></div>
                                                    <div className={style.offerRemove}>
                                                        <img className={style.offerRemoveIcon} src={images.removeIcon} />
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
                        <Modal isOpen={isOfferModalVisible} onRequestClose={() => setIsOfferModalVisible(false)} className={style.modalOffer}>
                            <div className={style.modalContainer}>
                                <div className={style.modalHeadingWrapper}>
                                    <div>
                                        <img onClick={() =>
                                            setIsOfferModalVisible(false)
                                        } src={images.cross} className={style.cross} />
                                    </div>
                                    <div className={style.modalHeading}>
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
                                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.uploadImgIcon} className={selectedImage ? style.seletedImg : style.icon} alt="Upload Image" />
                                            <input
                                                id="img"
                                                className={style.inputImg}
                                                type='file'
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
                                <div className={style.addOffer}>
                                    <div class={style.textFieldWrapper}>
                                        <div className={style.textfield}>
                                            <div className={style.inputHeading}>Offer Title</div>
                                            <input className={style.userIput} onChange={(e) => setOfferTitle(e.target.value)} />
                                        </div>
                                        <div className={style.textfield}>
                                            <div className={style.inputHeading}>Valid Till</div>
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
                                    <div className={style.offerInfoWrapper}>
                                        <div className={style.infoWrapper}>
                                            <div className={style.description}>
                                                <div className={style.inputHeading}>Description</div>
                                                <textarea rows="20" cols="50" onChange={(e) => setOfferDescription(e.target.value)} className={style.userIput} ></textarea >
                                            </div>
                                            <div className={style.promo}>
                                                <div className={style.inputHeading}>Exclusive Promo</div>
                                                {eventDropDown ? <div className={style.dropDownTwo}>
                                                    <div className={style.registrationHeading} onClick={() => { seteventDropDown(!eventDropDown); setRegistration("Yes") }}>Yes</div>
                                                    <div className={style.registrationHeading} onClick={() => { seteventDropDown(!eventDropDown); setRegistration("No") }}>No</div>
                                                </div> : <div onClick={() => seteventDropDown(!eventDropDown)} className={style.registrationDropDown}>
                                                    <div className={style.registrationHeading}>{registration}</div>
                                                    <img className={style.dropDownIcon} src={images.downArrow} />
                                                </div>}

                                            </div>
                                        </div>
                                        <div className={style.infoWrapper}>
                                            <div className={style.discount}>
                                                <div className={style.inputHeading}>Discount</div>
                                                {filterTodo.map((index, todo) => (
                                                    <div key={index} className={style.inputWrapper} >
                                                        <input type='text' onChange={(e) => handleFilterTodoChange(index, 'name', e.target.value)} value={todo.name} className={style.textInput} />
                                                        <input type='text' onChange={(e) => handleFilterTodoChange(index, 'price', e.target.value)} value={todo.price} className={style.textInput} />
                                                        <div onClick={() => deleteFilterTodo(index)} className={style.circle}><div className={style.greenLine}></div></div>
                                                    </div>
                                                ))}
                                                {/* <div className={style.row} key={index}>
                                                        <div onClick={() => deleteFilterTodo(index)} className={style.circle}><div className={style.greenLine}></div></div>
                                                        <div><input className={style.textInputFour} type='text' onChange={(e) => handleFilterTodoChange(index, 'name', e.target.value)} value={todo.name} /></div>
                                                        <div><input className={style.textInputFour} type='text' onChange={(e) => handleFilterTodoChange(index, 'price', e.target.value)} value={todo.price} /></div>
                                                    </div> */}



                                                {/* <div className={style.inputWrapper} >
                                                    <input type='text' onChange={(e) => setDiscountOfferName(e.target.value)} className={style.textInput} />
                                                    <input type='text' onChange={(e) => setDiscountOfferPrice(e.target.value)} className={style.textInput} />
                                                    <div className={style.circle}><div className={style.greenLine}></div></div>
                                                </div> */}
                                                {/* <div className={style.inputWrapper} >
                                                    <input type='text' onChange={(e) => setDiscountOfferNameTwo(e.target.value)} className={style.textInput} />
                                                    <input type='text' onChange={(e) => setDiscountOfferPriceTwo(e.target.value)} className={style.textInput} />
                                                    <div className={style.circle}><div className={style.greenLine}></div></div>
                                                </div>
                                                <div className={style.inputWrapper} >
                                                    <input type='text' className={style.textInput} onChange={(e) => setDiscountOfferNameThree(e.target.value)} />
                                                    <input type='text' className={style.textInput} onChange={(e) => setDiscountOfferPriceThree(e.target.value)} />
                                                    <div className={style.circle}><div className={style.greenLine}></div></div>
                                                </div> */}
                                            </div>
                                            <div className={style.offerModalBtn}>
                                                <div className={style.modalBtnWrapper}>
                                                    <div onClick={addFilterTodo} className={style.modalBtn}>
                                                        <img src={images.plusIcon} />
                                                        Add product
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.btnCentre}>
                                    <div className={style.modalOfferCard}>
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

                    </>
                }
                {isSelected === "event" &&
                    <>
                        <div className={style.menu}>
                            <div className={style.btnWrapper}>
                                <div className={style.offerHeadingWrapper}>
                                    <div onClick={() => setBtn(!btn)}>
                                        <div className={btn ? style.word : style.greenBtn} >
                                            Current  Offers
                                        </div>
                                    </div>
                                    <div onClick={() => setBtn(!btn)}  >
                                        <div className={btn ? style.greenBtn : style.word} >Past Offers</div>
                                    </div>
                                </div>

                                <div onClick={() => setIsEventModalVisible(!isEventModalVisible)} className={style.btn}>
                                    Create Event
                                </div>
                            </div>
                            <div className={style.row}>
                                {eventCard.map((item, index) => (
                                    <div key={index} className={style.eventCard}>
                                        <img className={style.eventCardImg} src={item.images} />
                                        <div className={style.eventCardHeading}>
                                            <div>
                                                <div className={style.eventCardName}>Name of Events</div>
                                                <div className={style.eventCardDate} >27 Jan 2023 </div>
                                            </div>
                                            <div className={style.eventCardbtn}>
                                                Upcoming
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Modal isOpen={isEventModalVisible} onRequestClose={() => setIsEventModalVisible(false)} className={style.modalEvent}>
                            <div className={style.modalContainer}>
                                <div className={style.modalHeadingWrapper}>
                                    <div>
                                        <img onClick={() =>
                                            setIsEventModalVisible(false)
                                        } src={images.cross} className={style.cross} />
                                    </div>
                                    <div className={style.modalHeading}>
                                        Add Category
                                    </div>

                                    <div onClick={() =>
                                        setIsEventModalVisible(false)
                                    } className={style.btn}>
                                        Save
                                    </div>
                                </div>
                                <div className={style.imageUploadWrapper}>
                                    <div className={style.InputImg}>
                                        <label for="img" className={style.uploadImage}  >
                                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.uploadImgIcon} className={selectedImage ? style.seletedImg : style.icon} alt="Upload Image" />
                                            <input
                                                id="img"
                                                className={style.inputImg}
                                                type='file'
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
                                            <div className={style.eventinputHeading}>
                                                <div className={style.inputHeading}>Event Name</div>
                                                <input className={style.userIput} onChange={(e) => setEventName(e.target.value)} />
                                            </div>
                                            <div className={style.eventinputHeading}>
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
                                            <div className={style.eventinputHeading}>
                                                <div className={style.inputHeading}>Time</div>
                                                <div className={style.timeWrapper} onClick={() => setTimeModal(true)}>
                                                    <div className={style.userIput}>{startTimeHour}:{startTimeMinutes} {amStart} - {closingTimeHour} : {closingTimeMinutes} {amClose} </div>
                                                    <img className={style.clockImg} src={images.clock} />
                                                </div>
                                            </div>
                                            <div className={style.eventinputHeading}>
                                                <div className={style.inputHeading}>Event Type</div>
                                                <div className={style.registrationDropDown}>
                                                    <div className={style.registrationHeading}>Exclusive</div>
                                                    <img className={style.dropDownIcon} src={images.downArrow} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.eventInfoWrapper}>
                                            <div className={style.eventinputHeading}>
                                                <div className={style.inputHeading}>Registration</div>
                                                {eventDropDown ? <div className={style.dropDown}>
                                                    <div className={style.registrationHeading} onClick={() => { seteventDropDown(!eventDropDown); setRegistration("Yes") }}>Yes</div>
                                                    <div className={style.registrationHeading} onClick={() => { seteventDropDown(!eventDropDown); setRegistration("No") }}>No</div>
                                                </div> : <div onClick={() => seteventDropDown(!eventDropDown)} className={style.registrationDropDown}>
                                                    <div className={style.registrationHeading}>{registration}</div>
                                                    <img className={style.dropDownIcon} src={images.downArrow} />
                                                </div>}
                                            </div>
                                            <div className={style.eventinputHeading}>
                                                <div className={style.inputHeading}>Description</div>
                                                <input className={style.userIput} onChange={(e) => setDescription(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <Modal isOpen={timeModal} onRequestClose={() => setTimeModal(false)} className={style.modalTime}>
                            <>
                                <div>
                                    <div>
                                        <div className={style.inputTitle}>Opening Time</div>
                                        <div class={style.timeRow} >
                                            <input
                                                value={startTimeHour}
                                                onChange={(e) => handleInputChange(e.target.value, setStartTimeHour, 12)}
                                                type="number"
                                                class={style.timeInput}
                                                onFocus={() => handleFocus('startHour')}
                                            />
                                            <div class={style.columnEqual}>:</div>
                                            <input
                                                value={startTimeMinutes}
                                                onChange={(e) => handleInputChange(e.target.value, setStartTimeMinutes, 60)}
                                                type="number"
                                                class={style.timeInput}
                                                onFocus={() => handleFocus('startMinutes')}
                                            />
                                            <div className={style.btnCol}>
                                                <div className={amStart === "AM" ? style.clickable : style.clickableTwo} onClick={() => { toggleAmPmStart("AM") }} >AM</div>
                                                <div className={amStart === "PM" ? style.clickable : style.clickableTwo} onClick={() => { toggleAmPmStart("PM") }} >PM</div>
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
                                            <input class={style.timeInput}
                                                value={closingTimeHour}
                                                onChange={(e) => handleInputChange(e.target.value, setClosingTimeHour, 12)}
                                                type="number"
                                                onFocus={() => handleFocus('closingHour')}
                                            />
                                            <div class={style.columnEqual}>:</div>

                                            <input
                                                value={closingTimeMinutes}
                                                onChange={(e) => handleInputChange(e.target.value, setClosingTimeMinutes, 60)}
                                                type="number"
                                                class={style.timeInput}
                                                onFocus={() => handleFocus('closingMinutes')}
                                            />
                                            <div className={style.btnCol}>
                                                <div className={amClose === "AM" ? style.clickable : style.clickableTwo} onClick={() => toggleAmPmClose("AM")} >AM</div>
                                                <div className={amClose === "PM" ? style.clickable : style.clickableTwo} onClick={() => toggleAmPmClose("PM")}>PM</div>
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

                    </>}
                {isSelected === "setting" &&
                    <>
                        <div className={style.menu}>
                            <div className={style.settingHeading}>
                                Settings
                            </div>
                            <img className={style.coverImg} src={images.settingCoverImg} />
                            <div className={style.settingHeadingWrapper}>
                                <div className={style.cafeName}>
                                    Havana Cafe
                                </div>
                                <div className={style.settingInfoWrapper}>
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
                                            <div className={style.settingBtn}>
                                                Save
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.InputFeild}>
                                        <div className={style.editinputWrapper}>
                                            <div className={style.inputHeading}>Admin Name</div><input onChange={(e) => setAdminName(e.target.value)} className={style.editInput} type='text' />
                                        </div>
                                        <div className={style.editinputWrapper}>
                                            <div className={style.inputHeading} >Email</div><input onChange={(e) => setEmail(e.target.value)} className={style.editInput} type='text' />
                                        </div>
                                    </div>
                                    <div className={style.loationWrapper}>
                                        <div className={style.locationDetail} >
                                            <div className={style.inputHeading} >phone number</div>
                                        </div>
                                        <div className={style.locationDetail}>
                                            <div className={style.inputHeading} >
                                                location
                                            </div>
                                            {selectedCountry ? <div className={style.country}>
                                                {country.map((country, index) => (
                                                    <div key={index} onClick={() => {
                                                        setcountryName(country.name)
                                                        setSelectedCountry(!selectedCountry)
                                                    }} className={style.countryName}>{country.name}</div>
                                                ))}
                                            </div>
                                                :
                                                <div onClick={() => setSelectedCountry(!selectedCountry)} className={style.conutrySelect} >{countryName}
                                                    <img src={images.downArrow} /></div>}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </>}


            </div>
        </div>
    )
}
