import React, { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, Heart, Users, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | MindfulPath";
  }, []);

  const handleWhatsAppChat = () => {
    const phoneNumber = '15551234567';
    const message = encodeURIComponent('Hi, I would like to learn more about your psychology services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="title-large mb-6">Let's Connect</h1>
                <p className="subtitle mx-auto">
                  Whether you're ready to start your healing journey or just have questions, I'm here to listen and support you.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ScrollReveal delay={1}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                  <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">Personal Care</h3>
                  <p className="text-neutral-600 text-sm">
                    Every interaction is handled with empathy and professional attention
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                  <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">Quick Response</h3>
                  <p className="text-neutral-600 text-sm">
                    We aim to respond to all inquiries within 24 hours
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={3}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                  <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">Safe Space</h3>
                  <p className="text-neutral-600 text-sm">
                    Your privacy and comfort are our top priorities
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal className="order-2 lg:order-1">
              <h2 className="title-small mb-6">Send a Message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below, and I'll get back to you within 24-48 hours.
              </p>
              <ContactForm />
            </ScrollReveal>
            
            <ScrollReveal delay={2} className="order-1 lg:order-2">
              <div className="bg-neutral-50 rounded-xl p-6 md:p-8 h-full">
                <h2 className="title-small mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Office Location</h3>
                      <p className="text-neutral-600">
                        1234 Healing Avenue, Suite 100<br />
                        San Francisco, CA 94102
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mt-1"
                      >
                        View on map
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Mail className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Email</h3>
                      <a 
                        href="mailto:contact@mindfulpath.com" 
                        className="text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        contact@mindfulpath.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Phone className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Phone & WhatsApp</h3>
                      <div className="space-y-2">
                        <a 
                          href="tel:+15551234567" 
                          className="block text-neutral-600 hover:text-primary-600 transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                        <button
                          onClick={handleWhatsAppChat}
                          className="inline-flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Chat on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-1">Office Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-neutral-200">
                  <h3 className="font-serif text-lg font-bold mb-3">Important Note</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    For emergencies or urgent mental health concerns, please contact your local emergency services, call 988 (National Suicide Prevention Lifeline), or go to your nearest emergency room. This contact form is not monitored 24/7.
                  </p>
                  <p className="text-neutral-600 text-sm mb-0">
                    For quick responses during business hours, consider using our WhatsApp chat feature above.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <ScrollReveal>
            <h2 className="title-medium text-center mb-16">Frequently Asked Questions</h2>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <ScrollReveal delay={1}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-serif text-xl font-bold mb-3">What insurance do you accept?</h3>
                  <p className="text-neutral-600">
                    I am currently an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. I recommend checking with your insurance provider about out-of-network mental health benefits.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={2}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-serif text-xl font-bold mb-3">How quickly can I schedule an appointment?</h3>
                  <p className="text-neutral-600">
                    New clients can typically be scheduled within 1-2 weeks. For urgent situations, I occasionally have same-week openings. Please indicate in your message if you're seeking an appointment soon.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={3}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-serif text-xl font-bold mb-3">Do you offer sliding scale rates?</h3>
                  <p className="text-neutral-600">
                    Yes, I reserve a limited number of sliding scale spots for clients with financial need. Please inquire about availability and qualification when you reach out.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;