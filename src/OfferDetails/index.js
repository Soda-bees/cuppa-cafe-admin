import React from 'react'
import style from './style.module.css'
import images from '../asset'
import { useLocation, useNavigate } from "react-router-dom";

export default function OfferDetails() {

    const location = useLocation();

    const activePath = location.pathname;
    
    const navigate = useNavigate();

    return (
        <div className={style.container} >
            <div className={style.headingWrapper}>
                <div className={style.backBtn}>
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
                    <div className={style.btnWrapper}>
                        <div className={style.whiteBtn}></div>
                    </div>
                </div>
                <img className={style.offerCardImg} src={images.offerCardImg} />
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
                            <div >
                                <input type='text'  className={style.textInput} />
                                <input type='text'  className={style.textInput} />
                            </div>
                            <div >
                                <input type='text'  className={style.textInput} />
                                <input type='text'  className={style.textInput} />
                            </div>
                            <div >
                                <input type='text'  className={style.textInput} />
                                <input type='text'  className={style.textInput} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
