import React from 'react'
import backgroundD from '../img/backgroundD.png'
import AllTrips from './AllTrips';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function Home() {

    return (
        <>

            <div className="container homePage">
                <h1 className="home-heading">Welcome </h1>
                <p className="home-text">There are many variations of passages of Lorem Ipsum available,<br />but the majority have suffered alteration in some form, by injected<br /> humour, or randomised words which don't look even slightly <br />believable. If you are going to use a passage of Lorem Ipsum, <br />you need to be sure there isn't anything embarrassing <br />hidden in the middle of text. </p>
                <span><img src={backgroundD} alt="man and a woman" className="img" width="80%" /></span>
            <Link to='/alltrips'>
                <Button className="home-button-all"> All trips  </Button>
            </Link>
            <Link to='/add-trip'>
                    <Button className="home-button-new"> Add a new trip </Button>
            </Link>

            </div>
        </>
    )
}
