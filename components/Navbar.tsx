import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Kiểm tra nếu đang ở trang chủ
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm xử lý click thông minh cho các section nội bộ
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // Nếu đang ở trang chủ: tìm element và cuộn mượt
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Nếu đang ở trang con (About/Info): điều hướng về trang chủ kèm hash ID
      navigate(`/#${targetId}`);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Click về đầu trang chủ */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={(e) => handleNavClick(e as any, 'hero')}>
            <img src="/images/logo.png" alt="CJGB Logo" className="h-10 object-contain cursor-pointer" />
          </Link>
          <span className={`hidden md:inline font-bold text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-gray-500' : 'text-white'}`}>
            your drink, your mood
          </span>
        </div>
        
        {/* Menu Items - Đã sắp xếp lại thứ tự theo yêu cầu */}
        <div className={`hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          
          {/* 1. Trang Chủ */}
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-cjgb-yellow transition-colors">
            Trang Chủ
          </a>

          {/* 2. Giá Trị (Authority section) */}
          <a href="#authority" onClick={(e) => handleNavClick(e, 'authority')} className="hover:text-cjgb-yellow transition-colors">
            Giá Trị
          </a>

          {/* 3. Sản Phẩm */}
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-cjgb-yellow transition-colors">
            Sản Phẩm
          </a>

          {/* 4. Ưu Đãi Tết */}
          <a href="#promo" onClick={(e) => handleNavClick(e, 'promo')} className={`animate-pulse transition-colors font-black ${isScrolled ? 'text-red-600' : 'text-cjgb-yellow'}`}>
            🧧 Ưu Đãi Tết
          </a>

          {/* 5. Về CJGB (Trang riêng) */}
          <Link to="/about" className="hover:text-cjgb-yellow transition-colors">
            Về CJGB
          </Link>

          {/* 6. Tin Tức (Trang riêng) */}
          <Link to="/info" className="hover:text-cjgb-yellow transition-colors">
            Tin Tức
          </Link>
          
        </div>

        {/* Nút Mua Ngay */}
        <button className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-2 ${isScrolled ? 'bg-black text-white border-black hover:bg-cjgb-yellow hover:text-black' : 'bg-white text-black border-white hover:bg-cjgb-yellow'}`}>
          Mua Ngay
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
