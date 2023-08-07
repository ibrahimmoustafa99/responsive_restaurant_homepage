import React from 'react'
import './header.css'


function header() {
  return (
    <header>
        <div className='container h-100 d-flex align-items-center ' >
            <div className='row   '>
                <div className='col-md-8 col-sm-7 '>
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                <div className='space30'></div>
                <div>
                    <button className='me-3' >
                      Order Now
                    </button>
                    <button >
                      Order Now
                    </button>
                </div>
                

                </div>

            </div>

        </div>
    </header>
  )
}

export default header
