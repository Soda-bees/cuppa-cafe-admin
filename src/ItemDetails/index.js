import React, { useState } from 'react'
import style from './style.module.css'
import images from '../asset'

export default function ItemDetails() {
    const [itenName, setItenName] = useState('')
    const [itenDescription, setItenDescription] = useState('')
    const [sizeSmall, setSizeSmall] = useState('')
    const [smallPrice, setSmallPrice] = useState('')
    const [smallServes, setSmallServes] = useState('')
    const [sizeMedium, setSizeMedium] = useState('')
    const [mediumPrice, setMediumPrice] = useState('')
    const [mediumServes, setMediumServes] = useState('')
    const [sizelarge, setSizelarge] = useState('')
    const [largePrice, setLargePrice] = useState('')
    const [largeServes, setLargeServes] = useState('')
    return (
        <div className={style.container}>
            <div className={style.headingWrapper}>
                <div className={style.backBtn}>
                    <img className={style.backArrow} src={images.backArrow} />
                </div>
                <div className={style.heading}>
                    Items Details
                </div>

                <div className={style.btn}>
                    Edit Items
                </div>
            </div>
            <div className={style.itemDetailsWrapper}>
                <div className={style.addItemLeft}>
                    <div className={style.addItemDetails}>
                        <img className={style.itemImg} src={images.cappuccino} />
                        <div className={style.textFeild}>
                            <div className={style.inputHeading}>Date</div>
                            <input className={style.textInput} type='text' onChange={(e) => setItenName(e.target.value)} />
                            <div className={style.inputHeading}>Date</div>
                            <input className={style.textInputTwo} type='text' onChange={(e) => setItenDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className={style.headingWrapperTwo}>
                        <div className={style.infoheading}>Size</div>
                        <div className={style.infoheading}>Price</div>
                        <div className={style.infoheading}>Serves</div>
                    </div>
                    <div className={style.row}>

                        <div><input className={style.textInputThree} type='text' onChange={(e) => setSizeSmall(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setSizeMedium(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setSizelarge(e.target.value)} /></div>
                    </div>
                    <div className={style.row}>

                        <div><input className={style.textInputThree} type='text' onChange={(e) => setSmallPrice(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setMediumPrice(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setLargePrice(e.target.value)} /></div>
                    </div>
                    <div className={style.row}>

                        <div><input className={style.textInputThree} type='text' onChange={(e) => setSmallServes(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setMediumServes(e.target.value)} /></div>
                        <div><input className={style.textInputThree} type='text' onChange={(e) => setLargeServes(e.target.value)} /></div>
                    </div>
                </div>
                <div className={style.addItemRight}>
                    <div className={style.specHeading}>
                        Specifications
                    </div>
                    <div className={style.filteritem} >
                        <div className={style.filter}>
                            <div>
                                <div className={style.filterlable}> Filter Name</div>
                                <div className={style.filterName}>Milk</div>
                            </div>
                            <img className={style.menuDot} src={images.downArrow} />
                        </div>
                        <div>
                            <div className={style.headingWrapperThree}>
                                <div className={style.infoheadingTwo}>Name</div>
                                <div className={style.infoheadingTwo}>Extra Charges</div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} type='text' /></div>
                                <div><input className={style.textInputFour} type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} type='text' /></div>
                                <div><input className={style.textInputFour} type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} type='text' /></div>
                                <div><input className={style.textInputFour} type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} type='text' /></div>
                                <div><input className={style.textInputFour} type='text' /></div>
                            </div>
                            <div className={style.row}>
                                <div><input className={style.textInputFour} type='text' /></div>
                                <div><input className={style.textInputFour} type='text' /></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.filter}>
                        <div>
                            <div className={style.filterlable}> Filter Name</div>
                            <div className={style.filterName}>Milk</div>
                        </div>
                        <img className={style.menuDot} src={images.downArrow} />
                    </div>
                    <div className={style.filter}>
                        <div>
                            <div className={style.filterlable}> Filter Name</div>
                            <div className={style.filterName}>Milk</div>
                        </div>
                        <img className={style.menuDot} src={images.downArrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
