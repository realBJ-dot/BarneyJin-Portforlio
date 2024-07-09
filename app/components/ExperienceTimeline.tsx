'use client';
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExperienceTimeline.module.css';
import Image from 'next/image';

const experiences = [
    {
        title: 'Master of Computer Science, UIUC',
        icon: 'https://media.licdn.com/dms/image/C4E0BAQGFFDl_Z9pIAA/company-logo_200_200/0/1630611684443/university_of_illinois_at_urbana_champaign_logo?e=1728518400&v=beta&t=Jejjbjs4moP5O0z3kbrpSH5k8hcjyvmO8dc2gEXjZI0', // Add the icon path here
        duration: '(Spring 2024 --- present)',
        description: (
            <>
          <h4>Core courseworks: Fault Tolerant System, Computer System Organization, Large Language Models.</h4><br/>
          <br/>
          <h5>Researches 🧑‍🔬</h5>
          <strong>Fault Tolerant System Design for AVs </strong>(Autonomous Vehicles):<br/>
          <a href="https://drive.google.com/file/d/1Ze3Mv3jtRBpiKniBh6ZKDQrHe5rRU_Bg/view" target="_blank" rel="noopener noreferrer">
            Out-of-Distribution Detection and Fallback for Autonomous Vehicles
          </a><br/>
          <strong>Extended Empirical Study on Fuzz4ALL </strong> (Universal Fuzzing with Large Language Models):<br/>
          <a href="https://drive.google.com/file/d/1f_eW_4yI5ZAiG47OOOxi43MZze2bH8Su/view" target="_blank" rel="noopener noreferrer">
            Extended Empirical Study on Fuzz4ALL
          </a>
          </>
        ),
    },
    {
        title: 'Software Development Engineer, John Deere 👨‍💻',
        icon: '/BarneyJin-Portfolio/images/John_Deere.png',  // Add the icon path here
        duration: '(Summer 2022 -- Spring 2024)',
        description: (
            <>
              <span className={styles['skill-label']}>TypeScript</span> 
              <span className={styles['skill-label']}>React</span>
              <span className={styles['skill-label']}>Node.js</span><br/><br/> 
        
              <span className={styles['skill-label']}>Next.js</span> <span className={styles['skill-label']}>tanStackQuery</span>
              <span className={styles['skill-label']}>Jotai</span> <span className={styles['skill-label']}>Prisma</span>
              <br /><br/>
            
              <span className={styles['skill-label']}>Terraform</span>
              <span className={styles['skill-label']}>Jenkins</span>
              <span className={styles['skill-label']}>AWS ECS</span>
              <span className={styles['skill-label']}>AWS RDS</span>
              <span className={styles['skill-label']}>Auth</span> <br/>
              <div className={styles['reference-title']}>Professional References:</div>
              <div className={styles['reference-item']}>
                <h4>Shengqi Wang</h4> --- the most helpful mentor on this planet
                <p><strong>Senior Full-Stack Software Engineer</strong> at <strong>John Deere</strong></p>
                <a href="mailto:shengqiw97@gmail.com">shengqiw97@gmail.com</a>
              </div>
            </>
          ),
    },
    {
        title: 'Bachelor of Science, Mathematics and Computer Science, UIUC 🧑‍🎓',
        icon: 'https://media.licdn.com/dms/image/C4E0BAQGFFDl_Z9pIAA/company-logo_200_200/0/1630611684443/university_of_illinois_at_urbana_champaign_logo?e=1728518400&v=beta&t=Jejjbjs4moP5O0z3kbrpSH5k8hcjyvmO8dc2gEXjZI0',  // Add the icon path here
        duration: '(Fall 2019 --- Summer 2023)',
        description: (
            <>
             • Teaching Assistant <span className={styles['skill-label']}>Java</span> 
             <span className={styles['skill-label']}>Python</span>
             <span className={styles['skill-label']}>JavaScript</span>
              <br/><br/>
             • Open Source Developer <span className={styles['skill-label']}>Android Studio</span>
             <span className={styles['skill-label']}>Restful API</span>
            </>
        )
    },
    {
        title: 'Data Analyst Intern, O2Micro International Limited',
        icon: 'http://www.o2micro.com/images/logo_h.png',  // Add the icon path here
        duration: '(Summer 2021 --- Fall 2021)',
        description: (
            <>
            <span className={styles['skill-label']}>Principal Component Analysis</span>  <br/>
            
            </>
        )
    },
];

const ExperienceTimeline: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const updateVisibility = () => {
        const timelineItems = timelineRef.current?.getElementsByClassName(styles.timelineItem);
        if (timelineItems) {
          Array.from(timelineItems).forEach((item) => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
              item.classList.add(styles.timelineItemInView);
            } else {
              item.classList.remove(styles.timelineItemInView);
            }
          });
        }
      };
  
      updateVisibility(); // Call on mount to update visibility
      window.addEventListener('scroll', updateVisibility);
  
      return () => {
        window.removeEventListener('scroll', updateVisibility);
      };
    }, []);
  
    return (
      <Container className={styles.timelineContainer} ref={timelineRef}>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div className={styles.timelineItem} key={index}>
                  <div className={styles.timelineContent}>
                    {exp.icon && <Image src={exp.icon} alt={`${exp.title} icon`} className={styles.icon} width={50} height={50} />}
                    <h3>{exp.title}</h3>
                    <p style={{fontStyle: 'italic'}}>{exp.duration}</p>
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default ExperienceTimeline;
