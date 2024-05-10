import { React, useState } from 'react'
import style from './style.module.css'
import images from '../../asset/index'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { Country } from 'country-state-city';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setAuthToken } from '../../store/authTokenSlice';

export default function SignUp() {
    const [value, setValue] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(false)
    const [shopName, setShopName] = useState('')
    const [adminName, setAdminName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [countryName, setcountryName] = useState("Select Country")
    const country = Country.getAllCountries()

    const navigate = useNavigate();
    const dispatch = useDispatch()

    // const handleSignin = () => {
    //     const token = "authToken";
    //     dispatch(setAuthToken(token));
    //     navigate("/menu");
    // };

    const [isSelected, setIsSelected] = useState('cafe');
    return (

        <div className={style.container}>
            <div className={style.logInBox}>
                <div className={style.boxLelt}>
                    <div>
                        <div className={style.backWrapper}
                            onClick={() => navigate('/login')}>
                            <div className={style.backBTn}>
                                <img className={style.backArrow} src={images.backArrow} />
                            </div>
                        </div>
                        <div className={style.backBtnWrapper}>
                        <div className={style.adminBtnWrapper}>
                            <div onClick={() => setIsSelected('admin')} className={isSelected === 'admin' ? style.adminBtnGreen : style.adminBtnWhite}><img className={style.selectBtn} src={isSelected === 'admin' ? images.selectBtn : images.notSelectedBtn} />Admin Panel</div>
                            <div onClick={() => setIsSelected('cafe')} className={isSelected === 'cafe' ? style.adminBtnGreen : style.adminBtnWhite}><img className={style.selectBtn} src={isSelected === 'cafe' ? images.selectBtn : images.notSelectedBtn} />Cafe  Owner</div>
                        </div>
                        </div>
                    </div>

                    <div className={style.logoWrapper}>
                        <img className={style.logo} src={images.logo} />
                    </div>
                    <div className={style.headingWrapper}>
                        <div className={style.logoHeading}>
                            Welcome to the Admin Panel for
                            <span className={style.bold}>Cuppa!</span>
                        </div>
                    </div>

                </div>
                <div className={style.boxRight}>
                    <div className={style.logInHeading}>Sign Up</div>
                    <div className={style.adminWrapper}>
                        <div className={style.inputWrapper}>
                            <div className={style.inputHeading}>Coffee Shop Name </div>
                            <input className={style.userInputTwo} type="text" onChange={(e) => setShopName(e.target.value)} />
                        </div>
                        <div className={style.inputWrapper} >
                            <div className={style.inputHeading}>Admin Name</div>
                            <input className={style.userInputTwo} type="text" onChange={(e) => setAdminName(e.target.value)} />
                        </div>
                    </div>

                    <div className={style.textFieldTwo}>
                        <div className={style.inputHeading}>Location</div>
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
                                <img className={style.downArrow} src={images.downArrow} /></div>}
                    </div>
                    <div className={style.textField}>
                        <div className={style.inputHeading}>Email</div>
                        <input className={style.userInput} type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={style.textField}>
                        <div className={style.inputHeading}>Contact Number</div>
                        <PhoneInput
                            value={value}
                            defaultCountry='US'
                            onChange={setValue}
                            className={style.custom_phone_input}
                        />
                    </div>
                    <div className={style.textField}>
                        <div className={style.inputHeading}>Password</div>
                        <input className={style.userInput} type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={style.checkBox}>
                        <img onClick={() => setIsChecked(!isChecked)} className={style.checkBoxBtn} src={isChecked ? images.checked : images.unChecked} />
                        <div className={style.terms}>
                            I accept the Terms of Use
                            <div className={style.termpara}>By joining, I agree to Cuppa@ Rewards Terms, the application Terms, and have read the Privacy Statement.</div>
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        <div className={style.btn}
                            onClick={() => navigate('/outlet')}>
                            <div className={style.btnheading}>
                                Get Started
                            </div>
                            <div className={style.arrow}>
                                <img className={style.arrowImg} src={images.singInArrow} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
