'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Cloud, Sun, Wind, BarChart, Check, Bot, Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { TermsOfServiceModal, PrivacyPolicyModal } from './components/legal-modals'
import { WhitepaperSection } from './components/whitepaper-section'
import { SpaceBackground } from './components/space-background'
import { HeaderLogo } from './components/header-logo'

const Mermaid = dynamic(() => import('react-mermaid2'), { ssr: false })

const mermaidDiagram = `
graph TB
    A["Global Weather Data Sources"]
    B["Social Media Trends"]
    C["ECMWF Data"]
    D["Iris AI Core"]
    E["Analysis Engine"]
    F["Message Generation"]
    G["User Notifications"]
    H["Society Impact Reports"]
    L["Supply Chain Optimization"]

    A -->|"Real-time data"| D
    B -->|"Trend analysis"| D
    C -->|"Weather models"| D
    
    D -->|"Process data"| E
    E -->|"Generate insights"| F
    E -->|"Create reports"| H
    E -->|"Optimize routes"| L
    
    F -->|"Weather alerts"| G
    F -->|"Forecasts"| G
    
    G -->|"X updates"| I["X Platform"]
    G -->|"Messages"| J["Telegram"]
    
    H -->|"Share insights"| K["Public & Organizations"]
    L -->|"Route recommendations"| M["Logistics Companies"]
    L -->|"Risk mitigation"| N["Cost Savings"]

    style D fill:#4299e1,stroke:#2d3748,stroke-width:2px
    style E fill:#3182ce,stroke:#2d3748,stroke-width:2px
    style F fill:#2b6cb0,stroke:#2d3748,stroke-width:2px
    style L fill:#48bb78,stroke:#2d3748,stroke-width:2px
`

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  const navLinks = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About" },
    { href: "#contract-address", text: "Contract Address" },
    { href: "#roadmap", text: "Roadmap" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-blue-950">
      <header className="fixed w-full px-4 lg:px-6 h-14 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
        <div className="container max-w-6xl flex justify-between items-center">
          <HeaderLogo />
          <nav className="hidden md:flex gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} className="text-sm font-medium text-white hover:text-blue-400" href={link.href}>
                {link.text}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-75 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-xl font-medium text-white hover:text-blue-400 py-2"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}

      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <SpaceBackground />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center space-y-8 p-6 bg-black/30 backdrop-blur-sm rounded-xl max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Meet Iris, Your AI Weather Agent
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
              An intelligent AI agent powered by Google DeepMind and ECMWF technologies, delivering precise weather forecasting and climate insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Link href="https://x.com/TheweatherAI" target="_blank">
                  Follow Iris on X
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="https://github.com/weather-witch-lab" target="_blank">
                  See the AI model on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-black/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 text-white">AI Agent Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Sun className="h-12 w-12 text-yellow-500" />
              <h3 className="text-xl font-bold text-white">Intelligent Forecasting</h3>
              <p className="text-blue-200">
                As an AI agent, Iris utilizes Google DeepMind technologies to deliver hyper-local, accurate weather predictions across multiple timeframes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Wind className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold text-white">Automated Climate Analysis</h3>
              <p className="text-blue-200">
                Iris autonomously processes ECMWF data for in-depth climate trend analysis and long-term environmental forecasting.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <BarChart className="h-12 w-12 text-green-500" />
              <h3 className="text-xl font-bold text-white">Supply Chain Optimization</h3>
              <p className="text-blue-200">
                Iris helps supply chains avoid extreme weather events, optimizing routes and schedules to save millions in potential losses and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24 bg-blue-950/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white">About Iris</h2>
              <p className="text-blue-200">
                As an advanced AI agent, Iris combines cutting-edge technologies from Google DeepMind and ECMWF to revolutionize weather forecasting and climate analysis through autonomous decision-making and real-time data processing.
              </p>
              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold text-white">How Iris Works</h3>
                <p className="text-blue-200">
                  Iris continuously monitors global weather patterns and social trends, performing AI-powered analysis to generate valuable insights that benefit society. Through real-time processing, Iris delivers timely weather forecasts and alerts directly to users via X and Telegram platforms.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Key Capabilities</h3>
                <ul className="grid gap-4">
                  <li className="flex items-center space-x-4">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">Global trend analysis & weather pattern monitoring</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">Real-time AI-powered weather insights</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">Automated alerts via X and Telegram</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">Societal impact analysis & recommendations</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">Supply chain optimization to avoid extreme weather</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Iris AI Framework</h3>
            <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center overflow-x-auto">
              <Mermaid chart={mermaidDiagram} />
            </div>
          </div>
        </div>
      </section>

      <section id="contract-address" className="w-full py-12 bg-black/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Solana CA: Coming Soon</h2>
          </div>
        </div>
      </section>

      <section id="roadmap" className="w-full py-16 md:py-24 bg-blue-950/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white">Iris Evolution Roadmap</h2>
            <p className="mx-auto max-w-[600px] text-blue-200 text-sm sm:text-base md:text-lg">
              Our journey to revolutionize global weather intelligence and climate action
            </p>
            <div className="w-full max-w-4xl mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 1: Foundation</h3>
                  <ul className="text-left text-blue-100 space-y-2 text-sm sm:text-base">
                    <li>• Advanced AI weather forecasting system</li>
                    <li>• Global climate pattern analysis</li>
                    <li>• Integration with major social platforms</li>
                    <li>• Real-time extreme weather alerts</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 2: Expansion</h3>
                  <ul className="text-left text-blue-100 space-y-2 text-sm sm:text-base">
                    <li>• Iris mobile app for iOS and Android</li>
                    <li>• Personalized weather insights</li>
                    <li>• Community-driven weather reporting</li>
                    <li>• Integration with smart home devices</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 3: AI Ecosystem</h3>
                  <ul className="text-left text-blue-100 space-y-2 text-sm sm:text-base">
                    <li>• Weather data API for AI agents</li>
                    <li>• Blockchain-based data exchange</li>
                    <li>• AI collaboration for enhanced predictions</li>
                    <li>• Ecosystem for weather-based AI services</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 4: Global Impact</h3>
                  <ul className="text-left text-blue-100 space-y-2 text-sm sm:text-base">
                    <li>• Worldwide IoT weather sensor network data integration</li>
                    <li>• AI-driven climate change mitigation strategies</li>
                    <li>• Predictive ecosystem management using IoT data</li>
                    <li>• Global climate resilience initiatives powered by sensor insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://x.com/TheweatherAI" target="_blank">
                  Follow Iris on X for Updates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-black/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <WhitepaperSection />
        </div>
      </section>

      <footer className="w-full py-6 px-4 md:px-6 border-t border-blue-800 bg-black/80 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-blue-300">© 2025 Weather Witch Lab. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <TermsOfServiceModal />
            <PrivacyPolicyModal />
          </nav>
        </div>
      </footer>
    </div>
  )
}

