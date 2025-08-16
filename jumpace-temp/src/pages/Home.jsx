import FAQSection from '../Components/FAQSection';
import ContactSection from '../Components/ContactSection';
import feature1 from '../assets/data-research.svg';
import feature2 from '../assets/analysis.svg';
import feature3 from '../assets/planning-strategy.svg';

export default function Home() {
  return (
    <div className="min-h-screen ">
      
      {/* Hero Section */}
      <section 
  className="py-20 md:py-32"
  style={{
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 10a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4zm-20 0a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4zm40 0a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4z' fill='%230052fe' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, #f0f4ff, #e6f0ff)
    `,
    backgroundSize: '80px 80px, 100% 100%',
    backgroundPosition: '-19px -19px, 0 0',
    '@media (min-width: 768px)': {
      backgroundImage: `
        url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 10a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4zm-20 0a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4zm40 0a10 10 0 0 1 0 20v-4a6 6 0 0 0 0-12v-4z' fill='%230052fe' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"),
        linear-gradient(111.57deg, #f0f4ff 18.85%, #e6f0ff 84.72%)
      `
    }
  }}
>
        <div className="container mx-auto px-4 text-center">
          Multiply Your Audience
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Your Business Up To Speed With Jumppace!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Grow with more confidence, agility and a better grip on your business performance metrics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors">
              +1 908 224 3172
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to optimize workflows and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {[1, 2, 3].map((item) => ( */}
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <img src={feature1} className='border-2 border-dashed rounded-xl w-16 h-16 mb-6' alt="" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data research</h3>
                <p className="text-gray-600 mb-4">
                  Gathering the data fromrelevant places to ensure accuracy and reliability.
                </p>
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <img src={feature2} className='border-2 border-dashed rounded-xl w-16 h-16 mb-6' alt="" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Analysing the gathered data andrefine it
                </p>
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <img src={feature3} className='border-2 border-dashed rounded-xl w-16 h-16 mb-6' alt="" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Planning and Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Strategizing the data for the implementation
                </p>
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            {/* ))} */}
          </div>
        </div>
      </section>
      {/* FAQs Section */}
    <div className="min-h-screen">
      {/* ... other sections ... */}
      <FAQSection />
      {/* ... other sections ... */}
    </div>
      
      {/* Testimonials Section */}
      {/* Contact Section */}
      <ContactSection />
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            Join thousands of companies already using our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}