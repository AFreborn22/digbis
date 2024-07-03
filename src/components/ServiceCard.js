import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
      <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{service.price}</span>
          <span className="bg-green-500 text-white px-2 py-1 rounded">Best Services</span>
        </div>
        <h3 className="text-xl font-bold my-2">{service.title}</h3>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <div className="text-gray-500">{service.person} - {service.role}</div>
      </div>
    </div>
  );
}

export default ServiceCard;
