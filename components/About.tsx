import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();
  const sectionContact = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight">
            Về <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">CJGB</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Thương hiệu đồ uống hàng đầu từ Hàn Quốc, mang đến những sản phẩm chức năng cao cấp giúp bạn phục hồi năng lượng, cân bằng sức khỏe và tận hưởng cuộc sống năng động.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 md:py-24">
        {/* Section 1: About CJGB */}
        <section 
          ref={section1.ref}
          className={`mb-20 transition-all duration-1000 ${
            section1.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                  <span className="text-black">Về</span> <span className="text-yellow-500">CJGB</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  CJGB là thương hiệu độc quyền đồ uống đến từ Hàn Quốc, chuyên phát triển các sản phẩm chức năng cao cấp giúp phục hồi năng lượng và hỗ trợ sức khỏe toàn diện. 
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Với nền tảng nghiên cứu khoa học lâm sàng và quá trình phát triển nghiêm ngặt, CJGB đã trở thành lựa chọn tin cậy của hàng triệu người tiêu dùng trên thị trường châu Á, đặc biệt tại Seoul - trung tâm sản phẩm chức năng hàng đầu thế giới.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hiện nay, CJGB tự hào là sản phẩm <strong>#1 Best Seller tại GS25</strong> (hệ thống cửa hàng tiện lợi lớn nhất Hàn Quốc), vượt mặt Coca-Cola năm 2018 và tiếp tục dẫn đầu thị phần với hơn <strong>40 triệu chai</strong> bán ra toàn cầu.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                <img src="/images/about-hero.jpg" alt="CJGB sản phẩm" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section 
          ref={section2.ref}
          className={`mb-20 bg-gray-50 py-16 transition-all duration-1000 ${
            section2.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">
              Sứ Mệnh & Tầm Nhìn
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-start">
                <h3 className="text-2xl font-extrabold mb-3 text-yellow-600">Sứ Mệnh</h3>
                <p className="text-black text-lg leading-relaxed">
                  Mang đến giải pháp đồ uống an toàn, hiệu quả và tự nhiên, giúp người dùng phục hồi năng lượng, cân bằng sức khỏe và tận hưởng cuộc sống năng động, tự tin.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-start">
                <h3 className="text-2xl font-extrabold mb-3 text-yellow-600">Tầm Nhìn</h3>
                <p className="text-black text-lg leading-relaxed">
                  Trở thành thương hiệu đồ uống chức năng số một tại Châu Á, nơi mọi người tin tưởng để cải thiện chất lượng và nâng cao sức khỏe toàn diện trong cuộc sống hiện đại.
                </p>
              </div>

              {/* Core Values */}
              <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-start">
                <h3 className="text-2xl font-extrabold mb-3 text-yellow-600">Giá Trị Cơ Bản</h3>
                <p className="text-black text-lg leading-relaxed">
                  Chất lượng, Minh bạch, Đổi mới và Trách nhiệm — cam kết mang đến sản phẩm được kiểm chứng khoa học, an toàn và đáng tin cậy cho người tiêu dùng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: History & Achievement */}
        <section 
          ref={section3.ref}
          className={`mb-20 transition-all duration-1000 ${
            section3.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">
              Lịch Sử & Thành Tựu
            </h2>

            <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-lg p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-black mb-4">Từ Phòng Thí Nghiệm Đến Thị Trường</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Bắt nguồn từ các phòng thí nghiệm tiên tiến tại Seoul, Hàn Quốc, CJGB tập trung nghiên cứu công thức đặc biệt dựa trên thảo mộc tự nhiên và dẫn xuất từ các loại sâm danh tiếng.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Mỗi sản phẩm trải qua hàng trăm lần thử nghiệm lâm sàng và kiểm định chất lượng nghiêm ngặt trước khi được phép bán ra thị trường quốc tế.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                      <div className="bg-yellow-500 text-black rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
                        <div className="text-4xl font-black mb-2">2018</div>
                        <p className="text-sm font-bold">No.1 Best Seller GS25</p>
                      </div>
                      <div className="bg-yellow-500 text-black rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
                        <div className="text-4xl font-black mb-2">40M+</div>
                        <p className="text-sm font-bold">Chai Đã Bán</p>
                      </div>
                      <div className="bg-yellow-500 text-black rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
                        <div className="text-4xl font-black mb-2">15+</div>
                        <p className="text-sm font-bold">Quốc Gia</p>
                      </div>
                      <div className="bg-yellow-500 text-black rounded-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
                        <div className="text-4xl font-black mb-2">100%</div>
                        <p className="text-sm font-bold">Tự Nhiên</p>
                      </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-black">2015: Ra Mắt Dòng Sản Phẩm Giải Rượu</h4>
                <p className="text-gray-700">CJGB chính thức ra mắt sản phẩm giải rượu (Hangover Relief Drink) với công thức độc quyền, nhanh chóng chiếm lĩnh thị trường Hàn Quốc.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-black">2018: Trở Thành #1 Best Seller</h4>
                <p className="text-gray-700">CJGB vượt mặt các thương hiệu lớn như Coca-Cola, trở thành sản phẩm đóng chai bán chạy nhất tại GS25, hệ thống cửa hàng tiện lợi chi phối Hàn Quốc.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-black">2020: Mở Rộng Thị Trường Châu Á</h4>
                <p className="text-gray-700">Mở rộng sang Nhật Bản, Đài Loan, Thái Lan và các quốc gia Đông Nam Á khác, tiếp tục duy trì vị trí dẫn đầu trong danh mục sản phẩm chức năng.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-black">2024: Chính Thức Vào Việt Nam</h4>
                <p className="text-gray-700">CJGB chính thức phát hành tại Việt Nam, mang sản phẩm chất lượng quốc tế đến tay các khách hàng Việt Nam, cam kết cung cấp giải pháp sức khỏe tối ưu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Manufacturing & Quality */}
        <section 
          ref={section4.ref}
          className={`mb-20 bg-gray-50 py-16 transition-all duration-1000 ${
            section4.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">
              Sản Xuất & Đảm Bảo Chất Lượng
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-black">Quy Trình Sản Xuất Quốc Tế</h3>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black">✓</div>
                    <div>
                      <p className="font-bold text-black">Tuân Thủ Tiêu Chuẩn ISO & HACCP</p>
                      <p className="text-gray-700 text-sm">Áp dụng các tiêu chuẩn quốc tế cao nhất trong an toàn thực phẩm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black">✓</div>
                    <div>
                      <p className="font-bold text-black">Nguyên Liệu Chọn Lọc</p>
                      <p className="text-gray-700 text-sm">Tuyển chọn các loại sâm, thảo mộc chất lượng cao nhất từ Hàn Quốc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black">✓</div>
                    <div>
                      <p className="font-bold text-black">Kiểm Định Lâm Sàng</p>
                      <p className="text-gray-700 text-sm">Mỗi lô hàng được kiểm tra hiệu quả và an toàn qua các phòng thí nghiệm độc lập</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black">✓</div>
                    <div>
                      <p className="font-bold text-black">Công Nghệ Hiện Đại</p>
                      <p className="text-gray-700 text-sm">Sử dụng máy móc tự động hiện đại để đảm bảo độ chính xác tuyệt đối</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col gap-4 h-full">
                <h3 className="text-lg font-bold mb-4 text-black">Chứng Chỉ & Công Nhận</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold">KFDA (Korea Food & Drug Administration)</p>
                      <p className="text-sm">Được cấp phép bởi cơ quan quản lý thực phẩm và dược phẩm Hàn Quốc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold">GMP (Good Manufacturing Practice)</p>
                      <p className="text-sm">Áp dụng quy trình sản xuất an toàn, đạt chuẩn quốc tế.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold">ISO 22000</p>
                      <p className="text-sm">Hệ thống quản lý an toàn thực phẩm theo tiêu chuẩn quốc tế.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold">R&amp;D & Kiểm định lâm sàng</p>
                      <p className="text-sm">Đầu tư nghiên cứu liên tục và kiểm nghiệm độc lập cho hiệu quả sản phẩm.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        

        {/* Section 7: Contact CTA */}
        <section 
          ref={sectionContact.ref}
          className={`mb-0 transition-all duration-1000 ${
            sectionContact.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6 py-16 bg-black text-white rounded-lg">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Liên Hệ & Hợp Tác
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Để biết thêm thông tin về CJGB, các sản phẩm, hoặc các cơ hội hợp tác, vui lòng liên hệ với chúng tôi qua các kênh dưới đây.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-lg mx-auto">
                <a href="tel:0808503101" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all">
                  📞 Gọi Ngay
                </a>
                <a href="mailto:cjgbcoltd@naver.com" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all">
                  ✉️ Email
                </a>
              </div>

              <p className="text-gray-400 text-sm">
                Hoặc xem thêm thông tin chi tiết tại trang liên hệ chính thức của chúng tôi.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
