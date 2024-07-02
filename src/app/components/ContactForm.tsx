import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertVariant, setAlertVariant] = useState<string>('success');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setAlertMessage('Please fill in all fields');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setAlertMessage('Message sent successfully!');
        setAlertVariant('success');
        setShowAlert(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setAlertMessage('Failed to send message');
        setAlertVariant('danger');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setAlertMessage('Error sending message');
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };

  return (
    <Container className={styles.contactFormContainer}>
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Contact Us</h2>
          {showAlert && (
            <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className={styles.contactForm}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={styles.inputField}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={styles.inputField}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className={styles.inputField}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" className={styles.submitButton}>
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
