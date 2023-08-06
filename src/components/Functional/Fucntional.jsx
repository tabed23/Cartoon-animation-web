import React from 'react'
import './Functional.css'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import til1 from '../../assets/images/til1.png'
import til2 from '../../assets/images/til2.png'
import til3 from '../../assets/images/til3.png'
import til4 from '../../assets/images/til4.png'
import til5 from '../../assets/images/til5.png'

import medal1 from '../../assets/images/medal1.png'
import deliverapprox from '../../assets/images/deliveryapproc.png'
import priceapprox from '../../assets/images/pricapprox.png'

import pref1 from '../../assets/images/pref1.png'
import pref2 from '../../assets/images/pref2.png'
import pref3 from '../../assets/images/pref3.png'
import pref4 from '../../assets/images/pref4.png'

const Fucntional = () => {
  return (
    <>
        <section className="functional-sec">
            <div className="container-lg">
                <div className="funtional-tiles">
                    <div className="functional-til">
                        <div className="til-img">
                            <img src={til1} alt="" />
                        </div>
                        <button>
                            RANKED CLASSIC
                        </button>
                    </div>
                    <div className="functional-til">
                        <div className="til-img">
                            <img src={til2} alt="" />
                        </div>
                        <button>
                            CALIBRATION GAMES
                        </button>
                    </div>
                    <div className="functional-til">
                        <div className="til-img">
                            <img src={til3} alt="" />
                        </div>
                        <button>
                            DOTA PLUS
                        </button>
                    </div>
                    <div className="functional-til">
                        <div className="til-img">
                            <img src={til4} alt="" />
                        </div>
                        <button>
                            BEHAVIOUR BOOST
                        </button>
                    </div>
                    <div className="functional-til">
                        <div className="til-img">
                            <img src={til5} alt="" />
                        </div>
                        <button>
                            LOW PRIORITY
                        </button>
                    </div>
                </div>
                <div className="funtional-widget">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2>Current MMR Rank <span><img src={medal1} alt="" /></span></h2>
                            <div className="boostbtns">
                                <button className='boostbtn activeboostbtn'>
                                    MMR SOLO BOOST
                                </button>
                                <button className='boostbtn'>
                                    MMR DUO BOOST
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="status-tags">
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={deliverapprox} alt="" />
                                    </div>
                                    <p>Approx delivery time: <span>2 days</span></p>
                                </span>
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={priceapprox} alt="" />
                                    </div>
                                    <p>Price estimate <span>1000 to 3000</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sldierpart">
                        <RangeSlider />
                    </div>
                    <div className="checkinputs">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                            <label class="form-check-label" for="flexCheckDefault">
                                express (+25%)
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  checked/>
                            <label class="form-check-label" for="flexCheckDefault">
                                 Stream (+15%)
                            </label>
                        </div>
                    </div>
                    <div className="numberrangeinput">
                        <input type="number" />
                        <span>-</span>
                        <input type="number" />
                        <button>Apply</button>
                    </div>
                    <div className="preferences">
                        <p>ROLE</p>
                        <div className="preftile">
                            <div className="preimg">
                                <img src={pref1} alt="" />
                            </div>
                            <button>CORE</button>
                        </div>
                        <div className="preftile">
                            <div className="preimg">
                                <img src={pref2} alt="" />
                            </div>
                            <button>SUPPORT</button>
                        </div>
                        <div className="preftile">
                            <div className="preimg">
                                <img src={pref3} alt="" />
                            </div>
                            <button>NO PREFERENCE</button>
                        </div>
                        <div className="preftile">
                            <div className="preimg">
                                <img src={pref4} alt="" />
                            </div>
                            <button>HERO PREFERENCES (15%)</button>
                        </div>
                    </div>
                </div>
                <div className="duoboostblock">
                    <div className="row align-items-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-8">
                            <h2>Duo Boost</h2>
                            <p>Do you want to play on your own account with our booster as a partner? Then select this option!</p>
                        </div>
                        <div className="col-lg-3">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Fucntional