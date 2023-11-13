import React,{useContext} from 'react'
import {Card} from "react-bootstrap"
import {Button} from 'react-bootstrap';
import './style.css';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';



const Product = ({SingleProduct}) => {

// const {state:{cart},dispatch}=CartState()
  const { state:{cart},dispatch } = useContext(CartContext);

const id = SingleProduct.id;
console.log(cart);
  return (
    <Link to={`/${id}`}>
      <div className='products'>
        <Card>
          <Card.Img
            src={SingleProduct.image}
            alt={SingleProduct.title}
            style={{ width: '200px', height: '200px' }}
          ></Card.Img>
          <Card.Title>{SingleProduct.title}</Card.Title>
          <Card.Subtitle>{SingleProduct.price}</Card.Subtitle>

          {cart.some((p) => p.id === SingleProduct.id) ? (
            <Button
              variant='danger'
              onClick={() => {
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: SingleProduct,
                });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: SingleProduct,
                });
              }}
            >
              Add to cart
            </Button>
          )}
        </Card>
      </div>
    </Link>
  );
}

export default Product