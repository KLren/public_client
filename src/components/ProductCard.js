import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const products={
    item:[
        {
            name: "p1",
            Price: 1000,
            descr: "This is a toy.",
            picture: "./515QDTRt6+L._AC_UF894,1000_QL80_.jpg",
        },
        {
            name: "p2",
            Price: 2000,
            descr: "This is a big toy.",
            picture: "./638107853302782570.jpg",
        }
    ],
    errMsg:null,
};

function BasicExample() {
    return (
        <Row>{
        products.item.map((product)=>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.picture} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.descr}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }</Row>
    );
}

export default BasicExample;