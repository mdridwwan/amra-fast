// import './HeaderMain.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
const Slider = () => {
    return (
        <Carousel className="row d-flex align-items-center">
            <Carousel.Item>
                <img height="400px"
                    className="d-block w-100"
                    src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148509518.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="divBG col-md-12 col-lg-6 offset-md-1 mb-4 fw-bolder text-dark">
                        <h1>We’re enabling a better, more efficient Fast Delivery system</h1>
                        <p className='text-secondary'>We deliver innovative solutions that help improve the journey.</p>
                        <a href="#book-ride" style={{ background: "#f0561d" }} className="btn btn-lg fw-bolder">Details</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="400px"
                    className="d-block w-100"
                    src="https://www.bizzsmartz.com/wp-content/uploads/2019/04/delayed-delivery-cover-thegem-blog-timeline-large.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="divBG col-md-12 col-lg-6 offset-md-1 mb-4 fw-bolder text-dark">
                        <h1>We’re enabling a better, more efficient Fast Delivery system</h1>
                        <p className='text-secondary'>We deliver innovative solutions that help improve the journey.</p>
                        <a href="#book-ride" style={{ background: "#f0561d" }} className="btn btn-lg fw-bolder">Details</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="400px"
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg?size=626&ext=jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="divBG col-md-12 col-lg-6 offset-md-1 mb-4 fw-bolder text-dark">
                        <h1>We’re enabling a better, more efficient Fast system</h1>
                        <p className='text-secondary'>We deliver innovative solutions that help improve the healthcare journey.</p>
                        <a href="#book-ride" style={{ background: "#f0561d" }} className="btn btn-lg fw-bolder">Details</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;