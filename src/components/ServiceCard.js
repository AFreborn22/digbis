import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from '../img/pexels-cottonbro-4101143.jpg';
import img2 from '../img/pexels-shvetsa-4226256.jpg';
import img3 from '../img/pexels-thecoachspace-2977565.jpg';

const Services = () => {
  const services = [
    {
      price: "Rp.100.000.000",
      title: "Luxury",
      description: "Consultation | Discuss | Food",
      person: "Akmal Fauzan",
      role: "Specialist",
      image: img1
    },
    {
      price: "Rp.50.000.000",
      title: "VIP",
      description: "Consultation | Discuss | Food",
      person: "Faishal Ali",
      role: "Master",
      image: img2
    },
    {
      price: "Rp.100.000",
      title: "Classic",
      description: "Consultation | Discuss | Food",
      person: "Muhammad Rizky",
      role: "Senior",
      image: img3
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Best Of Services</h2>
      <div className="flex flex-wrap justify-center lg:justify-end space-x-0 lg:space-x-10">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`w-full md:w-1/2 lg:w-1/3 mb-6 ${index === 0 ? 'order-last lg:order-none' : ''}`}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
