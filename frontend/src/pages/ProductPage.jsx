import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import Rating from '../components/Rating'
import products from '../products'

const ProductPage = () => {
  const params = useParams()
  const product = products.find((item) => item._id === params.id)
  return (
    <>
      <Link className='btn btn-light' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <h3>${product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Description: <span>{product.description}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? (
                    <span style={{ color: 'green' }}>In Stock</span>
                  ) : (
                    <span style={{ color: 'red' }}>Out of Stock</span>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn w-100 my-3'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
