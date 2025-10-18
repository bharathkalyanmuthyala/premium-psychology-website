import React from 'react';
import { Link } from 'react-router-dom';

type BlogCardProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  delay?: number;
};

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  imageUrl, 
  date, 
  author,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 text-sm text-neutral-500">
          {date} · by {author}
        </div>
        <h3 className="font-serif text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
          <Link to="/blog">{title}</Link>
        </h3>
        <p className="text-neutral-600 mb-4 flex-grow">
          {excerpt}
        </p>
        <Link 
          to="/blog" 
          className="mt-auto text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};