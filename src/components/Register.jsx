import {
  Button,
  Col,
  Form,
  Row,
  Card,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Background">
      <div className="BackgroundColor"></div>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="Card">
          <CardBody>
            <CardTitle> Registrate </CardTitle>

            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="Direccion1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="1234 Tu calle" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Direccion2">
                <Form.Label>Dirección 2</Form.Label>
                <Form.Control placeholder="Departamento o Piso" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="Ciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="Provincia">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="Codigo postal">
                  <Form.Label>C. postal</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="Checkbox">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      Acepto{" "}
                      <Link
                        to="/politicadeprivacidad"
                        style={{ color: "#007bff" }}
                      >
                        política de privacidad
                      </Link>
                    </>
                  }
                />
              </Form.Group>

              <Button variant="primary" type="Enviar">
                Enviar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Register;
