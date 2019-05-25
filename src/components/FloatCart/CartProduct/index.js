import React, { useState } from 'react';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

const CartProduct = ({ product, removeProduct }) => {

  const classes = ['shelf-item'];
  const [isOver, setIsOver] = useState(false);
  const image1 = require(`../../../static/products/${product.sku}_1.jpg`);
  const image2 = require(`../../../static/products/${product.sku}_2.jpg`);

  if (!isOver) {
    classes.push('shelf-item--mouseover');
  }

  return (
    <div className={classes.join(' ')}>
      <div
        className="shelf-item__del"
        onClick={() => removeProduct(product)}
      />
      <Thumb
        classes="shelf-item__thumb"
        src={isOver ? image2 : image1}
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
        alt={product.title}
      />
      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br/>
          Cantidad: {product.quantity}
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
      </div>
    </div>
  );
};

export default CartProduct;
