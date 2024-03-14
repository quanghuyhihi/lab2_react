import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=12`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                {products.map((product: any,index:number) => {
                    return (
                        <div key={index} className="col-3 ">
                                <img className='w-100 ' src={product.thumbnail} />
                            <h3 className='text-center'>{product.title}</h3>
                            <p className='text-center'>${product.price}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Products;