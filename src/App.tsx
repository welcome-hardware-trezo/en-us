import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Shield, Lock, Zap, Fingerprint, Wallet, 
  Smartphone, RefreshCw, HardDrive, CheckCircle, 
  AlertTriangle, HelpCircle, ArrowRight
} from 'lucide-react';

import Navbar from './components/Navbar';
import CryptoTicker from './components/CryptoTicker';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Trezor Hardware Wallet - Ultimate Security Guide</title>
        <meta name="description" content="Discover the ultimate guide to Trezor hardware wallets. Learn about security features, setup process, and why Trezor is the leading choice for cryptocurrency storage." />
        <meta name="keywords" content="hardware wallet trezor, trezor wallet, cryptocurrency security, bitcoin hardware wallet, crypto storage" />
      </Helmet>
      
      <Navbar />
      <CryptoTicker />
      <HeroSlider />
      
      <main>
        {/* Introduction Section */}
        <Section id="intro">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle>Secure Your Crypto with Trezor Hardware Wallet</SectionTitle>
            <p className="text-lg text-gray-700 mb-8">
              In the rapidly evolving world of cryptocurrency, security is paramount. The <span className="text-dark-green font-medium">Trezor hardware wallet</span> stands as a beacon of protection for digital asset holders, offering unparalleled security features and user-friendly interfaces that make crypto management both safe and simple.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={Shield} 
                title="Bank-Grade Security" 
                description="Protect your assets with military-grade encryption and secure element technology."
              />
              <FeatureCard 
                icon={Lock} 
                title="Complete Privacy" 
                description="Your private keys never leave your Trezor hardware wallet device."
              />
              <FeatureCard 
                icon={Zap} 
                title="User-Friendly" 
                description="Intuitive interface makes managing crypto simple for beginners and experts."
              />
            </div>
          </div>
        </Section>
        
        {/* What is Trezor Section */}
        <Section id="what-is-trezor" className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>What is a Trezor Hardware Wallet?</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  A <span className="text-dark-green font-medium">Trezor hardware wallet</span> is a physical device designed specifically to secure cryptocurrency private keys offline. Unlike software wallets that store your keys on internet-connected devices, Trezor keeps your digital assets isolated from potential online threats.
                </p>
                <p className="text-gray-700 mb-4">
                  Developed by SatoshiLabs, Trezor was the world's first cryptocurrency hardware wallet, pioneering a new standard for digital asset security. The device allows users to store, send, and receive various cryptocurrencies while maintaining complete control over their private keys.
                </p>
                <p className="text-gray-700">
                  With a <span className="text-dark-green font-medium">Trezor hardware wallet</span>, you can interact with blockchain networks securely, even when using compromised computers, as the device requires physical confirmation for all transactions.
                </p>
              </div>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Trezor Hardware Wallet" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-dark-green text-white px-4 py-2 rounded-full text-sm font-medium">
                  Original Since 2013
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
        
        {/* Why Choose Trezor Section */}
        <Section id="why-choose-trezor">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Why Choose a Trezor Hardware Wallet?</SectionTitle>
            <p className="text-lg text-gray-700 mb-8 text-center">
              The <span className="text-dark-green font-medium">Trezor hardware wallet</span> offers several advantages that make it the preferred choice for cryptocurrency security.
            </p>
            
            <div className="space-y-8">
              <FeatureRow
                icon={Fingerprint}
                title="Advanced Security Architecture"
                description="Trezor utilizes a deterministic approach to wallet generation, ensuring that your private keys are never exposed to potentially compromised devices. The secure element and encrypted storage provide multiple layers of protection against both physical and digital attacks."
              />
              
              <FeatureRow
                icon={Wallet}
                title="Multi-Currency Support"
                description="Store and manage thousands of cryptocurrencies on a single device. The Trezor hardware wallet supports Bitcoin, Ethereum, Litecoin, and over 1,000 other digital assets, making it a versatile solution for diverse crypto portfolios."
              />
              
              <FeatureRow
                icon={Smartphone}
                title="Intuitive User Experience"
                description="Despite its sophisticated security features, the Trezor hardware wallet offers a user-friendly interface through the Trezor Suite application. The combination of hardware security and software convenience makes managing digital assets accessible to users of all experience levels."
              />
              
              <FeatureRow
                icon={RefreshCw}
                title="Regular Updates & Support"
                description="SatoshiLabs consistently provides firmware updates to enhance security and add new features. The active development team ensures that your Trezor hardware wallet remains at the cutting edge of cryptocurrency security standards."
              />
            </div>
          </div>
        </Section>
        
        {/* How Trezor Works Section */}
        <Section id="how-trezor-works" className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>How the Trezor Hardware Wallet Works</SectionTitle>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Understanding the technology behind the <span className="text-dark-green font-medium">Trezor hardware wallet</span> helps appreciate its security advantages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold text-dark-green mb-4">Key Security Principles:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Cold Storage:</strong> Private keys are generated and stored offline, never exposed to internet-connected devices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Physical Verification:</strong> All transactions require manual confirmation on the device itself.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Seed Backup:</strong> A 12-24 word recovery phrase allows wallet restoration if the device is lost or damaged.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>PIN Protection:</strong> Multiple incorrect PIN attempts result in increasing time delays, preventing brute force attacks.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Open Source:</strong> Transparent code allows security researchers to verify and improve the system.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-dark-green mb-4">Transaction Process:</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="bg-dark-green text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">1</div>
                      <p className="text-gray-700">Initiate transaction on computer or mobile device</p>
                    </li>
                    <li className="flex">
                      <div className="bg-dark-green text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">2</div>
                      <p className="text-gray-700">Transaction details appear on Trezor screen for verification</p>
                    </li>
                    <li className="flex">
                      <div className="bg-dark-green text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">3</div>
                      <p className="text-gray-700">Physically confirm transaction on the Trezor device</p>
                    </li>
                    <li className="flex">
                      <div className="bg-dark-green text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">4</div>
                      <p className="text-gray-700">Device signs transaction with private keys (never exposed)</p>
                    </li>
                    <li className="flex">
                      <div className="bg-dark-green text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">5</div>
                      <p className="text-gray-700">Signed transaction is broadcast to the blockchain</p>
                    </li>
                  </ol>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Trezor Models Section */}
        <Section id="trezor-models">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Trezor Hardware Wallet Models</SectionTitle>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Trezor offers different <span className="text-dark-green font-medium">hardware wallet</span> models to suit various user needs and preferences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ModelCard
                title="Trezor Model T"
                image="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                features={[
                  "Full-color touchscreen for easy navigation",
                  "USB-C connectivity",
                  "Support for 1,800+ cryptocurrencies",
                  "Advanced recovery methods",
                  "Integrated SD card slot for additional features",
                  "Premium design and build quality"
                ]}
              />
              
              <ModelCard
                title="Trezor Model One"
                image="https://images.unsplash.com/photo-1625806335347-a20ea8c93447?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                features={[
                  "Compact and affordable design",
                  "OLED display with two buttons",
                  "Support for 1,000+ cryptocurrencies",
                  "Micro-USB connectivity",
                  "Perfect entry-level hardware wallet",
                  "Proven security track record"
                ]}
              />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Both models provide the core security benefits of the <span className="text-dark-green font-medium">Trezor hardware wallet</span> ecosystem, with differences primarily in user interface and additional features.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center bg-dark-green text-white hover:bg-light-green transition-colors px-6 py-3 rounded-full font-medium"
              >
                Compare Models <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </Section>
        
        {/* Setting Up Section */}
        <Section id="setting-up" className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Setting Up Your Trezor Hardware Wallet</SectionTitle>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Getting started with your <span className="text-dark-green font-medium">Trezor hardware wallet</span> is straightforward and user-friendly.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark-green mb-6">Step-by-Step Setup Process:</h3>
              
              <div className="space-y-6">
                <SetupStep
                  number={1}
                  title="Unbox and Connect Your Device"
                  description="Remove your Trezor from its tamper-evident packaging and connect it to your computer using the provided USB cable."
                />
                
                <SetupStep
                  number={2}
                  title="Install Trezor Suite"
                  description="Download and install Trezor Suite from the official website (trezor.io) on your computer or mobile device."
                />
                
                <SetupStep
                  number={3}
                  title="Follow the Setup Wizard"
                  description="The Trezor Suite will guide you through initializing your device, creating a new wallet, and setting up PIN protection."
                />
                
                <SetupStep
                  number={4}
                  title="Record Your Recovery Seed"
                  description="Write down your 12-24 word recovery seed on the provided recovery card. This is your backup if the device is lost or damaged."
                />
                
                <SetupStep
                  number={5}
                  title="Verify Your Recovery Seed"
                  description="The device will ask you to confirm your recovery seed by entering selected words in a specific order."
                />
                
                <SetupStep
                  number={6}
                  title="Set a Strong PIN"
                  description="Create a secure PIN that will be required whenever you use the device. The PIN layout changes each time for security."
                />
                
                <SetupStep
                  number={7}
                  title="Start Using Your Wallet"
                  description="Your Trezor hardware wallet is now ready to use. You can receive, store, and send cryptocurrencies securely."
                />
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0 mr-3" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800">Important Security Tips:</h4>
                    <ul className="mt-2 text-yellow-700 space-y-1">
                      <li>• Never share your recovery seed with anyone</li>
                      <li>• Store your recovery seed in a secure, offline location</li>
                      <li>• Consider using a metal backup for fire/water resistance</li>
                      <li>• Only download Trezor software from official sources</li>
                      <li>• Keep your firmware updated to the latest version</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* FAQ Section */}
        <Section id="faq">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Common questions about the <span className="text-dark-green font-medium">Trezor hardware wallet</span> and cryptocurrency security.
            </p>
            
            <div className="space-y-6">
              <FaqItem
                question="What happens if I lose my Trezor hardware wallet?"
                answer="If you lose your Trezor device, your funds remain secure as long as no one has your PIN. You can recover your wallet using your recovery seed (12-24 words) on a new Trezor device or compatible wallet software."
              />
              
              <FaqItem
                question="Can my Trezor hardware wallet be hacked?"
                answer="The Trezor is designed with multiple security layers that make remote hacking virtually impossible. Private keys never leave the device, and all transactions require physical confirmation. The biggest security risks come from phishing attacks or compromising your recovery seed."
              />
              
              <FaqItem
                question="Which cryptocurrencies does Trezor support?"
                answer="Trezor hardware wallets support Bitcoin, Ethereum, Litecoin, and over 1,000 other cryptocurrencies. The Model T supports more coins than the Model One due to its more advanced architecture."
              />
              
              <FaqItem
                question="Do I need an internet connection to use my Trezor?"
                answer="You need an internet connection to synchronize your wallet with blockchain networks and to send transactions. However, you can view your accounts and generate receiving addresses offline. The security of your private keys is maintained regardless of internet connectivity."
              />
              
              <FaqItem
                question="How often should I update my Trezor firmware?"
                answer="You should update your Trezor firmware whenever a new version is released. Updates often include security improvements and new features. The Trezor Suite application will notify you when updates are available."
              />
              
              <FaqItem
                question="Can I use my Trezor hardware wallet with mobile devices?"
                answer="Yes, Trezor hardware wallets can be used with Android devices via USB OTG (On-The-Go) cables or adapters. iOS support is more limited but possible through specific applications."
              />
            </div>
          </div>
        </Section>
        
        {/* Call to Action Section */}
        <Section id="cta" className="bg-dark-green text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Digital Assets Today</h2>
            <p className="text-xl mb-8">
              Join millions of users worldwide who trust the <span className="font-medium">Trezor hardware wallet</span> to protect their cryptocurrency investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-white text-dark-green hover:bg-gray-100 transition-colors px-8 py-3 rounded-full font-medium text-lg"
              >
                Shop Trezor Models
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-medium text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}

// Helper Components
const Section: React.FC<{
  id?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-16 md:py-24 px-4 ${className || ''}`}
    >
      {children}
    </motion.section>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-8 text-center">{children}</h2>
);

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="bg-dark-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon size={32} className="text-dark-green" />
    </div>
    <h3 className="text-xl font-semibold text-dark-green mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const FeatureRow: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-start"
  >
    <div className="bg-dark-green/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
      <Icon size={24} className="text-dark-green" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-dark-green mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </motion.div>
);

const ModelCard: React.FC<{
  title: string;
  image: string;
  features: string[];
}> = ({ title, image, features }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-dark-green mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-dark-green flex-shrink-0 mr-2 mt-1" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const SetupStep: React.FC<{
  number: number;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <div className="flex">
    <div className="bg-dark-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-dark-green mb-1">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const FaqItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-dark-green flex items-center">
          <HelpCircle size={20} className="mr-2 flex-shrink-0" />
          {question}
        </h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ArrowRight size={20} className="text-dark-green" />
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 bg-white border-t border-gray-100">
          <p className="text-gray-700">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default App;