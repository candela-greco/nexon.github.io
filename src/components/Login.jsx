import { Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="Background">
      <div className="BackgroundImage"></div>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="LoginCard" >
          <Card.Body>
            <Card.Title className="text-center">Iniciar Sesión</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@email.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="**********" />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Iniciar sesión
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;

