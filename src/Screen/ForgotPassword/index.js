import React, { useState } from 'react'
import style from './style.module.css'
import images from '../../asset/index'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <div className={style.logInBox}>
                <div className={style.boxLelt}>
                    <div className={style.backBtnWrapper}>
                    <div className={style.backWrapper}
                            onClick={() => navigate('/login')}>
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
                    <div className={style.logInHeading}>Forgot Password</div>
                    <div className={style.paraWrapper}>
                        <div className={style.varifyPara}>Please enter your email to receive a verification code</div>
                        <div className={style.textField}>
                            <div className={style.inputHeading}>Email</div>
                            <input className={style.userInput} type="text" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        <div  onClick={() => navigate('/varificationcode')} className={style.btn}>
                            <div className={style.btnheading}>
                                Next
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
