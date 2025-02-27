import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap, Award } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  const slides = [
    {
      title: "Ultimate Security for Your Crypto Assets",
      subtitle: "Trezor hardware wallets provide bank-grade security for your digital assets",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Complete Control Over Your Funds",
      subtitle: "Be your own bank with Trezor's secure offline storage solution",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fast & Intuitive Experience",
      subtitle: "Manage your crypto portfolio with ease using Trezor Suite",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Industry-Leading Protection",
      subtitle: "Trust the original hardware wallet with proven security track record",
      icon: Award,
      image: "https://images.unsplash.com/photo-1625806335347-a20ea8c93447?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-dark-green/50"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <slide.icon size={60} className="mx-auto" />
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-center mb-4"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-center max-w-3xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <a 
                  href="#learn-more" 
                  className="bg-white text-dark-green hover:bg-gray-100 transition-colors px-8 py-3 rounded-full font-medium text-lg"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;