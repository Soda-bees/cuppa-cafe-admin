import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset/index'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../store/authTokenSlice";

export default function ResetPasswod() {
    const [ResetPasswod, setResetPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignin = () => {
        const token = "authToken";
        dispatch(setAuthToken(token));
        navigate("/");
      };
    
    return (
        <div className={style.container}>
            <div className={style.logInBox}>
                <div className={style.boxLelt}>
                    <div className={style.backBtnWrapper}>
                    <div className={style.backWrapper}
                         onClick={() => navigate('/varificationcode')}   >
                            <div className={style.backBTn}>
                                <img className={style.backArrow} src={images.backArrow} />
                            </div>
                        </div>
                        <div className={style.adminBtnWrapper}>
                            <div className={style.adminBtnGreen}> Cafe  Owner</div>
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
                    <div className={style.logInHeading}>Reset Password</div>
                    <div className={style.paraWrapper}>
                        <div className={style.varifyPara}>Enter a new password to reset the password of your account.</div>
                        <div className={style.textField}>
                            <div className={style.inputHeading}>Reset Password</div>
                            <input className={style.userInput} type="text" onChange={(e) => setResetPassword(e.target.value)} />
                            <img className={style.hideIcon} src={images.hidePassword}/>
                        </div>
                        <div className={style.textField}>
                            <div className={style.inputHeading}>Confirm Password</div>
                            <input className={style.userInput} type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <img className={style.hideIcon} src={images.hidePassword}/>
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        <div  onClick={handleSignin} className={style.btn}>
                            <div className={style.btnheading}>
                               Save
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
