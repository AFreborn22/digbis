import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from '../img/pexels-cottonbro-4101143.jpg';
import img2 from '../img/pexels-shvetsa-4226256.jpg';
import img3 from '../img/pexels-thecoachspace-2977565.jpg';

const Services = () => {
  const services = [
    {
      price: "Rp.20.000.000",
      title: "Luxury",
      description: "Consultation | Revision | Dashboard Web",
      image: img1
    },
    {
      price: "Rp.10.000.000",
      title: "VIP",
      description: "Consultation | Revision",
      image: img2
    },
    {
      price: "Rp.2.500.000",
      title: "Classic",
      description: "Consultation",
      image: img3
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Best Of Services</h2>
      <div className="flex justify-center space-x-10">
        {services.map(service => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
