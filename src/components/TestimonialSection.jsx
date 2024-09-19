import React from 'react';

const TestimonialSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Trusted by over 8M sellers around the world</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{ name: 'Robert A. Valvas', rating: 5 },
          { name: 'Cristian Romey', rating: 5 },
          { name: 'Nikki', rating: 5 }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={`/api/placeholder/50/50?text=${testimonial.name[0]}`} alt={testimonial.name} className="rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
