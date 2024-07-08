import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import styles from './Jokes.module.css';

interface Joke {
  setup?: string;
  delivery?: string;
  joke?: string;
}

const Jokes: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/BarneyJin-Portfolio/api/jokes');
      setJoke(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : joke ? (
            <Card className={styles.jokeCard}>
              {joke.setup && <Card.Body><Card.Title>{joke.setup}</Card.Title></Card.Body>}
              {joke.delivery && <Card.Body><Card.Text>{joke.delivery}</Card.Text></Card.Body>}
              {joke.joke && <Card.Body><Card.Text>{joke.joke}</Card.Text></Card.Body>}
            </Card>
          ) : (
            <div className="text-center">No joke found</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Jokes;
