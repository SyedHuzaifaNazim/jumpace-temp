import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started with the platform?",
      answer: "You can sign up and get started immediately with our free tier. The onboarding process takes less than 5 minutes, and you'll have access to all core features right away."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 email support for all customers. Enterprise plans include dedicated account management and priority phone support. Our average response time is under 2 hours."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Absolutely. We use bank-level 256-bit encryption, regular security audits, and comply with GDPR and CCPA regulations. Your data is stored in secure AWS facilities with daily backups."
    },
    {
      question: "Can I integrate with other tools I'm using?",
      answer: "Yes! We offer native integrations with over 50 popular tools including Slack, Salesforce, Google Workspace, and Zapier. Our open API also allows for custom integrations."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer a free tier with basic features, plus three paid tiers based on your team size and feature needs. You only pay for active users, and can upgrade or downgrade at any time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the platform. Can't find an answer? 
            <a href="#contact" className="text-blue-600 hover:underline ml-1">Contact us</a>
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left ${
                  activeIndex === index ? 'bg-blue-50' : 'bg-white'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-400'
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={activeIndex !== index}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gray-50 rounded-full py-3 px-6">
            <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="text-gray-700">
              Still have questions? <a href="#contact" className="text-blue-600 font-medium hover:underline">Get in touch</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;