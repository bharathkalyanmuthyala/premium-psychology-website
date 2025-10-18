import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { BlogCard } from '../components/BlogCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { Heart, CloudLightning, Sparkles, Brain, Leaf, Smile, BadgeHelp, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [stats] = useState([
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Clients Helped' },
    { value: '4.9', label: 'Average Rating' },
    { value: '98%', label: 'Success Rate' }
  ]);

  return (
    <div style={{ backgroundColor: '#f5e6d3' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal delay={0}>
                <h1 className="title-large mb-6">
                  Your Safe Space for Growth and Healing
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <p className="subtitle mb-8 lg:mx-0">
                  In a world that moves fast, taking care of your mind and soul is no longer a luxury - it is essential. Here, psychology meets consciousness to support your journey back to your truest self.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button to="/booking" variant="primary" size="lg">
                    Start Your Journey
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    Explore Services
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={3}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg"
                  alt="Professional psychology consultation"
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                        <div className="text-sm text-neutral-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="title-medium mb-4">Supportive Programs</h2>
              <p className="subtitle mx-auto">
                Each program blends modern psychological science with a deep respect for human experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <ServiceCard
                title="Freedom from Anxiety"
                description="Find calm and resilience through structured anxiety management sessions designed to help you navigate life's challenges with grace."
                icon={<CloudLightning className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <ServiceCard
                title="Healing from Toxic Relationships"
                description="Rebuild your sense of self after difficult emotional experiences and establish healthy boundaries for future relationships."
                icon={<Heart className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <ServiceCard
                title="Emotional Trauma Recovery"
                description="Gentle, informed support for healing deep emotional wounds and integrating past experiences into your present life."
                icon={<Sparkles className="h-10 w-10" />}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={4}>
            <div className="text-center mt-16">
              <Button to="/services" variant="primary">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="title-medium mb-4">Latest Insights</h2>
              <p className="subtitle mx-auto">
                Explore articles designed to nourish your mind and soul, blending modern psychology and deep human wisdom.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <BlogCard 
                title="Why Positive Thinking Is Not Enough"
                excerpt="The trap of toxic positivity and how to build authentic emotional resilience instead."
                imageUrl="https://images.pexels.com/photos/3765034/pexels-photo-3765034.jpeg"
                date="May 12, 2025"
                author="Dr. Sarah Johnson"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <BlogCard 
                title="The Difference Between Healing and Enduring"
                excerpt="Understanding true healing versus coping mechanisms that keep us stuck in patterns of suffering."
                imageUrl="https://images.pexels.com/photos/3771101/pexels-photo-3771101.jpeg"
                date="April 29, 2025"
                author="Dr. Sarah Johnson"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <BlogCard 
                title="Freeing Yourself from Childhood Patterns"
                excerpt="How early experiences shape our adult behaviors and practical steps to create new neural pathways."
                imageUrl="https://images.pexels.com/photos/5699469/pexels-photo-5699469.jpeg"
                date="April 15, 2025"
                author="Dr. Sarah Johnson"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={4}>
            <div className="text-center mt-16">
              <Button to="/blog" variant="primary" className="group">
                Explore More Articles
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="title-medium mb-6 text-white">Ready to Begin Your Healing Journey?</h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards a more conscious, authentic life. Book a session today and discover how psychology and mindfulness can transform your experience.
              </p>
              <Button 
                to="/booking" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Book Your First Session
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;