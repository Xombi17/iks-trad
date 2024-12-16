import React from 'react';
import { Scroll, Heart, Flower } from 'lucide-react';

export default function WisdomSection() {
  const practices = [
    {
      icon: <Scroll className="h-8 w-8" />,
      title: "Ayurvedic Principles",
      description: "Learn about the three doshas and natural healing methods passed down through generations."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tribal Medicine",
      description: "Discover ancient remedies and healing practices from India's indigenous communities."
    },
    {
      icon: <Flower className="h-8 w-8" />,
      title: "Medicinal Plants",
      description: "Explore the vast knowledge of healing herbs and their traditional applications."
    }
  ];

  return (
    <section id="wisdom" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-amber-900 text-center mb-16">
          Ancient Wisdom & Practices
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-amber-200">
              <div className="text-amber-700 mb-4">
                {practice.icon}
              </div>
              <h3 className="text-2xl font-serif text-amber-900 mb-4">
                {practice.title}
              </h3>
              <p className="text-amber-800">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}