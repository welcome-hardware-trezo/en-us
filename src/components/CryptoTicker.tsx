import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 5,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptos();
    const interval = setInterval(fetchCryptos, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white py-2 overflow-hidden">
        <div className="flex justify-center">
          <div className="animate-pulse h-6 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-white py-2 overflow-hidden border-b border-gray-100"
    >
      <div className="flex space-x-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="flex items-center space-x-2">
            <span className="font-medium">{crypto.name}</span>
            <span className="text-gray-600">{crypto.symbol.toUpperCase()}</span>
            <span className="font-semibold">${crypto.current_price.toLocaleString()}</span>
            <span
              className={`flex items-center ${
                crypto.price_change_percentage_24h >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <ArrowUp size={14} />
              ) : (
                <ArrowDown size={14} />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
        {/* Duplicate for continuous scrolling effect */}
        {cryptos.map((crypto) => (
          <div key={`${crypto.id}-dup`} className="flex items-center space-x-2">
            <span className="font-medium">{crypto.name}</span>
            <span className="text-gray-600">{crypto.symbol.toUpperCase()}</span>
            <span className="font-semibold">${crypto.current_price.toLocaleString()}</span>
            <span
              className={`flex items-center ${
                crypto.price_change_percentage_24h >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <ArrowUp size={14} />
              ) : (
                <ArrowDown size={14} />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CryptoTicker;