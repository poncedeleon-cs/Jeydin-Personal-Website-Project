import React from 'react';

const experiences = [
  {
    date: 'June 2020',
    title: 'Started my first ever coding project',
    description: 'I began my coding journey in Node.js and Discord.js by creating a Discord bot to solve Kumon math problems during the COVID-19 pandemic.',
  },
  {
    date: 'May 2021 - Present',
    title: 'Cinco Ranch High School',
    description: 'I am currently a senior at Cinco Ranch High School in Katy, Texas.',
  },
];

export default function Experience() {
  return (
    <div id="experience" className="h-full pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-light-text dark:text-white mb-8 underline underline-offset-8">
          My Experiences
        </h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-300">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 ml-6 border border-gray-300 dark:border-hidden rounded-md">
              <div className="absolute w-6 h-6 mt-10 bg-blue-500 dark:bg-blue-300 rounded-full -left-3.5 border-4 border-light-background dark:border-dark-background2"></div>
              <div className="bg-light-background dark:bg-dark-background p-4 rounded-lg shadow-lg">
                <span className="text-sm text-gray-500 dark:text-gray-400">{experience.date}</span>
                <h3 className="text-xl font-semibold text-light-text dark:text-white">{experience.title}</h3>
                <p className="text-light-text dark:text-dark-text">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};