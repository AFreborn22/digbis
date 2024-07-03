import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      price: "Rp.100.000.000",
      title: "Luxury",
      description: "Consultation | Discuss | Food",
      person: "Akmal Fauzan",
      role: "Specialist",
      image: "/path-to-your-image1.jpg"
    },
    {
      price: "Rp.50.000.000",
      title: "VIP",
      description: "Consultation | Discuss | Food",
      person: "Faishal Ali",
      role: "Master",
      image: "/path-to-your-image2.jpg"
    },
    {
      price: "Rp.100.000",
      title: "Classic",
      description: "Consultation | Discuss | Food",
      person: "Muhammad Rizky",
      role: "Senior",
      image: "/path-to-your-image3.jpg"
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
