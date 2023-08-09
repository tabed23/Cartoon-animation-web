import React , {useState} from 'react'
import './Functional.css'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import til1 from '../../assets/images/til1.png'
import til2 from '../../assets/images/til2.png'
import til3 from '../../assets/images/til3.png'
import til4 from '../../assets/images/til4.png'
import til5 from '../../assets/images/til5.png'

import medal1 from '../../assets/images/medal1.png'
import medal2 from '../../assets/images/medal2.png'
import medal3 from '../../assets/images/medal3.png'
import medal4 from '../../assets/images/medal4.png'
import medal5 from '../../assets/images/medal5.png'
import deliverapprox from '../../assets/images/deliveryapproc.png'
import priceapprox from '../../assets/images/pricapprox.png'

import pref1 from '../../assets/images/pref1.png'
import pref2 from '../../assets/images/pref2.png'
import pref3 from '../../assets/images/pref3.png'
import pref4 from '../../assets/images/pref4.png'

const Fucntional = (prop) => {

    // const [value, setValue] = useState([30, 60]);
    // const [pref, setPref] = useState(1);


    const upperLimit = (e) => {
        var temp = prop.value[0]
        prop.setValue([temp, e.target.value]);
        console.log(prop.value)
    } 
    const lowerLimit = (e) => {
        var temp = prop.value[1]
        prop.setValue([e.target.value, temp]);
        console.log(prop.value)
    } 
  return (
    <>
        <section className="functional-sec">
            <div className="container-lg">
                <div className="funtional-tiles">
                    <div className={prop.functonalTile === 'ranked'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('ranked')}>
                        <div className="til-img">
                            <img src={til1} alt="" />
                        </div>
                        <button>
                            RANKED CLASSIC
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'calibration'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('calibration')}>
                        <div className="til-img">
                            <img src={til2} alt="" />
                        </div>
                        <button>
                            CALIBRATION GAMES
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'dota'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('dota')}>
                        <div className="til-img">
                            <img src={til3} alt="" />
                        </div>
                        <button>
                            DOTA PLUS
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'behave'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('behave')}>
                        <div className="til-img">
                            <img src={til4} alt="" />
                        </div>
                        <button>
                            BEHAVIOUR BOOST
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'low'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('low')}>
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
                            <h2>
                            {
                                prop.functonalTile === 'ranked' ? 'Current MMR Rank ' : 
                                prop.functonalTile === 'calibration' ? 'Calibration games ' :
                                prop.functonalTile === 'dota' ? 'Current Dota Plus Hero Level' :
                                prop.functonalTile === 'behave' ? 'Current BEHAVIOR SCORE ' :
                                prop.functonalTile === 'low' ? 'Low Priority Removal ' :
                                ''


                            }
                               
                            
                            
                            
                            
                            <span><img src={
                                
                                prop.functonalTile === 'ranked' ? medal1 : 
                                prop.functonalTile === 'calibration' ? medal2 :
                                prop.functonalTile === 'dota' ? medal3 :
                                prop.functonalTile === 'behave' ? medal4 :
                                prop.functonalTile === 'low' ? medal5 :
                                ''
                            } alt="" /></span></h2>
                            <div className="boostbtns">
                                <button className={prop.topbanner === 'solo'? 'boostbtn activeboostbtn' : 'boostbtn' } onClick={()=>prop.setTopBanner('solo')}>
                                    
                                {
                                        prop.functonalTile === 'ranked' ? 'MMR SOLO BOOST ' : 
                                        prop.functonalTile === 'calibration' ? 'SOLO ' :
                                        prop.functonalTile === 'dota' ? 'SOLO' :
                                        prop.functonalTile === 'behave' ? 'SOLO' :
                                        prop.functonalTile === 'low' ? 'SOLO ' :
                                        ''


                                    }
                                    
                                </button>
                                <button className={prop.topbanner === 'duo'? 'boostbtn activeboostbtn' : 'boostbtn' } onClick={()=>prop.setTopBanner('duo')}>
                                {
                                        prop.functonalTile === 'ranked' ? 'MMR DUO BOOST ' : 
                                        prop.functonalTile === 'calibration' ? 'DUO ' :
                                        prop.functonalTile === 'dota' ? 'DUO' :
                                        prop.functonalTile === 'behave' ? 'DUO' :
                                        prop.functonalTile === 'low' ? 'DUO ' :
                                        ''


                                    }
                                    
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="status-tags">
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={deliverapprox} alt="" />
                                    </div>
                                    <p>Approx delivery time: <span>{prop.value[1] - prop.value[0]} days</span></p>
                                </span>
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={priceapprox} alt="" />
                                    </div>
                                    <p>Price estimate <span>{prop.value[0]} to {prop.value[1]}</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sldierpart">
                        <RangeSlider min={0} max={
                            
                                prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                            
                            
                            } step={
                                prop.functonalTile === 'ranked' ? '1000' : 
                                prop.functonalTile === 'calibration' ? '5' :
                                prop.functonalTile === 'dota' ? '5' :
                                prop.functonalTile === 'behave' ? '1000' :
                                prop.functonalTile === 'low' ? '1' :
                                ''
                            } onInput={prop.setValue} value={prop.value} />
                        <div className="rangeslidervalues"> 
                        {
                                prop.functonalTile === 'ranked' ? 
                                (
                                    <>
                                        <span>0</span>
                                        <span>1000</span>
                                        <span>2000</span>
                                        <span>3000</span>
                                        <span>4000</span>
                                        <span>5000</span>
                                        <span>6000</span>
                                        <span>7000</span>
                                        <span>8000</span>
                                    </>
                                )
                                
                                : 
                                prop.functonalTile === 'calibration' ? (
                                    <>
                                        <span>0%</span>
                                        <span>5%</span>
                                        <span>10%</span>
                                        <span>15%</span>
                                        <span>20%</span>
                                        <span>25%</span>
                                        <span>30%</span>
                                    </>
                                )
                                :
                                prop.functonalTile === 'dota' ? (
                                    <>
                                    <span>0</span>
                                        <span>5</span>
                                        <span>10</span>
                                        <span>15</span>
                                        <span>20</span>
                                        <span>25</span>
                                        <span>30</span>
                                    </>
                                ) :
                                prop.functonalTile === 'behave' ? (
                                    <>
                                        <span>0</span>
                                        <span>1000</span>
                                        <span>2000</span>
                                        <span>3000</span>
                                        <span>4000</span>
                                        <span>5000</span>
                                        <span>6000</span>
                                        <span>7000</span>
                                        <span>8000</span>
                                        <span>9000</span>
                                        <span>10000</span>

                                    </>
                                ) :
                                prop.functonalTile === 'low' ? (
                                    <>
                                        <span>0</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>

                                    </>
                                ) :
                                ''


                            }
                            
                        </div>
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
                        <input type="number" onInput={(e) => lowerLimit(e)} min={
                            0
                        } max={
                            prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                        }/>
                        <span>-</span>
                        <input type="number"  onInput={(e) => upperLimit(e)} min={
                            0
                        } max={
                            prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                        }/>
                        <button>Apply</button>
                    </div>
                    <div className="preferences">
                        <p>ROLE</p>
                        <div className={prop.pref === '1' ? 'preftile activepreftile': 'preftile'} onClick={()=>prop.setPref('1')}>
                            <div className="preimg">
                                <img src={pref1} alt="" />
                            </div>
                            <button>CORE</button>
                        </div>
                        <div className={prop.pref === '2' ? 'preftile activepreftile': 'preftile'} onClick={()=>prop.setPref('2')}>
                            <div className="preimg">
                                <img src={pref2} alt="" />
                            </div>
                            <button>SUPPORT</button>
                        </div>
                        <div className={prop.pref === '3' ? 'preftile activepreftile': 'preftile'} onClick={()=>prop.setPref('3')}>
                            <div className="preimg">
                                <img src={pref3} alt="" />
                            </div>
                            <button>NO PREFERENCE</button>
                        </div>
                        <div className={prop.pref === '4' ? 'preftile activepreftile': 'preftile'} onClick={()=>prop.setPref('4')}>
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