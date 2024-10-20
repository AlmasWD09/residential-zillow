
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null)

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                const findSingleData = data.find(item => item.id === parseInt(id))
                setProducts(findSingleData)
            })


    }, [id])
  return (
    <>
      <Helmet>
        <title>Residential-viewDetails!!</title>
      </Helmet>
      <div className="max-w-7xl mx-auto pt-10 px-8 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-6 shadow-lg rounded-xl lg:p-8">

          <div className="w-full lg:w-1/2 bg-green-300 rounded-xl md:rounded-l-xl">
            <div className='relative'>
              <figure className="w-full">
                <img className="w-full object-cover rounded-xl md:rounded-l-xl" src={product?.image} alt={product?.name} loading='lazy' />
              </figure>
              <p className='absolute top-0 right-0 px-4 py-2 rounded-tr-xl bg-emerald-900 text-white rounded-tl rounded-bl lowercase'>{product?.status}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-3 py-3 px-4 lg:px-0">
            <h1 className="text-xl font-bold">{product?.title} </h1>
            <small>{product?.name}</small>
            <p>{product?.description}</p>
            <p><span className="font-bold">Price</span>: {product?.price}</p>
            <p><span className="font-bold">Area</span>: {product?.area}</p>

            <small>{product?.location}</small>
            <div>
              <p className="font-semibold">Facilitys:</p>
              {product?.facility.map((item, idx) => {
                return (
                  <li className="list-decimal" key={idx}>{item}</li>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;