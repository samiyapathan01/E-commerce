import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'

function Products() {

    const id = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3000/api/products")
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the products!", error);
            })

    }, [])

    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
                        Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {

                            product.map((items) => (
                                <div key={items.id}>

                                    <Link to={`/Products/${items.id}`}>


                                        <a href="javascript:;"
                                            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                                            <div className="">
                                                <img src={items.image} alt=" "
                                                    className="w-full aspect-square rounded-2xl object-cover" />
                                            </div>
                                            <div className="mt-5">
                                                <div className="flex items-center justify-between">
                                                    <h6
                                                        className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                                                        {items.name}</h6>
                                                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">₹{items.price}</h6>
                                                </div>
                                                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">{items.desc}</p>
                                            </div>
                                        </a>

                                    </Link>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Products
