import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { CloudLightning, Heart, Sparkles, Brain, Smile, Leaf, Clock, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | MindfulPath";
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
            alt="Peaceful therapy session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-center mb-6">
              Supportive Programs for Your Journey
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-center mx-auto mb-0 max-w-2xl">
              Each program blends modern psychological science with a deep respect for your unique human experience
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {/* Freedom from Anxiety */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-primary-50 p-3 inline-flex rounded-lg mb-4">
                    <CloudLightning className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="title-small mb-4">Freedom from Anxiety</h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Find calm and resilience through structured anxiety management sessions designed to help you navigate life's challenges with grace. This program combines evidence-based cognitive behavioral techniques with mindfulness practices to help you:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Identify and transform anxiety triggers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Develop practical tools for managing anxious thoughts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Create a personalized calm-down protocol for acute anxiety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Build a lifestyle that naturally reduces anxiety</span>
                    </li>
                  </ul>
                  <Button to="/booking" variant="primary">
                    Book This Program
                  </Button>
                </div>
                <div className="order-1 md:order-2 aspect-w-4 aspect-h-3 md:aspect-w-1 md:aspect-h-1">
                  <img 
                    src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" 
                    alt="Woman practicing mindfulness for anxiety relief" 
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            {/* Healing from Toxic Relationships */}
            <ScrollReveal delay={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="bg-primary-50 p-3 inline-flex rounded-lg mb-4">
                    <Heart className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="title-small mb-4">Healing from Toxic Relationships</h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Rebuild your sense of self after difficult emotional experiences and establish healthy boundaries for future relationships. This healing-focused program helps you:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Recognize patterns of unhealthy relationship dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Process emotional wounds from past relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Establish and maintain healthy boundaries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Build self-trust for healthier future connections</span>
                    </li>
                  </ul>
                  <Button to="/booking" variant="primary">
                    Book This Program
                  </Button>
                </div>
                <div className="md:order-1 aspect-w-4 aspect-h-3 md:aspect-w-1 md:aspect-h-1">
                  <img 
                    src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg" 
                    alt="Person reflecting near a window" 
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            {/* Emotional Trauma Recovery */}
            <ScrollReveal delay={2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-primary-50 p-3 inline-flex rounded-lg mb-4">
                    <Sparkles className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="title-small mb-4">Emotional Trauma Recovery</h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Gentle, informed support for healing deep emotional wounds and integrating past experiences into your present life. This trauma-informed approach provides:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Safety-focused therapeutic techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Somatic (body-based) approaches to processing trauma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Integration of fragmented experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                      <span className="text-neutral-700">Building resilience and post-traumatic growth</span>
                    </li>
                  </ul>
                  <Button to="/booking" variant="primary">
                    Book This Program
                  </Button>
                </div>
                <div className="order-1 md:order-2 aspect-w-4 aspect-h-3 md:aspect-w-1 md:aspect-h-1">
                  <img 
                    src="https://images.pexels.com/photos/5699464/pexels-photo-5699464.jpeg" 
                    alt="Peaceful nature setting for emotional healing" 
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Additional Services Grid */}
      <section className="section bg-neutral-50">
        <div className="container">
          <ScrollReveal>
            <h2 className="title-medium text-center mb-4">Additional Specialized Programs</h2>
            <p className="subtitle text-center mx-auto mb-16">
              Tailored approaches to address specific needs on your journey to wholeness.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <ServiceCard
                title="Rooted Confidence"
                description="Strengthen self-trust and authentic self-expression through evidence-based techniques and mindful practices that build lasting confidence from within."
                icon={<Brain className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <ServiceCard
                title="Inner Child Awakening"
                description="Heal childhood patterns and reconnect with your inner joy through specialized therapeutic approaches that address early life experiences."
                icon={<Smile className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <ServiceCard
                title="Mindful Living"
                description="Cultivate presence, reduce stress, and live consciously through practical mindfulness skills for everyday life that transform your experience."
                icon={<Leaf className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={4}>
              <ServiceCard
                title="Embrace Change"
                description="Personalized support during major life transitions, helping you navigate uncertainty with grace and find opportunity in life's shifting landscapes."
                icon={<Clock className="h-10 w-10" />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={5} className="md:col-span-2 lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold mb-4 text-neutral-800">
                  Personalized Consultation
                </h3>
                <p className="text-neutral-600 mb-6">
                  Not sure which program is right for you? Schedule a complimentary 20-minute consultation call to discuss your unique needs and find the best approach for your healing journey.
                </p>
                <Button to="/contact" variant="outline" className="inline-flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal>
            <h2 className="title-medium text-center mb-4">What to Expect</h2>
            <p className="subtitle text-center mx-auto mb-16">
              Understanding our therapeutic process can help you feel prepared and comfortable.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <div className="text-center px-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Initial Consultation</h3>
                <p className="text-neutral-600">
                  We begin with a thorough assessment of your needs, history, and goals to create a personalized approach.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <div className="text-center px-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Customized Program</h3>
                <p className="text-neutral-600">
                  Together, we develop a tailored program that addresses your specific needs with research-backed methods.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <div className="text-center px-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-neutral-600">
                  Regular sessions provide consistent support, with adjustments as needed to ensure progress toward your goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="title-medium mb-6 text-white">Ready to Begin Your Healing Journey?</h2>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards a more conscious, authentic life. Book a session today and discover how psychology and mindfulness can transform your experience.
              </p>
              <Button 
                to="/booking" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
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

export default Services;