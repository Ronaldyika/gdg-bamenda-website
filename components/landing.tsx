"use client";
import { useState, useRef, useEffect } from "react";

// Tech tags data
const techTags = [
    { id: 1, text: "Hackathon", color: "bg-[#EEEFEF]" },
    { id: 2, text: "AI Enthusiast", color: "bg-[#CCF6C5]" },
    { id: 3, text: "Web3 Enthusiasts", color: "bg-[#F8D8D8]" },
    { id: 4, text: "Cybersecurity", color: "bg-[#57CAFF]" },
    { id: 5, text: "AI Developers", color: "bg-[#CCF6C5]" },
    { id: 6, text: "Gemini", color: "bg-[#FFD427]" },
    { id: 7, text: "+ more", color: "bg-[#C3ECF6]" },
    { id: 8, text: "Firebase studio", color: "bg-[#57CAFF]" },
    { id: 9, text: "Product Designers", color: "bg-[#FFE7A5]" },
    { id: 10, text: "Cloud", color: "bg-[#FF7DAF]" },
    { id: 11, text: "Brand Designers", color: "bg-[#F8D8D8]" },
    { id: 12, text: "Web", color: "bg-[#5CDB6D]" },
    { id: 13, text: "Mobile", color: "bg-[#FFD427]" },
    { id: 14, text: "AI Enthusiast", color: "bg-[#C3ECF6]" },
    { id: 15, text: "Developers", color: "bg-[#EEEFEF]" },
    { id: 16, text: "VR & AR", color: "bg-[#FFE7A5]" },
    { id: 17, text: "Developers", color: "bg-[#EEEFEF]" },
    { id: 18, text: "Techies", color: "bg-[#CCF6C5]" },
    { id: 19, text: "Vibe coding", color: "bg-[#FF7DAF]" },
    { id: 20, text: "AI/ML", color: "bg-[#5CDB6D]" },
  ];
  
  // Animated Tags Component for Large Screens
