
import React, { useState, useEffect } from 'react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="CJGB Logo" className="h-10 object-contain" />
          <span className="hidden md:inline font-bold text-xs uppercase tracking-widest text-gray-500">your drink, your mood</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider">
          <a href="#hero" className="hover:text-cjgb-yellow transition-colors">Trang Chủ</a>
          <a href="#about" className="hover:text-cjgb-yellow transition-colors">Về CJGB</a>
          <a href="#products" className="hover:text-cjgb-yellow transition-colors">Sản Phẩm</a>
          <a href="#authority" className="hover:text-cjgb-yellow transition-colors">Giá Trị</a>
          <a href="#promo" className="text-red-600 animate-pulse">Ưu Đãi</a>
        </div>

        <button className="bg-black text-white px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-cjgb-yellow hover:text-black transition-all border-2 border-black">
          Mua Ngay
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
