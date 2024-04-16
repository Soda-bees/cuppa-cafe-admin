import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import images from '../../asset'
import DatePicker from "react-datepicker";
import { useLocation, useNavigate } from "react-router-dom";

export default function OfferDetails() {

    const location = useLocation();
    const [item, setItem] = useState()

    // useEffect(() => {

    //     if (location.state && location.state.item) {
    //         // setItem(location.state.item);
    //         console.log("-==-offer details=-", location?.state?.item);
    //     }
    // }, [location.state]);



    const activePath = location.pathname;

    const navigate = useNavigate();
    const [selectBtn, setSelectBtn] = useState(false);
    const [offerTitle, setOfferTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const [eventDropDown, seteventDropDown] = useState(false);
    const [registration, setRegistration] = useState("select");
    const [startDate, setStartDate] = useState(new Date());
    const [offerDescription, setOfferDescription] = useState("");


    const [filterTodo, setFilterTodo] = useState([
        { name: "Name 1", price: "Price 1" },
        { name: "Name 2", price: "Price 2" },
        { name: "Name 3", price: "Price 3" }
    ]);

    const addFilterTodo = () => {
        // Create a new todo object and add it to the todos array
        const newFilterTodo = {
            name: "",
            price: "",
        };
        setFilterTodo([...filterTodo, newFilterTodo]);
    };

    const handleFilterTodoChange = (index, field, value) => {
        const updatedFilterTodos = [...filterTodo];
        updatedFilterTodos[index] = {
            ...updatedFilterTodos[index],
            [field]: value,
        };
        setFilterTodo(updatedFilterTodos);
    };

    const deleteFilterTodo = (index) => {
        const updatedFilterTodos = [...[...filterTodo]];
        updatedFilterTodos.splice(index, 1);
        setFilterTodo(updatedFilterTodos);
    };




    return (
        <div className={style.container} >
            <div className={style.headingWrapper}>
                <div className={style.backBtn} onClick={() => navigate('/offer')}>
                    <img className={style.backArrow} src={images.backArrow} />
                </div>
                <div className={style.heading}>
                    Offer Details
                </div>
                <div className={style.btn}>
                    Edit Offer
                </div>
            </div>
            <div className={style.offerDetailsCard}>
                <div className={style.offerCard}>
                    <div className={style.offerCardHeading}>
                        <img className={style.offersIcon} src={images.offersIcon} />
                        Coffee Offer
                    </div>
                    {selectBtn ? (
                        <div
                            className={style.ovalBtn}
                            onClick={() => setSelectBtn(!selectBtn)}
                        >
                            <div className={style.whiteBtn}></div>
                        </div>
                    ) : (
                        <div
                            className={style.notSelectedBtn}
                            onClick={() => setSelectBtn(!selectBtn)}
                        >
                            <div className={style.notSelectedgreen}></div>
                        </div>
                    )}
                </div>
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
                <div class={style.textFieldWrapper}>
                    <div className={style.textfield}>
                        <div className={style.inputHeading}>Offer Title</div>
                        <input
                            onChange={(e) => setOfferTitle(e.target.value)}
                            className={style.editInput}
                            type="text"
                        />
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
                            <textarea
                                rows="20"
                                cols="50"
                                onChange={(e) => setOfferDescription(e.target.value)}
                                className={style.userInput}
                            ></textarea>
                        </div>
                        <div className={style.promo}>
                            <div className={style.inputHeading}>Exclusive Promo</div>
                            {eventDropDown ? (
                                <div className={style.dropDownTwo}>
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
                    </div>
                    <div className={style.infoWrapper}>
                        <div className={style.discount}>
                            <div className={style.inputHeading}>Discount</div>
                            {filterTodo.map((index, todo) => (
                                <div key={index} className={style.inputWrapper}>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            handleFilterTodoChange(index, "name", e.target.value)
                                        }
                                        value={todo.name}
                                        className={style.textInput}
                                    />
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            handleFilterTodoChange(index, "price", e.target.value)
                                        }
                                        value={todo.price}
                                        className={style.textInput}
                                    />
                                    <div
                                        onClick={() => deleteFilterTodo(index)}
                                        className={style.circle}
                                    >
                                        <div className={style.greenLine}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
