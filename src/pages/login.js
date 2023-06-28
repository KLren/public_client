import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm'

function Login() {
    return (
        <Row>
            <Col></Col>
            <Col>
                <LoginForm/>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Login;