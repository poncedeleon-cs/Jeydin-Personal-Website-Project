import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
}

export default function ProjectCard({ name, description, language, languageColor, url }: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${languageColor}`}></span>
          <span>{language}</span>
        </div>
      </div>
    </a>
  );
};