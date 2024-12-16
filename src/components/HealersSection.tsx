import React from 'react';

export default function HealersSection() {
  const healers = [
    {
      image: "https://plus.unsplash.com/premium_photo-1664910452901-f68084bfda6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJpYmFsJTIwbWVkaWNpbmUlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Tribal Medicine Women",
      expertise: "Herbal Healing & Spiritual Practices"
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdCUyMGhlYWxlcnN8ZW58MHx8MHx8fDA%3D",
      name: "Forest Healers",
      expertise: "Plant Medicine & Natural Remedies"
    }
  ];

  return (
    <section id="healers" className="py-20 bg-amber-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-amber-100 text-center mb-16">
          Wisdom Keepers
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {healers.map((healer, index) => (
            <div key={index} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src={healer.image} 
                  alt={healer.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-amber-100">
                <h3 className="text-2xl font-serif mb-2">{healer.name}</h3>
                <p className="text-amber-200">{healer.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}