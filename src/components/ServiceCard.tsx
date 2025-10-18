import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-rose-500/0 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
      
      {icon && (
        <div className="text-primary-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-neutral-800 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <Link 
        to="/booking" 
        className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-all"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};