import Carousel from 'react-bootstrap/Carousel';
import Mono from "../assets/imgs/mono.jpg"
import Remera from "../assets/imgs/remera.jpg"
import Remera1 from "../assets/imgs/remera1.jpg"
import Short from "../assets/imgs/short.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = () => {
  return (
    <>
        <Carousel fade>
        <Carousel.Item className="Carousel">
            <img
            className="d-block w-100"
            src={Short}
            alt="Imagen producto Short"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousel">
        <img
            className="d-block w-100"
            src={Remera}
            alt="Imagen producto Remera"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousel">
        <img
            className="d-block w-100"
            src={Mono}
            alt="Imagen producto Mono"
            />        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Remera1} alt="Foto producto Remera"/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
  );
}

export default Products;