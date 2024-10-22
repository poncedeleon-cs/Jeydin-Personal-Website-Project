import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
  [x: string]: any;
  title: string;
  description: string;
  link: string;
  image: string;
  owner: string;
  repo: string;
}

export default function Projects() {
  const [projectData, setProjectData] = useState<Project[]>([
    {
      title: "Munchyroll",
      description: "Ad-free anime streaming web app aimed at minimality and responsive design.",
      link: "https://github.com/Jeydin21/Munchyroll",
      image: "/munchyroll.png",
      owner: "Jeydin21",
      repo: "Munchyroll"
    },
    {
      title: "Personal Website",
      description: "Personal website I created in my senior year of high school for my computer science class.",
      link: "https://github.com/Jeydin21/Website",
      image: "/preview.png",
      owner: "Jeydin21",
      repo: "Website"
    },
    {
      title: "Raincheck ☔",
      description: "Small web app that displays the current weather and forecast in any location in the world.",
      link: "https://github.com/Jeydin21/Raincheck",
      image: "/raincheck.png",
      owner: "Jeydin21",
      repo: "Raincheck"
    },
    {
      title: "Tailwind Calculator",
      description: "Simple calculator web app created using Tailwind CSS.",
      link: "https://github.com/Jeydin21/Calculator-App",
      image: "/calculator.png",
      owner: "Jeydin21",
      repo: "Calculator-App"
    },
    {
      title: "Crypto Comparer",
      description: "Web app created with Flask to compare the prices of two cryptocurrencies. ",
      link: "https://github.com/Jeydin21/Calculator-App",
      image: "/crypto.png",
      owner: "Jeydin21",
      repo: "Calculator-App"
    }
  ]);

  useEffect(() => {
    const fetchRepoData = async () => {
      const updatedProjects = await Promise.all(projectData.map(async (project) => {
        const response = await fetch(`https://api.github.com/repos/${project.owner}/${project.repo}`);
        const data = await response.json();
        return {
          ...project,
          stars: data.stargazers_count,
          forks: data.forks_count
        };
      }));
      setProjectData(updatedProjects);
    };

    fetchRepoData();
  }, []);

  return (
    <div id="projects" className="py-24 border-y-2 border-gray-500 bg-slate-200 dark:bg-dark-background2 h-full relative isolate px-6 lg:px-8">
      <div className="mx-auto font-extrabold text-3xl text-center text-light-text dark:text-white mb-8 underline underline-offset-8">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col p-6 bg-white dark:bg-dark-background rounded-lg shadow-md">
            <Link href={project.link} target='_blank'>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4 dark:border-2 dark:border-white/50 dark:shadow-lg" />
            </Link>
            <div className="flex-grow">
              <Link href={project.link} target='_blank' className="text-gray-700 dark:text-gray-300 hover:text-blue-400 text-2xl font-bold mb-2 transition-all">{project.title}</Link>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
            {/* <div className='mt-auto self-start text-gray-700 dark:text-gray-300'>
              {`⭐ ${project.stars} | 🍴 ${project.forks}`}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}