import React from 'react'

const Product = ({name, description, price}) => {

    return (
        <div className="Product">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}

export default Product