import logo from '../assets/logo-1.webp';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} className=" border-dashed rounded-xl  " />
              
            </div>
            <p className="text-gray-400 mb-6">
              Accelerating digital transformation for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'github'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="bg-gray-700 w-10 h-10 rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {['Product', 'Resources', 'Company', 'Legal'].map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {category} Link {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} JumpPace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}