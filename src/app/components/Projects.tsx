import React from 'react';
import Heading from './Heading';
import Card from './Card'; // Keep this import, but remove the redefined Card

const data = [
  {
    id: "0",
    title: "E-commerce Website",
    desc: "Online store with user-friendly design, fast loading times, and real-time inventory updates.",
    img: "/ecom.jpg",
  },
  {
    id: "1",
    title: "Food Website",
    desc: "Built a modern food site with interactive recipes and easy navigation.",
    img: "/food.jpg",
  },
  {
    id: "2",
    title: "Music Player",
    desc: "Created an interactive music player with album art display and custom playlists.",
    img: "/music.jpg",
  },
  {
    id: "3",
    title: "Resume Builder",
    desc: "Designed a user-friendly resume builder featuring guided prompts and formatting options.",
    img: "/resume.jpg",
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
            className="outline-none hover:outline-[#add8e6] hover:outline-2 transition-all duration-300 ease-in-out" // Hover outline on the card
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
