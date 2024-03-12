import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500 ">Price: ${price}</p>
        <div className="card-actions">
          
          <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
