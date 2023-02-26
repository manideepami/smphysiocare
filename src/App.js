import logo from './logo.png';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


function App() {
  return (
    <Container>
        <Row className="text-center mt-5">
          <Col md={12}>
            <Card className="text-center bg-light p-5">
            <img src={logo} className='w-100 img-responsive mx-auto' alt="SM PhysioCare" />
              <div className='pt-5'>
                <div class='text-center'>
                <h4>For more details:</h4>
                  <a className="btn btn-outline-primary mx-3 px-5 fw-bold" href="tel:8096967027">8096967027</a>
                  <a className="btn btn-outline-primary mx-3 px-5 fw-bold" href="mailto:smphysiocare@gmail.com">smphysiocare@gmail.com</a>
                </div>
              </div>
            </Card>

          </Col>
        </Row>
    </Container>
  );
}

export default App;