export  function AnimatedTags() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [tags, setTags] = useState<Array<{
      id: number;
      text: string;
      color: string;
      x: number;
      y: number;
      rotation: number;
      isDragging: boolean;
      hasFallen: boolean;
      isFalling: boolean;
      stackLevel: number;
    }>>([]);
    const containerRef = useRef<HTMLDivElement>(null);
  
    // Function to calculate ground position (bottom of container)
    const getGroundPosition = (x: number) => {
      // Create a more natural ground line with slight variations
      const baseGround = 85; // Base ground level at 85% from top
      const variation = Math.sin(x * 0.1) * 3; // Add slight wave to ground
      return baseGround + variation;
    };
  
    // Function to calculate stack position for a tag
    const getStackPosition = (x: number, currentTags: typeof tags) => {
      const baseGround = getGroundPosition(x);
      
      // Find how many tags are already at this X position (within a range)
      const nearbyTags = currentTags.filter(tag => 
        tag.hasFallen && 
        !tag.isDragging && 
        Math.abs(tag.x - x) < 8 // Within 8% of this position
      );
      
      // Calculate stack level (how many tags are below this one)
      const stackLevel = nearbyTags.length;
      
      // Each stack level adds about 4% height
      const stackHeight = stackLevel * 4;
      
      return {
        y: baseGround - stackHeight,
        stackLevel: stackLevel
      };
    };
  
    useEffect(() => {
      // Initialize tags with random starting positions at the top
      const initialTags = techTags.map((tag, index) => ({
        ...tag,
        x: Math.random() * 80 + 10, // Random horizontal position
        y: -20 - (index * 5), // Start above container, staggered
        rotation: (Math.random() - 0.5) * 30, // More rotation variation
        isDragging: false,
        hasFallen: false,
        isFalling: false,
        stackLevel: 0,
      }));
      setTags(initialTags);
  
      // Trigger falling animation after component mounts
      const timer = setTimeout(() => {
        setIsLoaded(true);
        
        // Start falling animation for each tag with staggered delays
        initialTags.forEach((tag, index) => {
          setTimeout(() => {
            // First, mark as falling
            setTags(prev => prev.map(t => 
              t.id === tag.id ? { ...t, isFalling: true } : t
            ));
  
            // Then after a short delay, make it fall to ground
            setTimeout(() => {
              setTags(prev => {
                const stackPos = getStackPosition(tag.x, prev);
                return prev.map(t => 
                  t.id === tag.id 
                    ? { 
                        ...t, 
                        y: stackPos.y,
                        hasFallen: true,
                        isFalling: false,
                        stackLevel: stackPos.stackLevel,
                        rotation: (Math.random() - 0.5) * 15 // Less rotation when settled
                      } 
                    : t
                );
              });
            }, 200); // Small delay to show falling state
          }, index * 200); // Stagger the falling animation
        });
      }, 300);
      
      return () => clearTimeout(timer);
    }, []);
  
    const handleMouseDown = (e: React.MouseEvent, tagId: number) => {
      e.preventDefault();
      const startX = e.clientX;
      const startY = e.clientY;
      
      // Update tag to dragging state
      setTags(prev => prev.map(tag => 
        tag.id === tagId ? { ...tag, isDragging: true } : tag
      ));
  
      const handleMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        setTags(prev => prev.map(tag => {
          if (tag.id === tagId) {
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;
            const newX = Math.max(0, Math.min(100, tag.x + (deltaX / containerWidth) * 100));
            const newY = Math.max(0, Math.min(100, tag.y + (deltaY / containerHeight) * 100));
            return { ...tag, x: newX, y: newY };
          }
          return tag;
        }));
      };
  
      const handleMouseUp = () => {
        setTags(prev => {
          const draggedTag = prev.find(tag => tag.id === tagId);
          if (!draggedTag) return prev;
          
          const stackPos = getStackPosition(draggedTag.x, prev);
          return prev.map(tag => {
            if (tag.id === tagId) {
              return { 
                ...tag, 
                isDragging: false,
                y: stackPos.y,
                stackLevel: stackPos.stackLevel,
                rotation: (Math.random() - 0.5) * 15, // Random rotation when falling
                hasFallen: true
              };
            }
            return tag;
          });
        });
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    return (
      <div 
        ref={containerRef}
        className="absolute inset-0 z-50 hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full">
            {tags.map((tag, index) => (
              <div
                key={tag.id}
                className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                } ${tag.isDragging ? 'scale-110' : 'hover:scale-105'}`}
                style={{
                  left: `${tag.x}%`,
                  top: `${tag.y}%`,
                  transform: `translate(-50%, -50%) rotate(${tag.rotation}deg)`,
                  zIndex: tag.isDragging ? 1000 : 10 + tag.stackLevel, // Higher z-index for higher stack levels
                  transition: tag.isDragging 
                    ? 'none' 
                    : tag.isFalling
                      ? 'all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)' // Fast falling
                      : tag.hasFallen 
                        ? 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Smooth settling
                        : 'all 0.3s ease-out',
                  transitionDelay: tag.hasFallen ? '0ms' : `${index * 50}ms`,
                }}
                onMouseDown={(e) => handleMouseDown(e, tag.id)}
              >
                <div className={`font-bold text-base sm:text-sm lg:text-[16px] ${tag.color} rounded-full hover:cursor-grab px-3.5 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3.5 border-black border-2 text-[#1E1E1E] cursor-grab transition-all duration-200 shadow-lg hover:shadow-xl`}>
                  {tag.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Mobile Scrolling Tags Component
 export function MobileScrollingTags() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;
  
      let scrollPosition = 0;
      const scrollSpeed = 0.8; // pixels per frame
  
      const animate = () => {
        if (!isPaused) {
          scrollPosition += scrollSpeed;
          scrollElement.scrollLeft = scrollPosition;
          
          // Reset scroll position when it reaches the end
          if (scrollPosition >= scrollElement.scrollWidth / 2) {
            scrollPosition = 0;
          }
        }
        
        requestAnimationFrame(animate);
      };
  
      animate();
    }, [isPaused]);
  
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
  
    return (
      <div 
        className="w-full overflow-hidden py-4 flex md:hidden" 
        id="tag-scroller"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={scrollRef} 
          className="flex gap-4 w-max scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate the tags for seamless scrolling */}
          {[...techTags, ...techTags].map((tag, index) => (
            <span
              key={`${tag.id}-${index}`}
              className={`font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-full border-black border-2 text-[#1E1E1E] px-6 py-3 whitespace-nowrap ${tag.color} transition-transform duration-200 hover:scale-105`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    );
  }