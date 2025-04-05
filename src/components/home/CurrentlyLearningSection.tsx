import { FiBookOpen } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { SiWebassembly, SiRust, SiSolidity, SiTensorflow, SiKubernetes, SiAmazon } from "react-icons/si";

// Create a custom GradientBorderCard component since the import doesn't exist
const GradientBorderCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">{children}</div>
    </div>
  );
};

const CurrentlyLearningSection = () => {
  const learningItems = [
    {
      icon: <SiRust className="text-orange-400 text-3xl" />,
      name: "Rust",
      description: "Learning systems programming with Rust for high-performance applications",
      progress: 35,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <SiWebassembly className="text-purple-400 text-3xl" />,
      name: "WebAssembly",
      description: "Exploring WebAssembly for near-native performance in web applications",
      progress: 40,
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <SiTensorflow className="text-yellow-400 text-3xl" />,
      name: "Machine Learning",
      description: "Studying ML fundamentals and implementing models with TensorFlow",
      progress: 30,
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <SiKubernetes className="text-blue-400 text-3xl" />,
      name: "Kubernetes",
      description: "Containerizing applications and implementing deployment strategies",
      progress: 45,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <SiSolidity className="text-gray-400 text-3xl" />,
      name: "Blockchain",
      description: "Building smart contracts with Solidity and exploring Web3 technologies",
      progress: 25,
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <SiAmazon className="text-orange-400 text-3xl" />,
      name: "AWS Cloud",
      description: "Gaining expertise in cloud architecture and serverless computing",
      progress: 50,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle grid and gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="bg-blue-900/30 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium">
              EXPANDING KNOWLEDGE
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Currently Learning</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm constantly expanding my skills by exploring these emerging technologies.
            Follow my journey as I build expertise in these cutting-edge areas.
          </p>
        </div>
        
        {/* Learning cards with progress indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, index) => (
            <GradientBorderCard key={index} className="h-full">
              <div className="bg-black p-6 rounded-xl h-full">
                <div className="flex flex-col h-full">
                  {/* Icon with gradient background */}
                  <div className="mb-6 flex-shrink-0">
                    <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 w-16 h-16 flex items-center justify-center shadow-inner">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  </div>
                  
                  {/* Progress section */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-blue-400 text-sm">
                        <FiBookOpen className="mr-1" />
                        <span>Learning Progress</span>
                      </div>
                      <span className="text-white text-sm font-medium">{item.progress}%</span>
                    </div>
                    
                    {/* Progress bar with animation */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ 
                          width: `${item.progress}%`,
                          transition: "width 1.5s ease-in-out"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </GradientBorderCard>
          ))}
        </div>
        
        {/* Learning statistics */}
        <div className="mt-16 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800/50 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/tech-pattern.png')] bg-repeat opacity-[0.03]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <GoGraph className="text-2xl text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Learning Stats</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I dedicate significant time to learning new technologies and improving my skills.
                  Here's a snapshot of my ongoing learning journey.
                </p>
                
                <a 
                  href="/learning-path" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span>View my complete learning roadmap</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl font-bold text-white mb-2">12+</div>
                  <div className="text-gray-400">Hours/week on learning</div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400">Current focus areas</div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl font-bold text-white mb-2">4</div>
                  <div className="text-gray-400">Learning projects</div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl font-bold text-white mb-2">8+</div>
                  <div className="text-gray-400">Technical courses completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearningSection;
