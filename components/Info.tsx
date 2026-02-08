import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Info: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <header className="pt-32 pb-12 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">Thông Tin & Sự Kiện</h1>
        </div>
      </header>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Featured */}
          <article className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/news-feature.jpg" alt="Tin nổi bật" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">CJGB tại Vietnam Launch Event</h2>
              <p className="text-gray-700 mb-4">Sự kiện ra mắt chính thức CJGB tại Việt Nam với nhiều hoạt động trải nghiệm sản phẩm và ưu đãi đặc biệt.</p>
              <a href="#" className="text-yellow-600 font-bold">Xem chi tiết →</a>
            </div>
          </article>

          {/* Sidebar: latest posts */}
          <aside className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Bài viết mới</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#" className="hover:text-yellow-500">5 cách phục hồi năng lượng sau buổi tiệc</a></li>
                <li><a href="#" className="hover:text-yellow-500">Hướng dẫn sử dụng sản phẩm đúng cách</a></li>
                <li><a href="#" className="hover:text-yellow-500">Thành phần tự nhiên trong CJGB</a></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Sự kiện sắp tới</h3>
              <p className="text-sm text-gray-600">Hiện không có sự kiện. Chúng tôi sẽ cập nhật khi có hoạt động mới.</p>
            </div>
          </aside>
        </div>

        <section className="container mx-auto px-6 mt-12">
          <h3 className="text-2xl font-black mb-6">Tin tức khác</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <img src="/images/news1.jpg" alt="news1" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Lợi ích thành phần thảo mộc</h4>
                <p className="text-sm text-gray-600">Tìm hiểu công dụng các thành phần thảo dược trong sản phẩm CJGB.</p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <img src="/images/news2.jpg" alt="news2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Hướng dẫn dùng: khi nào uống hợp lý</h4>
                <p className="text-sm text-gray-600">Mẹo sử dụng để đạt hiệu quả tối ưu.</p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <img src="/images/news3.jpg" alt="news3" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Câu chuyện khách hàng</h4>
                <p className="text-sm text-gray-600">Chia sẻ trải nghiệm thực tế khi dùng CJGB.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Info;
