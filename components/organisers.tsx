"use client";

import { useState, useRef, useEffect } from "react";
import Button from "./button";
import { Organizer } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IOrganizers {
  organizers: Organizer[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

function Organisers({
  organizers,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: IOrganizers) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      if (speed === "slow") duration = "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const colourClasses: Record<string, string> = {
    accent: "border-accent",
    "chart-1": "border-chart-1",
    "chart-2": "border-chart-2",
    "chart-4": "border-chart-4",
  };

  return (
    <div className="container flex flex-col max-w-7xl mx-auto pt-10 md:pt-20 z-20">
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex justify-center items-center">
          <Button
            label="Organizers & Volunteers"
            className="bg-white py-4 text-lg"
          />
        </div>
        <div className="my-6">
          <h1 className="text-3xl md:text-4xl font-medium text-center">
            <strong>The Organizing Team</strong>
          </h1>
        </div>
        <div className="text-foreground flex justify-center items-center mb-5 mx-2">
          <p className="text-center text-lg w-full md:w-3/4">
            Meet the dedicated volunteers who are working tirelessly to make
            DevFest Bamenda 2025 a success. This passionate team from GDG
            Bamenda is committed to creating a vibrant and impactful event for
            everyone.
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className={cn(
          "scroller mt-10 relative mb-4 mx-4 md:mx-6 flex flex-nowrap z-50",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {organizers.map((organizer, idx) => (
            <li key={idx} className="flex h-[488px] w-[350px] md:w-[375px] items-center justify-center">
              <div className={`relative h-full w-full rounded-2xl border-3 ${colourClasses[organizer.colour]}`}>
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={organizer.image}
                    className="h-full w-full rounded-xl object-cover"
                    alt={organizer.name}
                  />
                </div>
                <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 w-5/6">
                  <div className="flex flex-col px-6 py-2 rounded-full flex-grow bg-white">
                    <span className="font-medium  w-full truncate">
                      {organizer.name}
                    </span>
                    <small>{organizer.role}</small>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                      <Link href={organizer.socials.x}>
                        <img
                            src="/icons/x.svg"
                            className="h-full w-full rounded-xl object-cover"
                            alt="X"
                        />
                      </Link>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                      <Link href={organizer.socials.linkedin}>
                        <img
                            src="/icons/linkedin.svg"
                            className="h-full w-full rounded-xl object-cover"
                            alt="X"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Organisers;
