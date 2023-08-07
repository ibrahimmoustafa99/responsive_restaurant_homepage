import React from 'react'
import secimg from '../../assest/sec-3.png'
import './about2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About2() {
  return (
    <div className='about2'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h3>We make everything by hand with the best possible ingredients.</h3>
                <p className='pb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                </p>
                <p >Etiam sed dolor ac diam volutpat.</p>
                <p>Etiam sed dolor ac diam volutpat.</p>
                <p>Etiam sed dolor ac diam volutpat.</p>
            </div>
            <div className='col-md-6'>
                <img src={secimg} alt=''></img>

            </div>

        </div>

      </div>
    </div>
  )
}

export default About2
