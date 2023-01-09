import React from "react";
import MovieVel from "../../../../assets/img-pages/movie-vel-img.png";
import GoldsGym from "../../../../assets/img-pages/golds-gym-img.png";
import Konecta from "../../../../assets/img-pages/konecta-img.png";
import Cartsy from "../../../../assets/img-pages/cartsy-img.png";
import Amazon from "../../../../assets/img-pages/Amazon-img.png";
import Bonik from "../../../../assets/img-pages/bonik-img.png";
import Giffy from "../../../../assets/img-pages/giffy-img.png";
import Crytoverse from "../../../../assets/img-pages/crytoverse-img.png";
import PHANOX from "../../../../assets/img-pages/phanox-img.png";
import Watched from "../../../../assets/img-pages/watched-img.png";

const WebsitesImages = () => {
  const webImages = [
    {
      src: MovieVel.src,
      name: "MovieVel",
      url: "https://movie-vel.vercel.app/",
    },
    {
      src: GoldsGym.src,
      name: "GoldsGym",
      url: "https://golds-gym-q3cy.vercel.app/",
    },
    {
      src: Konecta.src,
      name: "Konecta",
      url: "https://konectatech.vercel.app/",
    },
    {
      src: Cartsy.src,
      name: "Cartsy",
      url: "https://cartsy.vercel.app/#/",
    },
    {
      src: Amazon.src,
      name: "Amazon",
      url: "https://amazonn-eight.vercel.app/",
    },
    {
      src: Bonik.src,
      name: "Bonik",
      url: "https://bonik-chi.vercel.app/",
    },
    {
      src: Giffy.src,
      name: "Giffy",
      url: "https://giffy-phi-two.vercel.app/",
    },
    {
      src: Crytoverse.src,
      name: "Crytoverse",
      url: "https://crytoverse-gamma.vercel.app/",
    },
    {
      src: PHANOX.src,
      name: "PHANOX",
      url: "https://szkiu.github.io/PHANOX/",
    },
    {
      src: Watched.src,
      name: "Watched",
      url: "https://szkiu.github.io/Watch-ED/",
    },
  ];

  return (
    <div className="flex flex-col gap-6 xl:grid xl:grid-cols-3 xl:mt-6">
      {webImages.map(({ src, name, url }, i) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            const shadow = document.getElementById(`web-img-shadow-${name}`);

            shadow.classList.remove("-translate-y-[999rem]");
            shadow.classList.remove("opacity-0");
            shadow.classList.add("opacity-100");
          }}
          onMouseLeave={() => {
            const shadow = document.getElementById(`web-img-shadow-${name}`);

            shadow.classList.remove("opacity-100");
            shadow.classList.add("opacity-0");
            shadow.classList.add("-translate-y-[999rem]");
          }}
          key={i}
          className="cursor-pointer h-60 md:h-max xl:h-full xl:min-h-[275px] border-2 border-zinc-700 rounded-lg relative"
        >
          <img src={src} alt={name} className="h-full w-full rounded-lg" />

          <div
            id={`web-img-shadow-${name}`}
            className="opacity-0 -translate-y-[999rem] transition-opacity duration-300 absolute top-0 bottom-0 left-0 right-0 bg-black/70 flex justify-center items-center rounded-lg"
          >
            <h4 className="text-2xl md:text-4xl text-white font-medium">{name}</h4>
          </div>
        </a>
      ))}
    </div>
  );
};

export default WebsitesImages;
