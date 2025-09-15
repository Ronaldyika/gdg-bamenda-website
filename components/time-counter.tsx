"use client";
import { useState, useEffect } from "react";

function CountDownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        // Set target date for DevFest 2025 (November 28, 2025)
        const targetDate = new Date("2025-11-28T00:00:00").getTime();
    
        const timer = setInterval(() => {
          const now = new Date().getTime();
          const difference = targetDate - now;
    
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          }
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const formatNumber = (num: number) => num.toString().padStart(2, "0");
    
      return (
        <section className="my-5 mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-8">
              <div className="flex gap-2 text-5xl font-digital text-muted-foreground">
                <div className="text-center relative">
                  {formatNumber(timeLeft.days)}
                  <div className="absolute bottom-[-10px] right-[-15px] text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                    D
                  </div>
                </div>
                <span>:</span>
                <div className="text-center relative">
                  {formatNumber(timeLeft.hours)}
                  <div className="absolute bottom-[-10px] right-[-15px] text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                    H
                  </div>
                </div>
                <span>:</span>
                <div className="text-center relative">
                  {formatNumber(timeLeft.minutes)}
                  <div className="absolute bottom-[-10px] right-[-15px] text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                    M
                  </div>
                </div>
                <span>:</span>
                <div className="text-center relative">
                  {formatNumber(timeLeft.seconds)}
                  <div className="absolute bottom-[-10px] right-[-15px] text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                    S
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default CountDownTimer;