import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container className="text-center">
        <h2 className={styles.heading}>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, shoot me an email at: 
             <Link href="mailto:realbdotjdot@gmail.com" target="_blank" rel="noopener noreferrer" className='haha'> realbdotjdot@gmail.com</Link>.</p>
        <div className="mt-4">
          <p>© 2024 Peiyuan (Barney) Jin. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
