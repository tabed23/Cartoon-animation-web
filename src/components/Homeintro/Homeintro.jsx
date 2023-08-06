import React from 'react'
import './Homeintro.css'

const Homeintro = () => {
  return (
    <section className='homeintro singlebg'>
        <div className="container-lg">
            <div className="row">
                <div className="col-md-7">
                     <h1>
                        GET DESIRED RANK <span>IN SWIFTBOOST</span>
                     </h1>
                     <div className="homeintrobtns">
                        <button>
                            <a href="">START BOOST</a>
                        </button>
                        <button>
                            <a href="">REGISTER</a>
                        </button>
                     </div>
                     <p>
                     This Discount is Available When You Register a New Account. Check Your Email for the   
                     <span> Discount Code.</span>
                     </p>
                </div>
            </div>
        </div>
    
    
    </section>
  )
}

export default Homeintro