'use client';

import React, { useState } from 'react';
import { Typography, Container } from '@/components/ui';
import { ContactForm, ProjectInquiryForm } from '@/components/forms';
import { ContactInfo, AvailabilityCalendar } from '@/components/contact';
import { ContactFormData, ProjectInquiryData } from '@/lib/validations';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'project'>('contact');

  const handleContactSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // In a real app, this would send to an API
  };

  const handleProjectSubmit = (data: ProjectInquiryData) => {
    console.log('Project inquiry submitted:', data);
    // In a real app, this would send to an API
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-terracotta-50 to-cream-100">
        <Container size="lg" padding="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Typography variant="h1" className="mb-4">
              Let's Create Something Beautiful Together
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-8">
              Whether you're planning a cultural documentation project, need travel photography, 
              or want to license existing work, I'm here to help bring your vision to life.
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto"></div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <Container size="lg" padding="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-charcoal-100 p-1 rounded-lg mb-8">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'contact'
                      ? 'bg-warm-white text-charcoal-800 shadow-soft'
                      : 'text-charcoal-600 hover:text-charcoal-800'
                  }`}
                >
                  General Contact
                </button>
                <button
                  onClick={() => setActiveTab('project')}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'project'
                      ? 'bg-warm-white text-charcoal-800 shadow-soft'
                      : 'text-charcoal-600 hover:text-charcoal-800'
                  }`}
                >
                  Project Inquiry
                </button>
              </div>

              {/* Form Content */}
              <div className="bg-warm-white border border-charcoal-200 rounded-xl p-8">
                {activeTab === 'contact' ? (
                  <div>
                    <Typography variant="h3" className="mb-2">
                      Send a Message
                    </Typography>
                    <Typography variant="body" className="text-charcoal-600 mb-8">
                      Have a question or want to say hello? I'd love to hear from you.
                    </Typography>
                    <ContactForm onSubmit={handleContactSubmit} />
                  </div>
                ) : (
                  <div>
                    <Typography variant="h3" className="mb-2">
                      Project Inquiry
                    </Typography>
                    <Typography variant="body" className="text-charcoal-600 mb-8">
                      Ready to discuss a photography project? Please provide details about your vision.
                    </Typography>
                    <ProjectInquiryForm onSubmit={handleProjectSubmit} />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-warm-white border border-charcoal-200 rounded-xl p-6">
                <ContactInfo />
              </div>
              
              <div className="bg-warm-white border border-charcoal-200 rounded-xl p-6">
                <AvailabilityCalendar />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-50">
        <Container size="lg" padding="lg">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Frequently Asked Questions
            </Typography>
            <Typography variant="lead" className="text-charcoal-600">
              Common questions about working together
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <Typography variant="h4" className="mb-2 text-terracotta-600">
                  What's your typical turnaround time?
                </Typography>
                <Typography variant="body" className="text-charcoal-600">
                  For travel and cultural projects, I typically deliver edited galleries within 2-3 weeks. 
                  Rush delivery is available for an additional fee.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" className="mb-2 text-terracotta-600">
                  Do you travel internationally?
                </Typography>
                <Typography variant="body" className="text-charcoal-600">
                  Absolutely! I specialize in international cultural documentation and have worked 
                  across 40+ countries. Travel expenses are typically covered by the client.
                </Typography>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Typography variant="h4" className="mb-2 text-terracotta-600">
                  What's included in your packages?
                </Typography>
                <Typography variant="body" className="text-charcoal-600">
                  All packages include professional editing, high-resolution files, and usage rights. 
                  Specific deliverables vary by project type and budget.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" className="mb-2 text-terracotta-600">
                  How far in advance should I book?
                </Typography>
                <Typography variant="body" className="text-charcoal-600">
                  I recommend booking 2-3 months in advance, especially for travel projects. 
                  However, I can sometimes accommodate last-minute requests.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}