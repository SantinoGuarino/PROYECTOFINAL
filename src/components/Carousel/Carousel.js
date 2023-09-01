import Carousel from 'react-bootstrap/Carousel';

//Style
import './carousel.scss'

function CarouselBanner () {
    return( 
        <>
        <Carousel className='Carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Banner 1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Banner 2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Banner 3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Banner 4.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/Banner 5.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default CarouselBanner