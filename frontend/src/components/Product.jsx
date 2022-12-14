import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{minHeight: '410px'}}>
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.rating} text={` ${product.numReviews} Reviews`} />
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
