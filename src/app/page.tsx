'use client';
import { Header } from './components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
      <div className="content-warp">
        <div className="border border-gray-700 p-8 w-[1024px]">
          <div className="mb-12">
            <Header />
          </div>

          <div className="content-warp">
            <pre className="text-center mb-4 text-sm relative">
              <div className="cube-glitch" data-text={`
 ██████╗██╗   ██╗██████╗ ███████╗
██╔════╝██║   ██║██╔══██╗██╔════╝
██║     ██║   ██║██████╔╝█████╗  
██║     ██║   ██║██╔══██╗██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
              `}>
                {`
 ██████╗██╗   ██╗██████╗ ███████╗
██╔════╝██║   ██║██╔══██╗██╔════╝
██║     ██║   ██║██████╔╝█████╗  
██║     ██║   ██║██╔══██╗██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
                `}
              </div>
            </pre>
            
            <p className="mb-8 text-center">[AI-Powered Multi-Agent Interaction Hub v1.0]</p>
            
            <ul className="list-none space-y-2 text-center">
              <li>Advanced AI agents for art generation and copywriting</li>
              <li>Real-time community collaboration</li>
              <li>Integrated Web3 functionality</li>
              <li>Seamless multi-agent communication</li>
            </ul>

            <div className="flex justify-center mt-8 gap-6">
              <div className="group relative z-30">
                <button className="flex items-center space-x-2 glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition text-sm bg-black">
                  <span>500K</span>
                  <div className="w-4 h-4 rounded-full bg-gray-600 group-hover:bg-white transition"></div>
                  <span>Genesis</span>
                </button>
                <div className="absolute left-0 right-0 mt-2 p-4 bg-black border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Launch Art Agent with AI Image Generation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Basic Web3 Wallet Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Community Chat Implementation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative z-20">
                <button className="flex items-center space-x-2 glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition text-sm bg-black">
                  <span>1M</span>
                  <div className="w-4 h-4 rounded-full bg-gray-600 group-hover:bg-white transition"></div>
                  <span>Evolution</span>
                </button>
                <div className="absolute left-0 right-0 mt-2 p-4 bg-black border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Copy Writing Agent Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Enhanced AI Model Training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Multi-Agent Collaboration Features</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative z-10">
                <button className="flex items-center space-x-2 glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition text-sm bg-black">
                  <span>2M</span>
                  <div className="w-4 h-4 rounded-full bg-gray-600 group-hover:bg-white transition"></div>
                  <span>v2.0</span>
                </button>
                <div className="absolute left-0 right-0 mt-2 p-4 bg-black border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Advanced Agent Customization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Cross-Platform Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">&gt;</span>
                      <span>Decentralized Agent Marketplace</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
