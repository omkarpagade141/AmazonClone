import React, { useEffect, useState } from 'react'
import './Homepage.css'
import heroImages from '.'
import productImages from './index2'



function Home() {
    let [sliderImg, setSliderImg] = useState(0);


    function handlePrev() {

        if (sliderImg > 0) {
            console.log(sliderImg);
            setSliderImg(sliderImg - 1)
        }
        else {
            setSliderImg(heroImages.length - 1)
        }

    }
    function handleNext() {
        if (sliderImg < heroImages.length - 1) {
            setSliderImg(sliderImg + 1)
        }
        else {
            setSliderImg(0)
        }

    }
    // setInterval(()=>{
    //     handleNext()
    // },5000)



    return (
        <>
            <main>
                <div className="heroSection">
                    <button className="handlePrev" onClick={() => { handlePrev() }}>&#60;</button>
                    <button className="handleNext" onClick={() => { handleNext() }}>&#62;</button>

                    <ul>

                        <img src={heroImages[sliderImg]} alt="Hero Image" />

                    </ul>

                    <div className="productSection">

                        <div className="products">
                            <div className="product">
                                <div className="row">
                                    <h4>Automative Essentials at 60% off</h4>
                                    <div className="col prodImg">
                                        <img src={productImages[0]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[1]} alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col prodImg">
                                        <img src={productImages[2]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[3]} alt="" />
                                    </div>
                                </div>


                            </div>
                            <div className="product">
                                <div className="row">
                                    <h4>Revamp your home in style</h4>
                                    <div className="col prodImg">
                                        <img src={productImages[4]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[5]} alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col prodImg">
                                        <img src={productImages[6]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[7]} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="row">
                                    <h4>Appliances for your home | Up to 55% off</h4>
                                    <div className="col prodImg">
                                        <img src={productImages[8]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[9]} alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col prodImg">
                                        <img src={productImages[10]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[11]} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="row">
                                    <h4>Starting ₹149 | Bestseling earbuds, headphones &...</h4>
                                    <div className="col prodImg">
                                        <img src={productImages[12]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[13]} alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col prodImg">
                                        <img src={productImages[14]} alt="" />
                                    </div>
                                    <div className="col prodImg">
                                        <img src={productImages[15]} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            
        </>
    )
}

export default Home
