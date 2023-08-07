import React from 'react'
import bodyimg from '../../assest/sec-2.png'
import './About.css'

function About() {
  return (
        <div  className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-7 '>
                        <img src={bodyimg} alt='' />

                    </div>
                    <div className='col-sm-6 col-md-5'>
                        <h3>
                        We pride ourselves on making real food from the best ingredients.
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        
                        </p>
                        <button className=''>
                            learn more
                        </button>

                    </div>

                </div>

            </div>

        </div>
  )
}

export default About
