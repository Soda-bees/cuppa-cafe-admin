import { React, useState } from 'react'
import style from './style.module.css'
import images from '../asset/index'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { Country } from 'country-state-city';


export default function SetUpOutlet() {
    const [value, setValue] = useState('')
    const [selectedCountry, setSelectedCountry] = useState()
    const [outletName, setOutletName] = useState('')
    const [description, setDescription] = useState('')
    const country = Country.getAllCountries()
    const [countryName, setcountryName] = useState("Select Country")

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    return (

        <div className={style.container}>
            <div className={style.logInBox}>
                <div className={style.boxLelt}>
                    <div className={style.backWrapper}>
                        <div className={style.backBtn}>
                            <img className={style.backArrow} src={images.backArrow} />
                        </div>
                    </div>
                    <div>
                        <img className={style.logo} src={images.logo} />
                    </div>
                    <div className={style.logoHeading}>Welcome to the Admin Panel for  <span className={style.bold}>Cuppa!</span></div>
                </div>
                <div className={style.boxRight}>
                    <div className={style.logInHeading}>Set-Up Outlet</div>
                    <div className={style.textFeild}>
                        <label for="img" className={style.uploadImage}  >
                        <img src={selectedImage ? URL.createObjectURL(selectedImage) : images.uploadImgIcon} className={selectedImage ?   style.seletedImg : style.icon} alt="Upload Image" />
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
                        <div className={style.userInput}>
                            <img className={style.clock} src={images.clock} />
                        </div>
                    </div>
                    <div className={style.textFeild}>
                        <div className={style.inputHaeding}>Location</div>
                        {selectedCountry ? <div className={style.country}>
                            {country.map((country, index) => (
                                <div key={index} onClick={() => {
                                    setcountryName(country.name)
                                    setSelectedCountry(!selectedCountry)
                                }} className={style.countryName}>{country.name}</div>
                            ))}
                        </div>
                            :
                            <div onClick={() => setSelectedCountry(!selectedCountry)} className={style.conutrySelect} >{countryName} <img src={images.downArrow} /></div>}
                    </div>
                    <div className={style.btnWrapper}>
                        <div className={style.btn}>
                            Get Started
                            <div className={style.arrow}>
                                <img className={style.arrowImg} src={images.singInArrow} />
                            </div>
                        </div>
                    </div>
                    {/* <div className={style.btn}>
                        Get Started
                        <div className={style.arrow}>
                            <img className={style.arrowImg} src={images.singInArrow} />
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
