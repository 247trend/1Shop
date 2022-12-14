import products from '../products'
import Product from '../components/Product'

import { Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <h1 className='my-4'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
