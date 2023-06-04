import React from "react";

const avatars = [
  {
    id: 1,
    image: "/images/img1.png",
    name: "Bonnie Green",
    portfolio: "Senior Front-end Developer",
  },
  {
    id: 2,
    image: "/images/img2.png",
    name: "Micheal Gough",
    portfolio: "Front-end Developer",
  },
  {
    id: 3,
    image: "/images/img3.png",
    name: "Helene Engels",
    portfolio: "Designer",
  },
  {
    id: 4,
    image: "/images/img4.png",
    name: "Neil Sims",
    portfolio: "CEO & React Developer",
  },
  {
    id: 5,
    image: "/images/img5.png",
    name: "Roberta Casas",
    portfolio: "SEO Specialist",
  },
  {
    id: 6,
    image: "/images/img6.png",
    name: "Joseph McFall",
    portfolio: "Backend Developer",
  },
  {
    id: 7,
    image: "/images/img7.png",
    name: "Karen Nelson",
    portfolio: "Designer",
  },
  {
    id: 8,
    image: "/images/img8.png",
    name: "Jese Leos",
    portfolio: "Logo Designer",
  },
]; 

function Team() {
  return (
    <div>
      <div className="max-w-[1220px] mx-auto px-4 lg:px-8" data-aos="fade-up">
        <p className="text-center font-bold mt-20 text-[36px] text-green">
          Our team
        </p>
        <p className="text-center w-[90%] lg:w-[52%] font-Grotesk text-base lg:text-xl text-[#6B7280] mx-auto">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-6 mt-[52px]">
          {avatars.map((avatar) => (
            <div className="flex flex-col items-center my-8">
              <img src={avatar.image} alt="" />
              <div className="text-center">
                <p className="pt-3 text-xl font-Cabinet_Grotesk">
                  {avatar.name}
                </p>
                <p className="text-[#6B7280] font-Grotesk">
                  {avatar.portfolio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
