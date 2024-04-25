import { React, useState } from 'react'
import style from './style.module.css'
import images from '../../asset/index'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { Country } from 'country-state-city';
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../store/authTokenSlice';

export default function SetUpOutlet() {
    const [value, setValue] = useState('')
    const [selectedCountry, setSelectedCountry] = useState()
    const [outletName, setOutletName] = useState('')
    const [description, setDescription] = useState('')
    const country = Country.getAllCountries()
    const [countryName, setcountryName] = useState("Select Country")
    const [isSelected, setIsSelected] = useState('cafe');
    const [selectedImage, setSelectedImage] = useState(null);
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
    const [amStart, setAmStart] = useState("AM")
    const [amClose, setAmClose] = useState("PM")
    
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };    

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

    const toggleAmPmStart = (amPm) => {
        setAmStart(amPm)
    }
    const toggleAmPmClose = (amPm) => {
        setAmClose(amPm)
    }

     const handleSignin = () => {
        const token = "authToken";
        dispatch(setAuthToken(token));
        navigate("/");
    };

    

    return (

        <div className={style.container}>
            <div className={style.logInBox}>
            <div className={style.boxLelt}>
                    <div>
                        <div className={style.backWrapper}
                            onClick={() => navigate('/signup')}>
                            <div className={style.backBtn}>
                                <img className={style.backArrow} src={images.backArrow} />
                            </div>
                        </div>
                        <div className={style.adminBtnWrapper}>
                            <div onClick={() => setIsSelected('admin')} className={isSelected === 'admin' ? style.adminBtnGreen : style.adminBtnWhite}><img className={style.selectBtn} src={isSelected === 'admin' ? images.selectBtn : images.notSelectedBtn} />Admin Panel</div>
                            <div onClick={() => setIsSelected('cafe')} className={isSelected === 'cafe' ? style.adminBtnGreen : style.adminBtnWhite}><img className={style.selectBtn} src={isSelected === 'cafe' ? images.selectBtn : images.notSelectedBtn} />Cafe  Owner</div>
                        </div>
                    </div>

                    <div className={style.logoWrapper}>
                        <img className={style.logo} src={images.logo} />
                    </div>
                    <div className={style.headingWrapper}>
                        <div className={style.logoHeading}>
                            Welcome to the Admin Panel for{" "}
                            <span className={style.bold}>Cuppa!</span>
                        </div>
                    </div>

                </div>
                <div className={style.boxRight}>
                    <div className={style.logInHeading}>Set-Up Outlet</div>
                    <div className={style.textFeild}>
                        <label for="img" className={style.uploadImage}  >
                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.uploadImgIcon} className={selectedImage ? style.seletedImg : style.icon} alt="Upload Image" />
                            <input
                                id="img"
                                className={style.inputImg}
                                type='file'
                                accept="image/png,image/jpeg"
                                onChange={handleImageChange}
                            />
                            {/* <img src={images.uploadImgIcon} />
                            <input className={style.inputImg} id="img" type='file' accept="image/png,image/jpeg" /> */}
                        </label>
                    </div>
                    <div className={style.uploadImgtext}>
                        Upload Cover
                    </div>
                    <div className={style.textFeild}>
                        <div className={style.inputHaeding}>Outlet Name</div>
                        <input className={style.userInput} type="text" onChange={(e) => setOutletName(e.target.value)} />
                    </div>
                    <div className={style.textFeild}>
                        <div className={style.inputHaeding}>Description</div>
                        <input className={style.userInput} type="text" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className={style.textFeild}>
                        <div className={style.inputHaeding}>Time</div>
                        <div onClick={() => setTimeModal(!timeModal)} className={style.userInput}>
                            <div className={style.userIput}>{startTimeHour}:{startTimeMinutes} {amStart} - {closingTimeHour} : {closingTimeMinutes} {amClose} </div>
                            <img className={style.clock} src={images.clock} />
                        </div>
                    </div>
                    <div className={style.textFeildTwo}>
                        <div className={style.inputHaeding}>Location</div>
                        <div onClick={() => setSelectedCountry(!selectedCountry)} className={style.conutrySelect} >{countryName}
                            <img src={images.downArrow} />
                        </div>
                            {selectedCountry && (
                                <div className={style.country}>
                                    {country.map((country, index) => (
                                        <div key={index} onClick={() => {
                                            setcountryName(country.name)
                                            setSelectedCountry(!selectedCountry)
                                        }} className={style.countryName}>{country.name}</div>
                                    ))}
                                </div>
                            )}
                    </div>
                    <div className={style.btnWrapper}
                    onClick={handleSignin}>
                        <div className={style.btn}>
                            Get Started
                            <div className={style.arrow}>
                                <img className={style.arrowImg} src={images.singInArrow} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
        </div>
    )
}
