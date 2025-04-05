import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800/30 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/tech-pattern.png')] bg-repeat opacity-[0.04]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you need a modern web application, a robust backend system, or a complete digital solution,
              let's collaborate to create something amazing together.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:from-teal-500 hover:to-cyan-500"
              >
                Get in Touch
              </Link>
              <Link 
                href="/projects" 
                className="px-8 py-3 bg-transparent border border-gray-700 text-white rounded-full font-medium transition-all duration-300 hover:border-teal-500/50 hover:bg-black hover:shadow-glow"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
