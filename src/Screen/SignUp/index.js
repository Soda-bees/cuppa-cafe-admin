// import { React, useState } from "react";
import style from "./style.module.css";
import images from "../../asset/index";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";
import { signUp } from "../../services/config/Api";
import { ClipLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function SignUp() {
  const [value, setValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [shopName, setShopName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [countryName, setcountryName] = useState("Select Country");
  const [countryCode, setCountryCode] = useState("US");
  const [isSelected, setIsSelected] = useState("cafe");
  const [loader, setLoader] = useState(false);
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const country = Country.getAllCountries();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(position.coords)
        alert(position.coords)
    })
  }, [])
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;

//       setLatitude(lat);
//       setLongitude(lon);

//       console.log(position.coords);
//       alert(`Latitude: ${lat}, Longitude: ${lon}`);
//     });
//   }, []);

// setTimeout(() => {
//   alert(`lat: ${latitude} long: ${longitude}`)
// }, 2000);

  const handleSignUp = async () => {
    setLoader(true);
    try {
      const body = {
        outletName: shopName,
        adminName,
        // location:countryName,
        email,
        countryCode,
        phoneNumber: value,
        password,
      };
      const response = await signUp(body);
      console.log("respons=-=--=-=-==-=->", response);
      setLoader(false);
      response?.success && navigate("/outlet");
    } catch (error) {
      console.log("signup error ", error);
    }
  };

  // const handleSignin = () => {
  //     const token = "authToken";
  //     dispatch(setAuthToken(token));
  //     navigate("/menu");
  // };

  return (
    <div className={style.container}>
      <div className={style.logInBox}>
        <div className={style.boxLelt}>
          <div className={style.backBtnWrapper}>
            <div
              className={style.backWrapper}
              onClick={() => navigate("/login")}
            >
              <div className={style.backBTn}>
                <img className={style.backArrow} src={images.backArrow} />
              </div>
            </div>
            <div className={style.adminBtnWrapper}>
              <div className={style.adminBtnGreen}> Cafe Owner</div>
            </div>
          </div>

          <div className={style.logoWrapper}>
            <img className={style.logo} src={images.logo} />
          </div>
          <div className={style.headingWrapper}>
            <div className={style.logoHeading}>
              Welcome to the Admin Panel for
              <span className={style.bold}> Cuppa!</span>
            </div>
          </div>
          <div className={style.mobileLogoWrapper}>
            <img className={style.mobileLogo} src={images.mobileLogo} />
          </div>
        </div>
        <div className={style.boxRight}>
          
          <div className={style.logInHeading}>Sign Up</div>
          <div className={style.adminWrapper}>
            <div className={style.inputWrapper}>
              <div className={style.inputHeading}>Coffee Shop Name </div>
              <input
                className={style.userInputTwo}
                type="text"
                onChange={(e) => setShopName(e.target.value)}
              />
            </div>
            <div className={style.inputWrapper}>
              <div className={style.inputHeading}>Admin Name</div>
              <input
                className={style.userInputTwo}
                type="text"
                onChange={(e) => setAdminName(e.target.value)}
              />
            </div>
          </div>

          
          {/* 
          <div className={style.textFieldTwo}>
            <div className={style.inputHeading}>Location</div>
            <div
              onClick={() => setSelectedCountry(!selectedCountry)}
              className={style.countrySelect}
            >
              {countryName}
              <img
                className={style.downArrow}
                src={selectedCountry ? images.arrowUp : images.downArrow}
              />
            </div>
            {selectedCountry && (
              <div className={style.country}>
                {country.map((country, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setcountryName(country.name);
                      setSelectedCountry(!selectedCountry);
                    }}
                    className={style.countryName}
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            )}
          </div> */}

          <div className={style.textField}>
            <div className={style.inputHeading}>Email</div>
            <input
              className={style.userInput}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.textField}>
            <div className={style.inputHeading}>Contact Number</div>
            <PhoneInput
              value={value}
              defaultCountry={countryCode}
              onChange={setValue}
              className={style.custom_phone_input}
            />
          </div>
          <div className={style.textField}>
            <div className={style.inputHeading}>Password</div>
            <input
              className={style.userInput}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.checkBox}>
            <img
              onClick={() => setIsChecked(!isChecked)}
              className={style.checkBoxBtn}
              src={isChecked ? images.checked : images.unChecked}
            />
            <div className={style.terms}>
              I accept the Terms of Use
              <div className={style.termpara}>
                By joining, I agree to Cuppa@ Rewards Terms, the application
                Terms, and have read the Privacy Statement.
              </div>
            </div>
          </div>
          <div className={style.btnWrapper}>
            <div
              className={style.btn}
              onClick={() =>
                //  navigate('/outlet')
                handleSignUp()
              }
            >
              <div className={style.btnheading}>Get Started</div>
              <div className={style.arrow}>
                {loader ? (
                  <ClipLoader color="#36d7b7" size={24} speedMultiplier={0.8} />
                ) : (
                  <img className={style.arrowImg} src={images.singInArrow} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
