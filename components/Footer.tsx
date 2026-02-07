import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="CJGB Logo" className="h-10 object-contain" />
              <span className="font-bold text-xs uppercase tracking-widest text-gray-400">your drink, your mood</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Đem đến cho Việt Nam những sâm tinh khiết từ xứ sở ẩm thực Hàn Quốc, phù hợp với cách sống và sức khỏe của người Việt.
            </p>
          </div>

          {/* Shopping Mall Information */}
          <div className="space-y-4">
            <h3 className="text-cjgb-yellow font-black uppercase tracking-wider text-sm border-b-2 border-cjgb-yellow pb-2">
              Thông Tin Cửa Hàng
            </h3>
            <div className="text-gray-300 text-sm space-y-3">
              <div>
                <p className="font-bold text-white mb-1">Tên Công Ty</p>
                <p className="text-xs">(주)천지개벽 - Công ty Cổ phần Cheonji Gaebyeok</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Người Đại Diện</p>
                <p className="text-xs">Kim Sang-kyung (김상경)</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Số Điện Thoại</p>
                <a href="tel:0808503101" className="text-cjgb-yellow hover:underline text-xs">
                  080-850-3101
                </a>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Số ĐKKD</p>
                <p className="text-xs">427-88-00090</p>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-cjgb-yellow font-black uppercase tracking-wider text-sm border-b-2 border-cjgb-yellow pb-2">
              Dịch Vụ Khách Hàng
            </h3>
            <div className="text-gray-300 text-sm space-y-3">
              <div>
                <p className="font-bold text-white mb-1">Tư Vấn & Đặt Hàng</p>
                <a href="tel:0808503101" className="text-cjgb-yellow hover:underline text-xs">
                  080-850-3101
                </a>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Email</p>
                <a href="mailto:cjgbcoltd@naver.com" className="text-cjgb-yellow hover:underline text-xs break-all">
                  cjgbcoltd@naver.com
                </a>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Giờ Hoạt Động</p>
                <p className="text-xs">10:00 AM - 17:00 PM (Thứ 2 - 6)</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Bảo Vệ Dữ Liệu</p>
                <p className="text-xs">Cheonji Gaebyeok</p>
              </div>
            </div>
          </div>

          {/* Payment & Social */}
          <div className="space-y-4">
            <h3 className="text-cjgb-yellow font-black uppercase tracking-wider text-sm border-b-2 border-cjgb-yellow pb-2">
              Thanh Toán & Kết Nối
            </h3>
            <div className="text-gray-300 text-sm space-y-3 mb-6">
              <div>
                <p className="font-bold text-white mb-1">Ngân Hàng</p>
                <p className="text-xs">KB Kookmin Bank (국민은행)</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Tài Khoản</p>
                <p className="text-xs font-mono">55950101324099</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Chủ TK</p>
                <p className="text-xs">(주)천지개벽</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-cjgb-yellow font-bold text-xs uppercase tracking-wider">Theo Dõi Chúng Tôi</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-cjgb-yellow text-black px-4 py-2 rounded text-xs font-bold hover:opacity-80 transition-opacity">
                  Instagram
                </a>
                <a href="#" className="bg-cjgb-yellow text-black px-4 py-2 rounded text-xs font-bold hover:opacity-80 transition-opacity">
                  Kakao
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Address Section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h4 className="text-cjgb-yellow font-black uppercase tracking-wider text-sm mb-3">Địa Chỉ Trụ Sở</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            402, Tầng 4, 109, Chungnyeol-daero 237beon-gil, Dongnae-gu, Busan, 47808
            <br />
            <span className="text-gray-400">(Tòa nhà Samkwang, Myeongnyun-dong)</span>
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs">
              Giấy phép kinh doanh thương mại điện tử: 
              <span className="text-gray-300 font-bold"> 2025-Busan Dongnae-0260</span>
            </p>
          </div>
        </div>

        {/* bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-cjgb-yellow text-xs uppercase tracking-wider transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="text-gray-400 hover:text-cjgb-yellow text-xs uppercase tracking-wider transition-colors">
              Điều Khoản Sử Dụng
            </a>
            <a href="#" className="text-gray-400 hover:text-cjgb-yellow text-xs uppercase tracking-wider transition-colors">
              Liên Hệ Quảng Cáo
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-xs">
              © 2025 CJGB Vietnam. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-gray-500 text-xs">
              Made with <span className="text-cjgb-yellow">❤</span> for Premium Beverage Lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
