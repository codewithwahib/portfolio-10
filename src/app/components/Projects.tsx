import React from 'react';
import Heading from './Heading';
import Card from './Card'; // Keep this import, but remove the redefined Card

const data = [
  {
    id: "0",
    title: "Weather Application ",
    desc: " Weather Application shows current weather and forecasts using data from a weather API.",
    img: "/image.png",
  },
  {
    id: "1",
    title: "Live Streaming Application",
    desc: "A Live Streaming Application allows users to broadcast or watch live video content in real-time over the internet.",
    img: "/download.jpeg",
  },
  {
    id: "2",
    title: " Task Managment Application",
    desc: "A Task Management Application helps users organize and track tasks, set deadlines, and manage projects efficiently.",
    img: "/task.png",
  },
  {
    id: "3",
    title: "Blog Website",
    desc: "A Blog Website allows users to publish, read, and interact with articles or posts on various topics, often featuring comments and categories.",
    img: "/blog.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            className="hover:outline-[#7689de] hover:outline-5 transition-all duration-300 ease-in-out" // Changed outline color to black
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
