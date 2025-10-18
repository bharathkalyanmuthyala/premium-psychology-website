import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { SearchIcon, Tag } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Why Positive Thinking Is Not Enough",
    excerpt: "The trap of toxic positivity and how to build authentic emotional resilience instead.",
    imageUrl: "https://images.pexels.com/photos/3765034/pexels-photo-3765034.jpeg",
    date: "May 12, 2025",
    author: "Dr. Sarah Johnson",
    category: "Emotional Intelligence",
    tags: ["Mental Health", "Personal Growth", "Authenticity"]
  },
  {
    id: 2,
    title: "The Difference Between Healing and Enduring",
    excerpt: "Understanding true healing versus coping mechanisms that keep us stuck in patterns of suffering.",
    imageUrl: "https://images.pexels.com/photos/3771101/pexels-photo-3771101.jpeg",
    date: "April 29, 2025",
    author: "Dr. Sarah Johnson",
    category: "Healing",
    tags: ["Trauma", "Recovery", "Self-Discovery"]
  },
  {
    id: 3,
    title: "Freeing Yourself from Childhood Patterns",
    excerpt: "How early experiences shape our adult behaviors and practical steps to create new neural pathways.",
    imageUrl: "https://images.pexels.com/photos/5699469/pexels-photo-5699469.jpeg",
    date: "April 15, 2025",
    author: "Dr. Sarah Johnson",
    category: "Inner Child",
    tags: ["Childhood Trauma", "Healing", "Personal Growth"]
  },
  {
    id: 4,
    title: "The Science of Mindfulness",
    excerpt: "Exploring neurological changes in the brain through consistent mindfulness practice and their benefits.",
    imageUrl: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg",
    date: "March 30, 2025",
    author: "Dr. Sarah Johnson",
    category: "Mindfulness",
    tags: ["Meditation", "Neuroscience", "Mental Health"]
  },
  {
    id: 5,
    title: "Recognizing the Signs of Burnout",
    excerpt: "How to identify burnout before it leads to breakdown, and steps to restore your energy and passion.",
    imageUrl: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg",
    date: "March 15, 2025",
    author: "Dr. Sarah Johnson",
    category: "Self-Care",
    tags: ["Work-Life Balance", "Mental Health", "Stress Management"]
  },
  {
    id: 6,
    title: "Building Healthy Relationships",
    excerpt: "The foundations of secure attachment and how to create connections that nourish rather than deplete.",
    imageUrl: "https://images.pexels.com/photos/6774902/pexels-photo-6774902.jpeg",
    date: "February 28, 2025",
    author: "Dr. Sarah Johnson",
    category: "Relationships",
    tags: ["Attachment Theory", "Communication", "Love"]
  },
  {
    id: 7,
    title: "Anxiety in the Digital Age",
    excerpt: "How constant connectivity affects our nervous systems and practical boundaries for digital wellness.",
    imageUrl: "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg",
    date: "February 14, 2025",
    author: "Dr. Sarah Johnson",
    category: "Anxiety",
    tags: ["Digital Wellness", "Mental Health", "Boundaries"]
  },
  {
    id: 8,
    title: "The Power of Self-Compassion",
    excerpt: "Moving beyond self-criticism to develop a kind, supportive relationship with yourself.",
    imageUrl: "https://images.pexels.com/photos/6957649/pexels-photo-6957649.jpeg",
    date: "January 30, 2025",
    author: "Dr. Sarah Johnson",
    category: "Self-Compassion",
    tags: ["Self-Love", "Mental Health", "Personal Growth"]
  },
  {
    id: 9,
    title: "Embracing Life Transitions",
    excerpt: "Finding meaning and growth during major life changes, from career shifts to relationship endings.",
    imageUrl: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg",
    date: "January 15, 2025",
    author: "Dr. Sarah Johnson",
    category: "Growth",
    tags: ["Change", "Resilience", "Personal Development"]
  },
  {
    id: 10,
    title: "Understanding Complex Trauma",
    excerpt: "A deep dive into complex PTSD and the journey toward integration and healing.",
    imageUrl: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    date: "January 1, 2025",
    author: "Dr. Sarah Johnson",
    category: "Trauma",
    tags: ["PTSD", "Healing", "Mental Health"]
  },
  {
    id: 11,
    title: "The Role of Dreams in Healing",
    excerpt: "Exploring how dreamwork can provide insights into our unconscious mind and aid in emotional healing.",
    imageUrl: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg",
    date: "December 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "Dream Work",
    tags: ["Dreams", "Psychology", "Self-Discovery"]
  },
  {
    id: 12,
    title: "Navigating Family Dynamics",
    excerpt: "Tools and insights for understanding and improving complex family relationships.",
    imageUrl: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg",
    date: "December 1, 2024",
    author: "Dr. Sarah Johnson",
    category: "Relationships",
    tags: ["Family", "Communication", "Boundaries"]
  }
];

const categories = [
  "All",
  "Emotional Intelligence",
  "Healing",
  "Inner Child",
  "Mindfulness",
  "Self-Care",
  "Relationships",
  "Anxiety",
  "Self-Compassion",
  "Growth",
  "Trauma",
  "Dream Work"
];

const tags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [showTagsMenu, setShowTagsMenu] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | MindfulPath";
  }, []);
  
  useEffect(() => {
    // Filter posts based on search term, category, and tag
    const filtered = blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, selectedTag]);

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 via-neutral-50 to-secondary-50">
        <div className="container">
          <ScrollReveal>
            <h1 className="title-large text-center mb-6">A Space for Inspiration and Growth</h1>
            <p className="subtitle text-center mx-auto mb-0">
              Explore articles designed to nourish your mind and soul, blending modern psychology and deep human wisdom.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-30 shadow-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <Tag className="h-4 w-4 text-neutral-500 shrink-0" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`whitespace-nowrap px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <button
                  className="px-4 py-2 text-sm bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2"
                  onClick={() => setShowTagsMenu(!showTagsMenu)}
                >
                  <Tag className="h-4 w-4" />
                  Filter by Tag
                </button>
                
                {showTagsMenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 p-4 z-50">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`px-2 py-1 text-xs rounded-full transition-colors ${
                          selectedTag === "All"
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                        onClick={() => {
                          setSelectedTag("All");
                          setShowTagsMenu(false);
                        }}
                      >
                        All Tags
                      </button>
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          className={`px-2 py-1 text-xs rounded-full transition-colors ${
                            selectedTag === tag
                              ? 'bg-primary-600 text-white'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                          onClick={() => {
                            setSelectedTag(tag);
                            setShowTagsMenu(false);
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="section bg-neutral-50">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index % 3}>
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                    date={post.date}
                    author={post.author}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-serif text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTag("All");
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="title-medium mb-4">Subscribe to Our Newsletter</h2>
              <p className="subtitle mx-auto mb-8">
                Receive monthly insights, resources, and tips to support your well-being journey.
              </p>
              
              <form className="mx-auto max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow form-input"
                    required
                  />
                  <button type="submit" className="btn btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;