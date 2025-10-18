import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | MindfulPath";
  }, []);

  return (
    <div style={{ backgroundColor: '#f5e6d3' }}>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <ScrollReveal>
            <h1 className="title-large text-center mb-6">A Journey Between Science and Heart</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" 
                    alt="Professional psychologist portrait" 
                    className="object-cover w-full h-full rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-100 w-48 h-48 rounded-full -z-10"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[200px]">
                  <p className="text-sm font-serif italic text-indigo-600">
                    "Every person carries within them the capacity for profound transformation."
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <div>
                <h2 className="title-small mb-6">My name is Dr. Sarah Johnson</h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  I am a licensed psychologist who believes that true healing happens when science meets inner wisdom. With over 15 years of experience, I've dedicated my career to helping people overcome emotional obstacles and reconnect with their authentic selves.
                </p>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  My approach combines evidence-based psychological methods with mindfulness practices, creating a holistic framework that addresses both the mind and the spirit. This integration allows for deeper, more sustainable healing that honors your unique story.
                </p>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  In this space, you are not a number or a case; you are a unique story - worthy of being heard and lived with courage and truth.
                </p>
                <Button to="/booking" variant="primary">
                  Book a Session
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="title-medium mb-4">Education & Credentials</h2>
              <p className="subtitle mx-auto">
                My professional training combines traditional psychology with integrative approaches to mental wellness.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={1}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Education</h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>Ph.D. in Clinical Psychology, Stanford University</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>M.A. in Psychology, University of California</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>B.A. in Psychology, Columbia University</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>Advanced Training in Mindfulness-Based Cognitive Therapy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Certifications & Licenses</h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>Licensed Clinical Psychologist (License #12345)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>Certified EMDR Practitioner</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>Certified in Cognitive Behavioral Therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 inline-flex items-center justify-center bg-primary-100 rounded-full text-primary-700 text-xs mr-2 mt-1">•</span>
                        <span>American Psychological Association Member</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal delay={0} className="lg:col-span-3">
              <h2 className="title-medium mb-6">My Therapeutic Philosophy</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                I believe that each person contains within them the wisdom needed for their own healing. My role is to create a safe container where that wisdom can emerge, and to provide evidence-based tools that support your unique journey.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Rather than focusing solely on symptom reduction, I aim to help you understand the root causes of your challenges. This approach creates lasting transformation instead of temporary relief.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                The relationship between therapist and client is sacred. I honor your courage in sharing your story and commit to meeting you with empathy, acceptance, and professional guidance.
              </p>
              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold mb-4">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Heart className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-medium">Compassion</span>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Users className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-medium">Connection</span>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Award className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-medium">Integrity</span>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-medium">Growth</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={3} className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-xl">
                <h3 className="font-serif text-xl font-bold mb-4">A Personal Note</h3>
                <p className="text-neutral-600 mb-6 italic">
                  "My journey into psychology began when I discovered how understanding the mind could illuminate the path to healing. Through my own challenges and growth, I've learned that our wounds often contain our greatest gifts."
                </p>
                <p className="text-neutral-600 mb-6 italic">
                  "I believe that therapy should be a space where science meets soul—where we can honor both the measurable aspects of healing and the profound mystery of human consciousness."
                </p>
                <p className="text-neutral-600 italic">
                  "It would be my privilege to accompany you on your journey toward wholeness."
                </p>
                <div className="mt-6 flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/5699464/pexels-photo-5699464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dr. Sarah Johnson signature" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-serif font-bold">Dr. Sarah Johnson</p>
                    <p className="text-sm text-neutral-500">Clinical Psychologist</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="title-medium mb-6 text-white">Begin Your Healing Journey Today</h2>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                I'm honored to be considered as a guide on your path to healing and self-discovery. Let's take the first step together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  to="/booking" 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Book a Session
                </Button>
                <Button 
                  to="/contact" 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-neutral-100"
                >
                  Contact Me
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;