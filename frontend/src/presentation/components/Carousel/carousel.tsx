import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

// Função para prevenir o arrasto das imagens
const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="path-to-img1" onDragStart={handleDragStart} role="presentation" alt="Image 1" />,
    <img src="path-to-img2" onDragStart={handleDragStart} role="presentation" alt="Image 2" />,
    <img src="path-to-img3" onDragStart={handleDragStart} role="presentation" alt="Image 3" />,
];

const Gallery = () => {
    return (
        <AliceCarousel 
            mouseTracking 
            items={items} 
            autoPlay 
            autoPlayInterval={3000}
            infinite 
        />
    );
};

export default Gallery;
