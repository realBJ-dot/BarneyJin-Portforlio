'use client'
import Image from "next/image";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContactForm from "./components/ContactForm";


export default function Home() {

  
  const openGitHub = () => {
    window.open('https://github.com/realBJ-dot/', '_blank');
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/barneyjin/", '_blank');
  }
  return (
<Container style={{ backgroundColor: '#9A8986', minHeight: '100vh', padding: '20px',
   display: 'flex', justifyContent: 'center' }}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Container style={{display: 'flex', justifyContent: 'center', padding: '30px'}}>
        {/* <Image
        src="/images/profile.jpg" 
        alt="Profile Image"
        width={300}
        height={400}
      /> */}
      </Container>
      
        
      <h1 className="text-center">Hey there! Thanks for taking a look.</h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Row className="justify-content-center">
          <Col md="auto">
            <Button variant="primary" size="sm" onClick={openGitHub} > 
              GitHub 
            </Button>
            <Button variant="primary" size="lg" onClick={openLinkedIn} style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
              LinkedIn
            </Button>
          </Col>
        </Row>
      </div>
      <ContactForm/>
      
     
    
      
          
      </main>
    </Container>
  );
}
