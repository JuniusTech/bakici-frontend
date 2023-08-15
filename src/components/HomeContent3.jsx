import React from 'react';
import "../styles/HomeContent3.css";
import musteri1 from "../assets/musteri1.svg";
import musteri2 from "../assets/musteri2.svg";
import musteri3 from "../assets/musteri3.svg";
import { Container, Carousel, Button } from 'react-bootstrap';

function HomeContent3() {
    return (
        <div className="Carouselx">
            <Container>
                <p className="Carouselx-Text">" KULLANICILARIMIZ NELER DİYOR "</p>
                <div className="Carouselx-Box">
                    <Carousel id="carouselExampleInterval" data-bs-ride="carousel" className='carousel-image-container'>
                        <Carousel.Item>
                            <img src={musteri2} className="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={musteri1} className="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={musteri3} className="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                    <Button className="Carouselx-Button carousel-control-prev" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="button-span-left" aria-hidden="true"></span>
                    </Button>
                    <Button className="Carouselx-Button carousel-control-next" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="button-span-right" aria-hidden="true"></span>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default HomeContent3;





