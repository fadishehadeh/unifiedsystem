
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from './types';

interface ServiceTileProps {
  service: ServiceItem;
  isActive: boolean;
  onClick: () => void;
}

const ServiceTile = ({ service, isActive, onClick }: ServiceTileProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-500",
        "hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-qatari focus:ring-offset-2",
        isActive && "ring-2 ring-qatari ring-offset-2"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.backgroundImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className={cn(
        "absolute inset-0",
        "bg-gradient-to-t from-black/90 via-black/60 to-transparent",
        "opacity-80 transition-opacity duration-500"
      )} />

      {/* Content Container - Always Visible */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Top Section with Icon and Title */}
        <div className="flex items-start space-x-4">
          {/* Icon Badge */}
          <div className={cn(
            "flex items-center justify-center",
            "w-12 h-12 rounded-xl",
            "bg-white/10 backdrop-blur-md",
            "border border-white/20",
            "transform transition-all duration-500 group-hover:scale-110"
          )}>
            <service.icon className="h-6 w-6 text-white" />
          </div>

          {/* Title and Description */}
          <div className="flex-1">
            <h3 className={cn(
              "text-xl font-semibold text-white mb-1",
              "transition-transform duration-500 group-hover:translate-x-1"
            )}>
              {service.title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2">
              {service.description}
            </p>
          </div>
        </div>

        {/* Bottom Section with Stats and CTA */}
        <div className="space-y-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(service.stats).map(([key, value], idx) => (
              <div 
                key={idx}
                className={cn(
                  "backdrop-blur-md bg-white/10 rounded-lg p-3",
                  "border border-white/10",
                  "transition-all duration-500",
                  "group-hover:bg-white/15 group-hover:border-white/20"
                )}
              >
                <p className="text-xs text-white/60 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-sm text-white font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            className={cn(
              "w-full bg-white/20 backdrop-blur-md hover:bg-white/30",
              "text-white border border-white/20",
              "transition-all duration-300 group/button"
            )}
          >
            Explore Service
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </div>
      </div>
    </button>
  );
};

export default ServiceTile;
