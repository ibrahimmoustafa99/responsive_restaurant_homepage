import Carousel from 'react-bootstrap/Carousel';
import im1 from '../../assest/1.jpg'
import './slider.css'

function UncontrolledExample() {
  return (
        <div className='slider' >
            <h3>Testimonials</h3>
            <div className='container container-slider text-center m-auto '>
                <Carousel>
                <Carousel.Item>
            <div className='slider-div '>
                    <div className='slider-contant'>
                    <h2>luic luxi</h2>
                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
                    </div>
                </div>

                <Carousel.Caption>
                <h3>Some Of Our Customer's Reviews</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='slider-div '>
                    <div className='slider-contant'>
                    <h2>luck adam</h2>
                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
                    </div>
                </div>

                <Carousel.Caption>
                <h3>Some Of Our Customer's Reviews</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='slider-div '>
                    <div className='slider-contant'>
                    <h2>john jo</h2>
                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
                    </div>
                </div>

                <Carousel.Caption>
                <h3>Some Of Our Customer's Reviews</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

            </div>

        </div>
  );
}

export default UncontrolledExample;