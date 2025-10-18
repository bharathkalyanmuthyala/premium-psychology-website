import React, { useEffect } from 'react';
import { BookingForm } from '../components/BookingForm';
import { ScrollReveal } from '../components/ScrollReveal';
import { Calendar, Clock, CheckCircle, MessageSquare, CreditCard, Lock } from 'lucide-react';

const services = [
  {
    name: 'Initial Consultation',
    price: 150,
    duration: '60 minutes',
    description: 'A comprehensive first session to understand your needs and create a personalized treatment plan.',
  },
  {
    name: 'Individual Therapy Session',
    price: 120,
    duration: '50 minutes',
    description: 'One-on-one therapy session focused on your specific needs and goals.',
  },
  {
    name: 'Couples Therapy Session',
    price: 150,
    duration: '75 minutes',
    description: 'Guided session for couples to improve communication and strengthen their relationship.',
  },
  {
    name: 'Group Therapy Session',
    price: 80,
    duration: '90 minutes',
    description: 'Supportive group environment to share experiences and learn from others.',
  }
];

const Booking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Session | MindfulPath";
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg"
            alt="Peaceful counseling environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-rose-900/80 to-teal-900/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-center mb-6">
                Reserve Your Safe Space
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-center mx-auto mb-8">
                Take the first step towards deeper self-connection and conscious living. Your journey to healing begins here.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-center flex-1 max-w-xs">
                  <Calendar className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-medium">Flexible Scheduling</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-center flex-1 max-w-xs">
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-medium">Online & In-Person</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-center flex-1 max-w-xs">
                  <Lock className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-medium">Secure & Private</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white border-b border-neutral-100">
        <div className="container">
          <ScrollReveal>
            <h2 className="title-medium text-center mb-4">Session Options</h2>
            <p className="subtitle text-center mx-auto mb-16">
              Choose the session type that best fits your needs. All sessions include personalized care and follow-up support.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.name} delay={index}>
                <div className="bg-white rounded-xl p-6 border-2 border-neutral-100 hover:border-indigo-300 transition-colors">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold mb-2">{service.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-indigo-600">${service.price}</span>
                      <span className="text-neutral-500 ml-2">/ session</span>
                    </div>
                    <p className="text-neutral-600 text-sm">{service.duration}</p>
                  </div>
                  <p className="text-neutral-600 text-sm mb-6">{service.description}</p>
                  <button 
                    className="w-full btn btn-primary"
                    onClick={() => {
                      // Stripe integration will be added here
                      alert('Stripe integration coming soon!');
                    }}
                  >
                    <CreditCard className="h-4 w-4" />
                    Book Now
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={5}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-neutral-600 text-sm">
                <Lock className="h-4 w-4" />
                Secure payment powered by Stripe
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ScrollReveal className="lg:col-span-7">
              <BookingForm />
            </ScrollReveal>
            
            <ScrollReveal delay={2} className="lg:col-span-5">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold mb-6">What to Expect</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Scheduling</h3>
                      <p className="text-neutral-600 text-sm">
                        After submitting your booking request, you'll receive a confirmation email within 24 hours with available times and further instructions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Session Length</h3>
                      <p className="text-neutral-600 text-sm">
                        Initial consultations last 60 minutes to allow time for comprehensive assessment. Regular sessions are 50 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Preparation</h3>
                      <p className="text-neutral-600 text-sm">
                        No special preparation is needed. Come as you are, with an open mind and willingness to explore. You may want to be in a private, quiet space for online sessions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Questions?</h3>
                      <p className="text-neutral-600 text-sm">
                        If you have any questions before booking, please visit our <a href="/contact" className="text-primary-600 hover:text-primary-700 transition-colors">contact page</a> or email directly at contact@mindfulpath.com.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="font-serif text-lg font-bold mb-3">In-Person & Online Sessions</h3>
                  <p className="text-neutral-600 mb-4">
                    Sessions are available both in-person at our tranquil office space and via secure video conferencing for clients who prefer online therapy.
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700 italic font-serif text-sm">
                      "The journey of a thousand miles begins with a single step. Booking your first session is that courageous first step."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal>
            <h2 className="title-medium text-center mb-16">Client Experiences</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-500">★</span>
                  ))}
                </div>
                <p className="text-neutral-600 italic mb-6">
                  "The booking process was seamless, and Dr. Johnson made me feel so comfortable from our very first session. I've made more progress in three months than I had in years of trying to work through things on my own."
                </p>
                <div className="font-medium">Alex T.</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-500">★</span>
                  ))}
                </div>
                <p className="text-neutral-600 italic mb-6">
                  "I was nervous about starting therapy, but the online booking system made it easy to take that first step. The clarity and peace I've found through our sessions has been life-changing."
                </p>
                <div className="font-medium">Jamie R.</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-500">★</span>
                  ))}
                </div>
                <p className="text-neutral-600 italic mb-6">
                  "Having the flexibility to book both online and in-person sessions has been incredibly helpful with my busy schedule. The warm, professional atmosphere makes every session productive."
                </p>
                <div className="font-medium">Taylor M.</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;