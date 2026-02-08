
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="CJGB Logo" className="h-10 object-contain" />
          <span className={`hidden md:inline font-bold text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-gray-500' : 'text-white'}`}>your drink, your mood</span>
        </div>
        
        <div className={`hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          <Link to="/" className="hover:text-cjgb-yellow transition-colors">Trang Chủ</Link>
          <Link to="/about" className="hover:text-cjgb-yellow transition-colors">Về CJGB</Link>
          <Link to="/info" className="hover:text-cjgb-yellow transition-colors">Tin Tức</Link>
          <Link to="/#products" className="hover:text-cjgb-yellow transition-colors">Sản Phẩm</Link>
          <Link to="/#authority" className="hover:text-cjgb-yellow transition-colors">Giá Trị</Link>
          <Link to="/#promo" className={`animate-pulse transition-colors ${isScrolled ? 'text-red-600' : 'text-yellow-300'}`}>Ưu Đãi</Link>
        </div>

        <button className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-2 ${isScrolled ? 'bg-black text-white border-black hover:bg-cjgb-yellow hover:text-black' : 'bg-white text-black border-white hover:bg-cjgb-yellow'}`}>
          Mua Ngay
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
