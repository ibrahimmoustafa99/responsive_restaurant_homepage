import React from 'react'
import './explore.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../../assest/01.jpg'
import card2 from '../../assest/02.jpg'
import card3 from '../../assest/03.jpg'

function explore() {
  return (
    <div className='explore'>
        <div className='container'>
            <div className='about text-center'>
                <h2>Explore Our Foods </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.

                </p>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Rainbow Vegetable </Card.Title>
                            <Card.Text>
                            Time: 15 - 20 Minutes | Serves: 1
                            <p className='cardtext'>
                            $10.50
                            </p>
                            </Card.Text>
                            <Button >Order Now</Button>
                        </Card.Body>
                        </Card>

                    </div>

                </div>
                <div className='col-md-4'>
                <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Vegetarian Burger</Card.Title>
                            <Card.Text>
                            Time: 30 - 45 Minutes | Serves: 1
                            <p className='cardtext'>
                            $9.20
                            </p>
                            </Card.Text>
                            <Button >Order Now</Button>
                        </Card.Body>
                        </Card>

                    </div>

                </div>
                <div className='col-md-4'>
                <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card3} />
                        <Card.Body>
                            <Card.Title>French Toast</Card.Title>
                            <Card.Text>
                            Time: 10 - 15 Minutes | Serves: 1
                            <p className='cardtext'>
                            $12.50
                            </p>
                            </Card.Text>
                            <Button >Order Now</Button>
                        </Card.Body>
                        </Card>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default explore
