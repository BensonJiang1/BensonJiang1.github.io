import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-64 h-90 flex flex-col">
      <div className="flex-shrink-0">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="flex-grow p-4 bg-black bg-opacity-50">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;