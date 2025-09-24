"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Button from './button';
import { Speaker } from "@/data/data";

interface ISpeakers {
  speakers: Speaker[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

function Speakers({
  speakers,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className
}: ISpeakers) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [filter, setFilter] = useState<string>("All");

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
        direction === "left" ? "forwards" : "reverse",
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
    accent: "bg-accent",
    "chart-1": "bg-chart-1",
    "chart-2": "bg-chart-2",
    "chart-4": "bg-chart-4",
  };

  const filteredSpeakers = filter === "All"
    ? speakers
    : speakers.filter((s) => s.tag.toLowerCase() === filter.toLowerCase());

  return (
    <div className="container flex flex-col max-w-7xl mx-auto pt-10 md:pt-20 z-20">
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex justify-center items-center">
          <Button label='Speakers' className='bg-white py-4 text-lg' />
        </div>
        <div className="my-6">
          <h1 className='text-3xl md:text-4xl font-medium text-center'>
            <strong>Meet Our Speakers</strong>
          </h1>
        </div>
        <div className="text-foreground flex justify-center items-center mx-2">
          <p className='text-center text-lg w-full md:w-3/4'>
            Join us for an exciting DevFest 2025, spanning across two days, dedicated to diving deep into the world of technology and innovation!
          </p>
        </div>

        <div className="flex flex-row my-4 items-center justify-center gap-4 overflow-x-auto">
          <Button
            className={cn("py-2 px-4", filter === "All" ? "bg-accent" : "bg-white")}
            label="All Speakers"
            onClick={() => setFilter("All")}
          />
          <Button
            className={cn("py-2 px-4", filter === "Conference" ? "bg-accent" : "bg-white")}
            label="Conference"
            onClick={() => setFilter("Conference")}
            />
          <Button
            className={cn("py-2 px-4", filter === "Workshop" ? "bg-accent" : "bg-white")}
            label="Workshop"
            onClick={() => setFilter("Workshop")}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className={cn(
          "scroller relative mb-4 overflow-hidden scroller-thin flex flex-nowrap z-50",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 overflow-x-auto",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {filteredSpeakers.map((speaker, idx) => (
            <li key={idx} className="flex h-[488px] w-[375px] items-center justify-center">
              <div className={`relative h-full w-full rounded-2xl border-3 border-${speaker.colour}`}>
                <div className="h-full w-full">
                  <img
                    src={speaker.image}
                    className="h-full rounded-xl w-auto object-cover"
                    alt={speaker.name}
                  />
                </div>
                <div
                  className={`absolute z-10 bottom-1 left-1 flex flex-col rounded-lg ${colourClasses[speaker.colour]} px-4 py-2 w-3/4`}
                >
                  <span className="font-medium">{speaker.name}</span>
                  <small>{speaker.role}</small>
                </div>
                <div className="absolute z-10 top-1 right-1 rounded-lg text-center text-lg bg-white border-1 font-light border-dashed border-gray-300 py-2 w-1/2">
                  {speaker.tag}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Speakers;
