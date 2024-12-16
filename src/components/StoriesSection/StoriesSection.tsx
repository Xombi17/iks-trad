import React from 'react';
import StoryCard from './StoryCard';
import { STORIES } from '../../utils/stories';

export default function StoriesSection() {
  return (
    <section id="stories" className="py-20 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">
          Healing Tales for Young Minds
        </h2>
        <p className="text-center text-amber-800 mb-16 max-w-2xl mx-auto">
          Ancient stories that teach the wisdom of traditional healing through enchanting tales
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}