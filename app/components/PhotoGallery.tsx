import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import styles from './PhotoGallery.module.css';

const photos = [
  { src: '/BarneyJin-Portfolio/images/food1.jpeg', alt: 'Photo 1' },
  { src: '/BarneyJin-Portfolio/images/food2.png', alt: 'Photo 2' },
  { src: '/BarneyJin-Portfolio/images/food3.jpeg', alt: 'Photo 3' },
  { src: '/BarneyJin-Portfolio/images/food4.jpeg', alt: 'Photo 4' },
  { src: '/BarneyJin-Portfolio/images/food5.jpeg', alt: 'Photo 5' },
  { src: '/BarneyJin-Portfolio/images/food6.jpeg', alt: 'Photo 6' },
  { src: '/BarneyJin-Portfolio/images/food7.jpeg', alt: 'Photo 7' },
  // Add more photos as needed
];

const PhotoStack: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleClick = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <Container className={styles.photoStack}>
        <h2 className="text-center my-5" style={{fontFamily: 'sans-serif'}}>Also I am a unpaid part-time Chef (Self-named)</h2>
        <div className={`${styles.stackContainer} ${isExpanded ? styles.expanded : ''}`} onClick={handleClick}>
          {photos.map((photo, index) => (
            <Card
              key={index}
              className={`${styles.photoCard} ${isExpanded ? styles.expanded : ''}`}
              style={{ '--i': index } as React.CSSProperties}
            >
              <Card.Img variant="top" src={photo.src} alt={photo.alt} className={styles.photo} />
            </Card>
          ))}
        </div>
      </Container>
    );
  };
  
  export default PhotoStack;