import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  className?: string; // Add className prop to allow custom styles
}

const Card: React.FC<PropsType> = ({ title, desc, img, className }) => {
  return (
    <div className={`border border-accent w-[300px] sm:w-[350px] ${className}`} data-aos="zoom-in-left">
      <div>
        <Image 
          className="w-[300px] sm:w-[350px] h-auto"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div>
          {/* Additional content such as icons can go here */}
        </div>
      </div>
    </div>
  );
};

export default Card;




